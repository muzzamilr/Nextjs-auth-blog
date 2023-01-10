import auth from './auth/auth-slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducers = combineReducers({
  auth,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
