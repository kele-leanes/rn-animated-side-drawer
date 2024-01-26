import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { colors } from '../../constant/colors';
import { StyleSheet, Text } from 'react-native';

export default function DrawerContent(props: DrawerContentComponentProps) {
  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const value = interpolate(progress.value, [0, 1], [0, 50]);
    return { transform: [{ translateY: value }] };
  });
  return (
    <Animated.View style={[animatedStyles, styles.container]}>
      <DrawerContentScrollView {...props}>
        <Text style={styles.title}>Beka</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 32,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
});
