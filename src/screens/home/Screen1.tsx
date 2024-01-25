import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Screen1(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
}
