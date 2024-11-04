import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
  showSteps?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({ 
  currentStep, 
  totalSteps, 
  label,
  showSteps = false,
  size = 'md'
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div 
      role="progressbar" 
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || `İlerleme: ${progress}%`}
      className="w-full"
    >
      <div className={`progress-bar ${heights[size]}`}>
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
      
      {showSteps && (
        <div className="flex justify-between mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                       ${index < currentStep 
                         ? 'bg-primary text-white' 
                         : 'bg-gray-100 text-text-light'}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}

      <div className="sr-only">
        {currentStep} / {totalSteps} tamamlandı
      </div>
    </div>
  );
}