import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext, useCallback, useContext, useState} from 'react';
import EmailStep from './steps/emailStep';
import PhoneStep from './steps/phoneStep';
import NameStep from './steps/nameStep';
import BirthDateStep from './steps/birthDateStep';
import PasswordStep from './steps/passwordStep';
import Success from './steps/success';

interface userProps {
  name: string;
  email: string;
  birthDate: string;
  cellphone: string;
  password: string;
  passwordConfirmation: string;
}

interface Context {
  currentStep: number;
  totalStep: number;
  userData: userProps;
  updateUserData(data: userProps): void;
  incrementStep(): void;
  decrementStep(): void;
}

const SignUpStack = createNativeStackNavigator();

const SignUpContext = createContext({} as Context);

export const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<userProps>({} as userProps);
  const [totalStep] = useState(5);

  const updateUserData = (data: userProps) => {
    setUserData(data);
  };

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
    userData,
    currentStep,
    totalStep,
    updateUserData,
    incrementStep,
    decrementStep,
  };

  return (
    <SignUpContext.Provider value={contextValues}>
      <SignUpStack.Navigator screenOptions={{headerShown: false}}>
        <SignUpStack.Screen name="PhoneStep" component={PhoneStep} />
        <SignUpStack.Screen name="EmailStep" component={EmailStep} />
        <SignUpStack.Screen name="NameStep" component={NameStep} />
        <SignUpStack.Screen name="BirthDateStep" component={BirthDateStep} />
        <SignUpStack.Screen name="PasswordStep" component={PasswordStep} />
        <SignUpStack.Screen name="Success" component={Success} />
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
