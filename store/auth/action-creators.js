import { deleteCookie } from 'cookies-next';
import { authenticate, deAuthenticate, restoreAuthState } from './auth-slice';

export const loginUser = (user) => async (dispatch) => {
  dispatch(authenticate(user));
};

export const logoutUser = (user) => async (dispatch) => {
  deleteCookie('token');
  dispatch(deAuthenticate(user));
};

export const checkLogin = (user) => async (dispatch) => {
  dispatch(restoreAuthState(user));
};
