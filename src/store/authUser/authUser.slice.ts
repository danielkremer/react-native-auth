import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  errorHandler,
  isPendingAction,
  isRejectedAction,
} from '../../utils/reducerHelpers';
import { IApiError } from '../store.types';
import authUserApi from './authUser.api';
import {
  IAuthUserState,
  IConfirmSignUpProps,
  IForgotPasswordProps,
  IForgotPasswordSubmitProps,
  IResendSignUpProps,
  ISingInProps,
  ISingUpProps,
} from './authUser.types';

const initialState: IAuthUserState = {
  loggedInUser: undefined,
  status: undefined,
  error: undefined,
};

export const signIn = createAsyncThunk(
  'authUser/signIn',
  async ({ username, password }: ISingInProps) => {
    const response = await authUserApi.signIn({ username, password });
    return response;
  }
);

export const signUp = createAsyncThunk(
  'authUser/signUp',
  async ({ username, password, attributes }: ISingUpProps) => {
    const response = await authUserApi.signUp({
      username,
      password,
      attributes,
    });
    return response;
  }
);

export const resendSignUp = createAsyncThunk(
  'authUser/resendSignUp',
  async ({ username }: IResendSignUpProps) => {
    const response = await authUserApi.resendSignUp({
      username,
    });
    return response;
  }
);

export const confirmSignUp = createAsyncThunk(
  'authUser/confirmSignUp',
  async ({ username, code }: IConfirmSignUpProps) => {
    const response = await authUserApi.confirmSignUp({ username, code });
    return response;
  }
);

export const forgotPassword = createAsyncThunk(
  'authUser/forgotPassword',
  async ({ username }: IForgotPasswordProps) => {
    const response = await authUserApi.forgotPassword({ username });
    return response;
  }
);

export const forgotPasswordSubmit = createAsyncThunk(
  'authUser/forgotPasswordSubmit',
  async ({ username, code, password }: IForgotPasswordSubmitProps) => {
    const response = await authUserApi.forgotPasswordSubmit({
      username,
      code,
      password,
    });
    return response;
  }
);
export const signOut = createAsyncThunk('authUser/signOut', async () => {
  const response = await authUserApi.signOut();
  return response;
});

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loggedInUser = payload.username;
        state.status === 'success';
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.status = 'success';
      })
      .addCase(resendSignUp.fulfilled, (state, { payload }) => {
        state.status = 'success';
      })
      .addCase(confirmSignUp.fulfilled, (state, { payload }) => {
        state.status = 'success';
      })
      .addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.status === 'success';
      })
      .addCase(forgotPasswordSubmit.fulfilled, (state, { payload }) => {
        state.status = 'success';
      })
      .addCase(signOut.fulfilled, (state, { payload }) => {
        state.status = 'success';
      })
      .addMatcher(isPendingAction('authUser'), (state) => {
        state.status = 'loading';
      })
      .addMatcher(isRejectedAction('authUser'), (state, action) => {
        state.status = 'reject';
        let error: IApiError;
        if (action.error.code) {
          error = action.error;
        } else {
          error = JSON.parse(action.error.message);
        }
        state.error = error;
        errorHandler(error);
      });
  },
});

export const { setLoggedInUser } = authUserSlice.actions;
export default authUserSlice.reducer;
