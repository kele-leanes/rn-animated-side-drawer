import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../../../screens/home/Screen1';
import Screen2 from '../../../screens/home/Screen2';
import { HomeStackParamList } from '../../types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Screen1" component={Screen1} />
      <HomeStack.Screen name="Screen2" component={Screen2} />
    </HomeStack.Navigator>
  );
}
