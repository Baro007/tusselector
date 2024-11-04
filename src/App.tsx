import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';

const App: React.FC = () => {
  return (
    <Router>
      <FormProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/questions" element={<QuestionScreen />} />
            <Route path="/results" element={<ResultsScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </FormProvider>
    </Router>
  );
};

export default App;
