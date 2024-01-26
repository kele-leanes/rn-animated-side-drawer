import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '..';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Screen1({
  children,
}: PropsWithChildren): React.JSX.Element {
  const { top } = useSafeAreaInsets();
  return (
    <View style={(styles.container, { marginTop: top })}>
      <Header />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
