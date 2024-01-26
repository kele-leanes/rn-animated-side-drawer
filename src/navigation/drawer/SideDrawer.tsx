import * as React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabBar from '../bottomTab/BottomTabBar';
import { DrawerParamList } from '../types';
import { colors } from '../../constant/colors';
import { DrawerContent } from '../../components';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawer = (props: DrawerContentComponentProps) => (
  <DrawerContent {...props} />
);

export default function SideDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        initialRouteName="Start"
        screenOptions={{
          drawerType: 'back',
          headerShown: false,
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: `${colors.secondary}50`,
          drawerActiveTintColor: colors.secondary,
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerItemStyle: {
            borderRadius: 8,
            paddingHorizontal: 8,
          },
          drawerStyle: {
            backgroundColor: colors.white,
            width: '50%',
          },
          drawerContentContainerStyle: {
            backgroundColor: colors.primary,
          },
          sceneContainerStyle: {
            backgroundColor: colors.primary,
          },
        }}>
        <Drawer.Screen name="Start" component={BottomTabBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
