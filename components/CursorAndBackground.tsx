'use client';

import { useEffect, useRef } from 'react';

export default function CursorAndBackground() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const light = lightRef.current;

    // Mouse movement for cursor line and dynamic radial light
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
      if (light) {
        light.style.setProperty('--x', `${e.clientX}px`);
        light.style.setProperty('--y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic cursor interactions on interactive elements
    const handleMouseEnterTarget = () => {
      if (cursor) cursor.style.height = '80px';
    };
    const handleMouseLeaveTarget = () => {
      if (cursor) cursor.style.height = '40px';
    };

    const handleMouseEnterInput = () => {
      if (cursor) {
        cursor.style.height = '20px';
        cursor.style.background = 'white';
      }
    };
    const handleMouseLeaveInput = () => {
      if (cursor) cursor.style.height = '40px';
    };

    const handleFocusInput = () => {
      if (cursor) {
        cursor.style.height = '60px';
        cursor.style.background = '#22c55e';
      }
    };
    const handleBlurInput = () => {
      if (cursor) {
        cursor.style.height = '40px';
        cursor.style.background = 'white';
      }
    };

    const targets = document.querySelectorAll('a, button');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterTarget);
      el.addEventListener('mouseleave', handleMouseLeaveTarget);
    });

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInput);
      el.addEventListener('mouseleave', handleMouseLeaveInput);
      el.addEventListener('focus', handleFocusInput);
      el.addEventListener('blur', handleBlurInput);
    });

    // Ripple click effect
    const rippleListener = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.ripple');
      if (target) {
        const circle = document.createElement('span');
        const rect = target.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;
        target.appendChild(circle);
        setTimeout(() => circle.remove(), 500);
      }
    };
    document.addEventListener('click', rippleListener);

    // IntersectionObserver for fade animations
    const createObserver = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        },
        { threshold: 0.25 }
      );
      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const obsRight = createObserver('.fade-right');
    const obsLeft = createObserver('.fade-left');
    const obsTop = createObserver('.fade-top');
    const obsBot = createObserver('.fade-bot');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', rippleListener);

      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterTarget);
        el.removeEventListener('mouseleave', handleMouseLeaveTarget);
      });

      inputs.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInput);
        el.removeEventListener('mouseleave', handleMouseLeaveInput);
        el.removeEventListener('focus', handleFocusInput);
        el.removeEventListener('blur', handleBlurInput);
      });

      obsRight.disconnect();
      obsLeft.disconnect();
      obsTop.disconnect();
      obsBot.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom glitch line cursor */}
      <div ref={cursorRef} className="cursor-line hidden sm:block" suppressHydrationWarning />
      {/* Fixed 70px grid background */}
      <div className="grid-bg" suppressHydrationWarning />
      {/* Dynamic mouse-following radial spotlight */}
      <div ref={lightRef} className="light" suppressHydrationWarning />
    </>
  );
}
