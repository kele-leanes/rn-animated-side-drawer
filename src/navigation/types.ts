import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

export type ContactStackParamList = {
  Contact: undefined;
};

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Contact: NavigatorScreenParams<ContactStackParamList>;
};

export type DrawerParamList = {
  Start: BottomTabScreenProps<BottomTabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}
