import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottomNavigator} from './app.tab.routes';

const AppStack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="TabNavigator" component={TabBottomNavigator} />
    </AppStack.Navigator>
  );
};
