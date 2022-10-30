import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/elements/CustomButton';
import CustomInput from '../../components/elements/CustomInput';
import Screen from '../../components/elements/Screen';
import SocialSignInButtons from '../../components/elements/SocialSignInButtons';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';
import { signUp } from '../../store/authUser/authUser.slice';
import { useAppDispatch } from '../../store/hooks';
import {
  emailInputRule,
  passwordInputRule,
  usernameInputRule,
} from '../../utils/helpers';

const SignUpScreen: FunctionComponent<AuthStackScreenProps<'signUpScreen'>> = ({
  navigation,
}) => {
  const { control, handleSubmit, watch } = useForm();
  const dispatch = useAppDispatch();

  const pwd = watch('password');

  const onRegisterPressed = async (data: any) => {
    const { username, password, email, fullName } = data;
    dispatch(
      signUp({
        username,
        password,
        attributes: { email, name: fullName, preferred_username: username },
      })
    )
      .unwrap()
      .then(() => {
        navigation.navigate('confirmEmailScreen', { username: username });
      });
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed');
  };

  const onSignInPressed = () => {
    navigation.navigate('signInScreen');
  };

  return (
    <Screen>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Full name"
          control={control}
          name="fullName"
          rules={usernameInputRule}
        />
        <CustomInput
          placeholder="Username"
          control={control}
          name="username"
          rules={usernameInputRule}
        />
        <CustomInput
          placeholder="Email"
          control={control}
          name="email"
          rules={emailInputRule}
        />
        <CustomInput
          placeholder="Password"
          control={control}
          name="password"
          rules={passwordInputRule}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          control={control}
          name="passwordRepeat"
          rules={{
            validate: (value: string) =>
              value === pwd || 'Password does not match',
          }}
          secureTextEntry={true}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="primary"
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="tertiary"
        />
      </View>
    </Screen>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
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
