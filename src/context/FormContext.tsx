import React, { createContext, useContext, useReducer } from 'react';

interface FormState {
  currentStep: number;
  responses: Record<string, any>;
  name?: string;
  email?: string;
}

type FormAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_RESPONSE'; payload: { questionId: string; value: any } }
  | { type: 'SET_USER_INFO'; payload: { name: string; email: string } }
  | { type: 'RESET_FORM' };

const initialState: FormState = {
  currentStep: 1,
  responses: {},
};

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    (state: FormState, action: FormAction) => {
      switch (action.type) {
        case 'SET_STEP':
          return {
            ...state,
            currentStep: action.payload,
          };
        case 'SET_RESPONSE':
          return {
            ...state,
            responses: {
              ...state.responses,
              [action.payload.questionId]: action.payload.value,
            },
          };
        case 'SET_USER_INFO':
          return {
            ...state,
            ...action.payload,
          };
        case 'RESET_FORM':
          return initialState;
        default:
          return state;
      }
    },
    initialState
  );

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}