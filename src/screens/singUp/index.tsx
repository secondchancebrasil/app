import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext, useCallback, useContext, useState} from 'react';
import FirstStep from './steps/firstStep';

interface Context {
  currentStep: number;
  totalStep: number;
  incrementStep(): void;
  decrementStep(): void;
}

const SignUpStack = createNativeStackNavigator();

const SignUpContext = createContext({} as Context);

export const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalStep] = useState(4);

  const incrementStep = useCallback(() => {
    if (currentStep === totalStep) {
      return;
    }

    setCurrentStep(currentStep + 1);
  }, [currentStep, totalStep]);

  const decrementStep = useCallback(() => {
    if (currentStep === 1) {
      return;
    }

    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const contextValues = {
    incrementStep,
    decrementStep,
    currentStep,
    totalStep,
  };

  return (
    <SignUpContext.Provider value={contextValues}>
      <SignUpStack.Navigator screenOptions={{headerShown: false}}>
        <SignUpStack.Screen name="FirstStep" component={FirstStep} />
        <SignUpStack.Screen name="SecondStep" component={FirstStep} />
      </SignUpStack.Navigator>
    </SignUpContext.Provider>
  );
};

export const useSignUp = (): Context => {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error('useSignUp must be used within an SignUp page');
  }

  return context;
};
