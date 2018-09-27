import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const login = (info) => (dispatch) => api.user.login(info).then((user) => {
  localStorage.boilerplateJTW = user.token;
  dispatch(userLoggedIn(user));
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('boilerplateJTW');
  dispatch(userLoggedOut());
};

export const confirm = (token) => (dispatch) => api.user.confirm(token).then((user) => {
  localStorage.boilerplateJTW = user.token;
  dispatch(userLoggedIn(user));
});
