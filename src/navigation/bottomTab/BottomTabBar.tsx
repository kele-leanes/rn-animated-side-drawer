import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stack/HomeStack/HomeStackScreen';
import ContactScreen from '../../screens/contact/ContactScreen';
import { BottomTabParamList } from '../types';
import { DrawerScreenWrapper } from '../../components';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabBar() {
  return (
    <DrawerScreenWrapper>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </DrawerScreenWrapper>
  );
}
