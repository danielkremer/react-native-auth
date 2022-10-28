import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onForgotPasswordPressed ');
  };
  const onSignInGoogle = () => {
    console.warn('onForgotPasswordPressed ');
  };
  const onSignInApple = () => {
    console.warn('onForgotPasswordPressed ');
  };
  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
