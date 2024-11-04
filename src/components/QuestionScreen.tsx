import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import ProgressBar from './ProgressBar';
import { questions } from '../data/questions';
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  BookOpen,
  CheckCircle2,
  Info,
} from 'lucide-react';

export default function QuestionScreen() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [showHelp, setShowHelp] = React.useState(false);
  const [multiChoiceSelections, setMultiChoiceSelections] = React.useState<string[]>([]);

  const currentQuestionIndex = state.currentStep - 1;
  const currentQuestion = questions[currentQuestionIndex];

  React.useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      navigate('/results');
    }
  }, [currentQuestionIndex, navigate]);

  const handleNext = () => {
    if (currentQuestion.type === 'multiChoice') {
      dispatch({
        type: 'SET_RESPONSE',
        payload: {
          questionId: currentQuestion.id,
          value: multiChoiceSelections,
        },
      });
      setMultiChoiceSelections([]);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 });
    } else {
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (state.currentStep > 1) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 });
      setMultiChoiceSelections([]);
    }
  };

  const handleResponse = (value: string | number) => {
    dispatch({
      type: 'SET_RESPONSE',
      payload: { questionId: currentQuestion.id, value },
    });

    if (currentQuestionIndex + 1 < questions.length) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 });
    } else {
      navigate('/results');
    }
  };

  const handleMultiChoiceToggle = (option: string) => {
    setMultiChoiceSelections((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const canProceed = () => {
    if (currentQuestion.type === 'multiChoice') {
      return multiChoiceSelections.length > 0;
    }
    return state.responses[currentQuestion.id] !== undefined;
  };

  if (!currentQuestion) {
    navigate('/results');
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="text-primary" size={24} />
            <h3 className="text-lg font-semibold text-primary">
              {currentQuestion.category}
            </h3>
          </div>
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <HelpCircle className="text-text-light" size={20} />
          </button>
        </div>

        <ProgressBar
          currentStep={state.currentStep}
          totalSteps={questions.length}
        />
        <p className="text-sm text-text-light mt-2 text-center">
          Soru {state.currentStep} / {questions.length}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <motion.div
            key={currentQuestion.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text mb-2">
                  {currentQuestion.text}
                </h2>
                {currentQuestion.description && (
                  <p className="text-text-light text-sm mb-4">
                    {currentQuestion.description}
                  </p>
                )}
              </div>
            </div>

            {currentQuestion.type === 'rating' && (
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <motion.button
                    key={value}
                    onClick={() => handleResponse(value)}
                    className={`question-option ${
                      state.responses[currentQuestion.id] === value
                        ? 'bg-primary text-white'
                        : 'hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-current">
                        {value}
                      </span>
                      <span>
                        {value === 1
                          ? 'Çok Az Önemli'
                          : value === 2
                          ? 'Az Önemli'
                          : value === 3
                          ? 'Orta Derecede'
                          : value === 4
                          ? 'Önemli'
                          : 'Çok Önemli'}
                      </span>
                    </span>
                    {state.responses[currentQuestion.id] === value && (
                      <CheckCircle2 size={20} />
                    )}
                  </motion.button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'choice' && (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <motion.button
                    key={option}
                    onClick={() => handleResponse(option)}
                    className={`question-option ${
                      state.responses[currentQuestion.id] === option
                        ? 'bg-primary text-white'
                        : 'hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{option}</span>
                    {state.responses[currentQuestion.id] === option && (
                      <CheckCircle2 size={20} />
                    )}
                  </motion.button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'multiChoice' && (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <motion.button
                    key={option}
                    onClick={() => handleMultiChoiceToggle(option)}
                    className={`question-option ${
                      multiChoiceSelections.includes(option)
                        ? 'bg-primary text-white'
                        : 'hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{option}</span>
                    {multiChoiceSelections.includes(option) && (
                      <CheckCircle2 size={20} />
                    )}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {showHelp && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="card p-6"
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Info size={20} className="text-primary" />
              Yardım & İpuçları
            </h3>
            <div className="space-y-4 text-sm text-text-light">
              <div>
                <h4 className="font-medium text-text mb-1">
                  Bu soru neden önemli?
                </h4>
                <p>
                  {currentQuestion.helpText ||
                    'Bu soru, sizin için en uygun uzmanlık alanını belirlemede önemli bir faktördür.'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-text mb-1">
                  Nasıl yanıtlamalıyım?
                </h4>
                <p>
                  {currentQuestion.type === 'rating' &&
                    'Sizin için en uygun olan değeri seçin. 1 en düşük, 5 en yüksek önemi ifade eder.'}
                  {currentQuestion.type === 'choice' &&
                    'Size en uygun olan seçeneği işaretleyin.'}
                  {currentQuestion.type === 'multiChoice' &&
                    'Birden fazla seçenek işaretleyebilirsiniz.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex justify-between mt-12">
        <motion.button
          onClick={handlePrevious}
          className="btn btn-outline group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={state.currentStep === 1}
        >
          <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Önceki
        </motion.button>

        <motion.button
          onClick={handleNext}
          className={`btn ${
            canProceed() ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'
          }`}
          whileHover={canProceed() ? { scale: 1.05 } : {}}
          whileTap={canProceed() ? { scale: 0.95 } : {}}
          disabled={!canProceed()}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Tamamla' : 'Sonraki'}
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
}