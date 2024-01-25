import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabBar from '../bottomTab/BottomTabBar';
import { DrawerParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function SideDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start">
        <Drawer.Screen name="Start" component={BottomTabBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
