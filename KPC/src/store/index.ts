import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import {userReducer} from './User/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
}

const rootReducer = combineReducers({
  form: formReducer as any,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, (rootReducer as any))

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState: any) {
  
  let store = createStore(persistedReducer,initialState)
  let persistor = persistStore(store)
  return { store, persistor }

}
