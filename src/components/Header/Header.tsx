import {
  DrawerActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constant/colors';

const HamburgerMenuIcon = () => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </View>
  );
};

export default function Header(): React.JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const onPressMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressMenu}>
        <HamburgerMenuIcon />
      </TouchableOpacity>
      <Text>{route.name}</Text>
      <View style={styles.menuContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: 30,
    height: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: colors.darkGrey,
  },
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
