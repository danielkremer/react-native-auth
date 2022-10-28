import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import CustomButton from '../../components/elements/CustomButton';
import CustomInput from '../../components/elements/CustomInput';
import Screen from '../../components/elements/Screen';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';
import { passwordInputRule, usernameInputRule } from '../../utils/helpers';

const SignInScreen: FunctionComponent<AuthStackScreenProps<'signInScreen'>> = ({
  navigation,
}) => {
  const logo = require('../../assets/images/dkm-logo.png');
  const { height } = useWindowDimensions();
  const { control, handleSubmit } = useForm();

  const onSingInPressed = () => {
    navigation.navigate('homeScreen');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('forgotPasswordScreen');
  };
  const onSignInFacebook = () => {
    console.warn('onForgotPasswordPressed ');
  };
  const onSignInGoogle = () => {
    console.warn('onForgotPasswordPressed ');
  };
  const onSignInApple = () => {
    console.warn('onForgotPasswordPressed ');
  };
  const onSignUpPressed = () => {
    navigation.navigate('signUpScreen');
  };

  return (
    <Screen>
      <View style={styles.root}>
        <Image source={logo} style={[styles.logo, { height: height * 0.2 }]} />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={usernameInputRule}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={passwordInputRule}
          secureTextEntry={true}
        />

        <CustomButton
          text="Sign In"
          onPress={handleSubmit(onSingInPressed)}
          type="primary"
        />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="tertiary"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="tertiary"
        />
      </View>
    </Screen>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
  },
  logo: {
    marginTop: 30,
    width: '50%',
    maxWidth: 500,
    maxHeight: 200,
  },
});
