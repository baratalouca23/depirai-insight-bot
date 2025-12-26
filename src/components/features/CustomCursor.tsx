import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === 'pointer' ||
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.closest('a') !== null ||
          hoveredElement.closest('button') !== null
        );
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, position.x, position.y]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ease-out ${
            isClicking ? 'w-2 h-2' : 'w-3 h-3'
          }`}
        />
      </div>

      {/* Trailing ring */}
      <div
        className={`fixed pointer-events-none z-[9998] mix-blend-difference transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out, width 0.2s ease-out, height 0.2s ease-out',
        }}
      >
        <div
          className={`rounded-full border-2 border-white transition-all duration-200 ease-out ${
            isPointer 
              ? 'w-12 h-12 bg-white/10' 
              : isClicking 
                ? 'w-6 h-6' 
                : 'w-8 h-8'
          }`}
        />
      </div>

      {/* Global style to hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
