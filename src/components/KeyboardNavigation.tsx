import { useEffect } from 'react';

interface KeyboardNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  onSelect?: (index: number) => void;
  disabled?: boolean;
}

export default function KeyboardNavigation({ 
  onNext, 
  onPrevious, 
  onSelect,
  disabled 
}: KeyboardNavigationProps) {
  useEffect(() => {
    if (disabled) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'Enter':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
          if (onSelect) {
            onSelect(parseInt(event.key) - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onNext, onPrevious, onSelect, disabled]);

  return null;
}