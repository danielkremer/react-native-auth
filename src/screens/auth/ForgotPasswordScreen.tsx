import React, { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/elements/CustomButton';
import CustomInput from '../../components/elements/CustomInput';
import Screen from '../../components/elements/Screen';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';
import { forgotPassword } from '../../store/authUser/authUser.slice';
import { useAppDispatch } from '../../store/hooks';
import { usernameInputRule } from '../../utils/helpers';

const ForgotPasswordScreen: FunctionComponent<
  AuthStackScreenProps<'forgotPasswordScreen'>
> = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onSendPressed = async (data: any) => {
    dispatch(forgotPassword({ username: data.username }))
      .unwrap()
      .then(() => {
        navigation.navigate('newPasswordScreen');
      });
  };

  const onSignInPressed = () => {
    navigation.navigate('signInScreen');
  };

  return (
    <Screen>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Enter your username"
          control={control}
          name="username"
          rules={usernameInputRule}
        />

        <CustomButton
          text="Send"
          onPress={handleSubmit(onSendPressed)}
          type="primary"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="tertiary"
        />
      </View>
    </Screen>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    lineHeight: 21,
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
