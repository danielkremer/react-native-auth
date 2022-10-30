import { Auth, Hub } from 'aws-amplify';
import React, { useEffect } from 'react';
import { setLoggedInUser } from '../../store/authUser/authUser.slice';
import { useAppDispatch } from '../../store/hooks';

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const dispatch = useAppDispatch();

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      dispatch(setLoggedInUser(authUser.username));
    } catch (e: any) {
      dispatch(setLoggedInUser(null));
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data: any) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
