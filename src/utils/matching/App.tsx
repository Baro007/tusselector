import React, { useState } from 'react';
import { FormProvider } from './context/FormContext';
import WelcomeScreen from './components/WelcomeScreen';
import UserInfoForm from './components/UserInfoForm';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from './context/FormContext';

function FormFlow() {
  const { state } = useForm();
  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showResults, setShowResults] = useState(false);

  if (showResults) {
    return <ResultsScreen />;
  }

  if (showUserInfo) {
    return <UserInfoForm onNext={() => setShowUserInfo(false)} />;
  }

  return <QuestionScreen onComplete={() => setShowResults(true)} />;
}

function App() {
  const [started, setStarted] = useState(false);

  return (
    <FormProvider>
      <AnimatePresence mode="wait">
        {!started ? (
          <WelcomeScreen onStart={() => setStarted(true)} />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]"
          >
            <FormFlow />
          </motion.div>
        )}
      </AnimatePresence>
    </FormProvider>
  );
}

export default App;