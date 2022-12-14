import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList ={
    signInScreen: undefined;
    signUpScreen: undefined;
    confirmEmailScreen: {username: string};
    forgotPasswordScreen: undefined;
    newPasswordScreen: undefined;
    homeScreen: undefined;
}


export type AuthStackScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList,T>