import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/elements/CustomButton';
import CustomInput from '../../components/elements/CustomInput';
import Screen from '../../components/elements/Screen';
import { AuthStackScreenProps } from '../../navigation/types/navigation.types';
import {
  confirmSignUp,
  resendSignUp,
} from '../../store/authUser/authUser.slice';
import { useAppDispatch } from '../../store/hooks';
import { codeInputRule } from '../../utils/helpers';

const ConfirmEmailScreen: FunctionComponent<
  AuthStackScreenProps<'confirmEmailScreen'>
> = ({ navigation, route }) => {
  const { username } = route.params;
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      username: username,
    },
  });
  const userName = watch('username');
  const dispatch = useAppDispatch();

  const onConfirmPressed = async (data: any) => {
    dispatch(confirmSignUp({ username: data.username, code: data.code }))
      .unwrap()
      .then(() => {
        navigation.navigate('signInScreen');
      });
  };

  const onSignInPressed = () => {
    navigation.navigate('signInScreen');
  };

  const onResendPressed = async () => {
    dispatch(resendSignUp({ username: userName }))
      .unwrap()
      .then(() => {
        Alert.alert('Success', 'The Code was resent to your email');
      });
  };

  return (
    <Screen>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Username"
          control={control}
          name="username"
          rules={codeInputRule}
        />
        <CustomInput
          placeholder="Code"
          control={control}
          name="code"
          rules={codeInputRule}
        />

        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
          type="primary"
        />
        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="secondary"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="tertiary"
        />
      </View>
    </Screen>
  );
};

export default ConfirmEmailScreen;
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
