import { useDrawerProgress } from '@react-navigation/drawer';
import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function DrawerScreenWrapper({
  children,
}: PropsWithChildren): JSX.Element {
  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const translateYValue = interpolate(progress.value, [0, 1], [0, 50]);
    const translateXValue = interpolate(progress.value, [0, 1], [0, 60]);
    const rotateValue = interpolate(progress.value, [0, 1], [0, -8]);
    return {
      transform: [
        { translateY: translateYValue },
        { translateX: translateXValue },
        { rotate: `${rotateValue}deg` },
      ],
    };
  });

  return (
    <Animated.View style={[animatedStyles, styles.container]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 32,
    overflow: 'hidden',
  },
});
