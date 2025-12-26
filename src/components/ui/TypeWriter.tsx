import React, { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
  cursorChar?: string;
}

export function TypeWriter({
  text,
  speed = 80,
  delay = 0,
  className = '',
  onComplete,
  cursor = true,
  cursorChar = '|'
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [displayText, text, speed, isTyping, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span 
          className={`inline-block ml-0.5 transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}

interface TypeWriterLoopProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursor?: boolean;
  cursorChar?: string;
}

export function TypeWriterLoop({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className = '',
  cursor = true,
  cursorChar = '|'
}: TypeWriterLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentText = texts[currentIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Move to next text
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentText, isDeleting, speed, deleteSpeed, pauseDuration, texts.length]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span 
          className={`inline-block ml-0.5 transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
