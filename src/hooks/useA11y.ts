import { useEffect, useRef } from 'react';

interface UseA11yProps {
  announcePageChanges?: boolean;
  trapFocus?: boolean;
  ariaLive?: 'off' | 'polite' | 'assertive';
}

export function useA11y({
  announcePageChanges = true,
  trapFocus = false,
  ariaLive = 'polite'
}: UseA11yProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sayfa değişikliklerini duyur
  useEffect(() => {
    if (!announcePageChanges) return;

    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', ariaLive);
    announcer.classList.add('sr-only');
    document.body.appendChild(announcer);

    return () => {
      document.body.removeChild(announcer);
    };
  }, [announcePageChanges, ariaLive]);

  // Focus tuzağı
  useEffect(() => {
    if (!trapFocus || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [trapFocus]);

  return { containerRef };
}

export function useAnnouncer() {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.classList.add('sr-only');
    document.body.appendChild(announcer);
    
    // Mesajı iki kere set et - ekran okuyucuların değişikliği algılaması için
    setTimeout(() => {
      announcer.textContent = message;
      
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }, 100);
  };

  return { announce };
}