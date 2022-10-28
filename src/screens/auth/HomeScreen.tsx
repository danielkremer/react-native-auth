import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import Screen from '../../components/elements/Screen';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';

const HomeScreen: FunctionComponent<
  AuthStackScreenProps<'homeScreen'>
> = () => {
  return (
    <Screen>
      <Text> HomeScreen</Text>
    </Screen>
  );
};

export default HomeScreen;
