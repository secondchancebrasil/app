import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screens/singUp';
import SignIn from '../screens/singIn';
import Welcome from '../screens/welcome';

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = (): ReactElement => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};
