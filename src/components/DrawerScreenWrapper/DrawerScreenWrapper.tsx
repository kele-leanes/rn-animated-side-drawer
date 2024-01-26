import { useDrawerProgress } from '@react-navigation/drawer';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { colors } from '../../constant/colors';

export default function DrawerScreenWrapper({
  children,
}: PropsWithChildren): JSX.Element {
  const progress = useDrawerProgress();

  const animatedViewStyles = useAnimatedStyle(() => {
    const heightValue = interpolate(progress.value, [0, 1], [0, 50]);
    return {
      height: heightValue,
    };
  });

  const animatedStyles = useAnimatedStyle(() => {
    const translateXValue = interpolate(progress.value, [0, 1], [0, 60]);
    const rotateValue = interpolate(progress.value, [0, 1], [0, -8]);
    return {
      transform: [
        { translateX: translateXValue },
        { rotate: `${rotateValue}deg` },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedViewStyles, styles.space]} />
      <Animated.View style={[animatedStyles, styles.view]}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  space: {
    backgroundColor: 'white',
    width: '100%',
    transform: [{ translateX: 0 }],
  },
  view: {
    flex: 1,
    borderTopLeftRadius: 32,
    overflow: 'hidden',
  },
});
