import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { Layout } from '../../components';

export default function Screen1(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <Layout>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </Layout>
  );
}
