import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Screen2(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Screen2</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text>Go to Screen1</Text>
      </TouchableOpacity>
    </View>
  );
}
