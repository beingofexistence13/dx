import {
  UserActionTypes,
  ADD_USER,
  GET_USER,
  RESET_USER,
  DELETE_USER,
  GET_USER_BY_ID
} from './types';
import { REHYDRATE } from 'redux-persist';
import DEFAULT_SETTINGS from './settings';

const initialState: any = DEFAULT_SETTINGS;

export const userReducer = (
  state: any = initialState,
  action: any
): any => {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case ADD_USER:
      if(action.payload.firstName == undefined){
        return {
          ...state,
          edit: initialState.edit,
          mode: initialState.mode
        }; 
      }
      if(action.payload!.create_date == undefined){
        state.users.push({
          ...action.payload,
          create_date: Date.now()
        });
      }else{
        state.users = [
          ...state.users.map( (value: any) => {
            if(value.create_date == action.payload.create_date) {
              return action.payload
            }
            return value
          })
        ];
      }

      return {
        ...state,
        edit: initialState.edit,
        mode: initialState.mode,
      };
    case GET_USER:
      return state;
    case GET_USER_BY_ID:
      state.edit = action.payload
      state.mode = 'edit'
      return state;
    case RESET_USER:
      state.edit = initialState.edit;
      state.mode = initialState.mode;

      return state;
    case DELETE_USER: 
        return {
          ...state,
          users: [
            ...state.users.filter((v: any)=>!action.payload.includes(v.create_date))
          ]
        }

    default:
      return { ...state };
  }
};
