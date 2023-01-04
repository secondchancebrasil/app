import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext, useCallback, useContext, useState} from 'react';
import AddPicture from './step/addPicture';
import AffirmationLoves from './step/affirmationLoves';
import DescriptionProfile from './step/descriptionProfile';
import GesturesLoves from './step/gesturesLoves';
import GiftLoves from './step/giftLoves';
import SocialClass from './step/socialClass';
import Summary from './step/summary';
import TimeLoves from './step/timeLoves';
import TouchLove from './step/touchLoves';

export type ValueLoves = 0 | 20 | 40 | 60 | 80 | 100;

interface ProfileProps {
  socialClass: string;
  affirmationLove: ValueLoves;
  giftLove: ValueLoves;
  timeLove: ValueLoves;
  gesturesLove: ValueLoves;
  touchLove: ValueLoves;
}

const INITIAL_VALUE_PROFILE_PROPS: ProfileProps = {
  socialClass: '',
  affirmationLove: 0,
  giftLove: 0,
  timeLove: 0,
  gesturesLove: 0,
  touchLove: 0,
};

interface Context {
  currentStep: number;
  totalStep: number;
  profileData: ProfileProps;
  updateProfileData(data: ProfileProps): void;
  incrementStep(): void;
  decrementStep(): void;
}

const ProfileFillingStack = createNativeStackNavigator();

const ProfileFillingContext = createContext({} as Context);

export const ProfileFilling = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState<ProfileProps>(
    INITIAL_VALUE_PROFILE_PROPS,
  );
  const [totalStep] = useState(7);

  const updateProfileData = (data: ProfileProps) => {
    setProfileData(data);
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
    profileData,
    currentStep,
    totalStep,
    updateProfileData,
    incrementStep,
    decrementStep,
  };

  return (
    <ProfileFillingContext.Provider value={contextValues}>
      <ProfileFillingStack.Navigator screenOptions={{headerShown: false}}>
        <ProfileFillingStack.Screen
          name="SocialClass"
          component={SocialClass}
        />
        <ProfileFillingStack.Screen
          name="AffirmationLoves"
          component={AffirmationLoves}
        />
        <ProfileFillingStack.Screen name="GiftLoves" component={GiftLoves} />
        <ProfileFillingStack.Screen name="TimeLoves" component={TimeLoves} />
        <ProfileFillingStack.Screen
          name="GesturesLoves"
          component={GesturesLoves}
        />
        <ProfileFillingStack.Screen name="TouchLoves" component={TouchLove} />
        <ProfileFillingStack.Screen name="Summary" component={Summary} />
        <ProfileFillingStack.Screen
          name="DescriptionProfile"
          component={DescriptionProfile}
        />
        <ProfileFillingStack.Screen name="AddPicture" component={AddPicture} />
      </ProfileFillingStack.Navigator>
    </ProfileFillingContext.Provider>
  );
};

export const useProfileFilling = (): Context => {
  const context = useContext(ProfileFillingContext);

  if (!context) {
    throw new Error('useProfileFilling must be used within an SignUp page');
  }

  return context;
};
