import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from '../../../screens/contact/ContactScreen';
import { ContactStackParamList } from '../../types';

const HomeStack = createNativeStackNavigator<ContactStackParamList>();

export default function ContactStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Contact" component={ContactScreen} />
    </HomeStack.Navigator>
  );
}
