import { ISignUpResult } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import {
  IConfirmSignUpProps,
  IForgotPasswordProps,
  IForgotPasswordSubmitProps,
  IResendSignUpProps,
  ISingInProps,
  ISingUpProps,
} from './authUser.types';

const signIn = ({ username, password }: ISingInProps): Promise<any> => {
  return Auth.signIn(username, password);
};
const signUp = ({
  username,
  password,
  attributes,
}: ISingUpProps): Promise<ISignUpResult> => {
  return Auth.signUp({ username, password, attributes });
};

const resendSignUp = ({ username }: IResendSignUpProps): Promise<any> => {
  return Auth.resendSignUp(username);
};

const confirmSignUp = ({
  username,
  code,
}: IConfirmSignUpProps): Promise<any> => {
  return Auth.confirmSignUp(username, code);
};

const forgotPassword = ({ username }: IForgotPasswordProps): Promise<any> => {
  return Auth.forgotPassword(username);
};

const forgotPasswordSubmit = ({
  username,
  code,
  password,
}: IForgotPasswordSubmitProps): Promise<string> => {
  return Auth.forgotPasswordSubmit(username, code, password);
};

const signOut = (): Promise<any> => {
  return Auth.signOut();
};

export default {
  signIn,
  signUp,
  resendSignUp,
  confirmSignUp,
  forgotPassword,
  forgotPasswordSubmit,
  signOut,
};
