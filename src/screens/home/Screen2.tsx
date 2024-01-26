import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { Layout } from '../../components';

export default function Screen2(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <Layout>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
    </Layout>
  );
}
