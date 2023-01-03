import React from 'react';
import Home from '../screens/home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from '../components/BottomTabBar';
import InfoMatch from '../screens/InfoMatch';
import Profile from '../screens/profile';
import ListMatches from '../screens/listMatches';
import Sooner from '../screens/sooner';

const Tab = createBottomTabNavigator();

export const TabBottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'transparent'},
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Info Match" component={InfoMatch} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List Matches" component={ListMatches} />
      <Tab.Screen name="Qr Code" component={Sooner} />
    </Tab.Navigator>
  );
};
