import { useEffect } from 'react';

interface WebVitalsMetric {
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

type ReportCallback = (metric: WebVitalsMetric) => void;

// Thresholds based on Google's Core Web Vitals
const thresholds = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(name: keyof typeof thresholds, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = thresholds[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Simple performance observer implementation
function observeMetric(
  entryType: string,
  callback: (entry: PerformanceEntry) => void
) {
  if (typeof PerformanceObserver === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(callback);
    });
    observer.observe({ type: entryType, buffered: true });
    return observer;
  } catch {
    return undefined;
  }
}

export function useWebVitals(onReport?: ReportCallback) {
  useEffect(() => {
    const observers: PerformanceObserver[] = [];

    // LCP - Largest Contentful Paint
    const lcpObserver = observeMetric('largest-contentful-paint', (entry) => {
      const value = entry.startTime;
      onReport?.({
        name: 'LCP',
        value,
        rating: getRating('LCP', value),
        delta: value,
        id: `lcp-${Date.now()}`,
      });
    });
    if (lcpObserver) observers.push(lcpObserver);

    // FCP - First Contentful Paint
    const fcpObserver = observeMetric('paint', (entry) => {
      if (entry.name === 'first-contentful-paint') {
        const value = entry.startTime;
        onReport?.({
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          delta: value,
          id: `fcp-${Date.now()}`,
        });
      }
    });
    if (fcpObserver) observers.push(fcpObserver);

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = observeMetric('layout-shift', (entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        onReport?.({
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          delta: entry.value,
          id: `cls-${Date.now()}`,
        });
      }
    });
    if (clsObserver) observers.push(clsObserver);

    // FID - First Input Delay
    const fidObserver = observeMetric('first-input', (entry: any) => {
      const value = entry.processingStart - entry.startTime;
      onReport?.({
        name: 'FID',
        value,
        rating: getRating('FID', value),
        delta: value,
        id: `fid-${Date.now()}`,
      });
    });
    if (fidObserver) observers.push(fidObserver);

    // TTFB - Time to First Byte
    if (typeof performance !== 'undefined' && performance.timing) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        const value = navEntry.responseStart - navEntry.requestStart;
        onReport?.({
          name: 'TTFB',
          value,
          rating: getRating('TTFB', value),
          delta: value,
          id: `ttfb-${Date.now()}`,
        });
      }
    }

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [onReport]);
}

// Log vitals to console in development
export function logWebVitals() {
  return (metric: WebVitalsMetric) => {
    const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
    console.log(`${emoji} ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
  };
}

// Send vitals to analytics endpoint
export function sendToAnalytics(endpoint: string) {
  return (metric: WebVitalsMetric) => {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      url: window.location.href,
      timestamp: Date.now(),
    });

    // Use sendBeacon for reliable delivery
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, body);
    } else {
      fetch(endpoint, { body, method: 'POST', keepalive: true });
    }
  };
}
