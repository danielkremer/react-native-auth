import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/elements/CustomButton';
import Screen from '../../components/elements/Screen';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';
import { signOut } from '../../store/authUser/authUser.slice';
import { useAppDispatch } from '../../store/hooks';

const HomeScreen: FunctionComponent<
  AuthStackScreenProps<'homeScreen'>
> = () => {
  const dispatch = useAppDispatch();

  const onSignOutPressed = async () => {
    dispatch(signOut());
  };
  return (
    <Screen>
      <View style={styles.root}>
        <Text> HomeScreen</Text>
      </View>
      <View style={styles.button}>
        <CustomButton
          text="Log out"
          onPress={onSignOutPressed}
          type="primary"
        />
      </View>
    </Screen>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
  },
  button: {
    marginTop: 'auto',
  },
});
