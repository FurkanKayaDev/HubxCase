import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../../pages/Home';
import Diagnose from '../../pages/Diagnose';
import MyGarden from '../../pages/MyGarden';
import Profile from '../../pages/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diagnose" component={Diagnose} />
      <Tab.Screen name="MyGarden" component={MyGarden} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
