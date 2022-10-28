import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ConfirmEmailScreen from '../screens/auth/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import HomeScreen from '../screens/auth/HomeScreen';
import NewPasswordScreen from '../screens/auth/NewPasswordScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import { AuthStackParamList } from './types/navigation.types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signInScreen" component={SignInScreen} />
        <Stack.Screen name="signUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="confirmEmailScreen"
          component={ConfirmEmailScreen}
        />
        <Stack.Screen
          name="forgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="newPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
