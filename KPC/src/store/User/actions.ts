import {
  ADD_USER,
  RESET_USER,
  GET_USER,
  DELETE_USER,
  GET_USER_BY_ID
} from './types';

export const addUser = (data: any) => ({
  type: ADD_USER,
  payload: data
});

export const resetUser = () => ({
  type: RESET_USER,
});

export const getUser = () => ({
  type: GET_USER,
  // payload: data
});

export const deleteUser = (data: any) => ({
  type: DELETE_USER,
  payload: data
});

export const getUserById = (data: any) => ({
  type: GET_USER_BY_ID,
  payload: data
});

