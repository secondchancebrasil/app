import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottomNavigator} from './app.tab.routes';
import {ProfileFilling} from '../screens/profileFilling';

const AppStack = createNativeStackNavigator();

export const AppRoutes = () => {
  const profileFilled = false;

  return (
    <AppStack.Navigator
      initialRouteName={profileFilled ? 'TabNavigator' : 'ProfileFilling'}
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="TabNavigator" component={TabBottomNavigator} />
      <AppStack.Screen name="ProfileFilling" component={ProfileFilling} />
    </AppStack.Navigator>
  );
};
