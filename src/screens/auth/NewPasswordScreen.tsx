import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/elements/CustomButton';
import CustomInput from '../../components/elements/CustomInput';
import Screen from '../../components/elements/Screen';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';
import { forgotPasswordSubmit } from '../../store/authUser/authUser.slice';
import { useAppDispatch } from '../../store/hooks';
import {
  codeInputRule,
  passwordInputRule,
  usernameInputRule,
} from '../../utils/helpers';

const NewPasswordScreen: FunctionComponent<
  AuthStackScreenProps<'newPasswordScreen'>
> = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmitPressed = async (data: any) => {
    dispatch(
      forgotPasswordSubmit({
        username: data.username,
        code: data.code,
        password: data.password,
      })
    )
      .unwrap()
      .then(() => {
        navigation.navigate('signInScreen');
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
          placeholder="Username"
          control={control}
          name="username"
          rules={usernameInputRule}
        />
        <CustomInput
          placeholder="Code"
          control={control}
          name="code"
          rules={codeInputRule}
        />
        <CustomInput
          placeholder="Enter your new password"
          control={control}
          name="password"
          rules={passwordInputRule}
          secureTextEntry={true}
        />

        <CustomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen;
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
