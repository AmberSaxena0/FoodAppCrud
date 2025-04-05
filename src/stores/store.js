import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthSlice from './slices/authSlice';
import FoodSlice from './slices/foodSlice';

const rootReducer = combineReducers({
  AuthSlice,
  FoodSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
