import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './stacks/MainStack';
import StepStack from './stacks/StepStack';
import {RootStackParamList} from '../types/AllType';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const firstLogin = useSelector((state: any) => state.app.firstLogin);
  console.log('firstLogin', firstLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {firstLogin && <Stack.Screen name="StepStack" component={StepStack} />}
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
