import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FirstStep from '../../pages/StartSteps/FirstStep';
import SecondStep from '../../pages/StartSteps/SecondStep';
import ThirdStep from '../../pages/StartSteps/ThirdStep';
import FourthStep from '../../pages/StartSteps/FourthStep';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StepStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    // right to left animation

    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="FirstStep" component={FirstStep} />
      <Stack.Screen name="SecondStep" component={SecondStep} />
      <Stack.Screen name="ThirdStep" component={ThirdStep} />
      <Stack.Screen name="FourthStep" component={FourthStep} />
    </Stack.Navigator>
  );
};

export default StepStack;

const styles = StyleSheet.create({});
