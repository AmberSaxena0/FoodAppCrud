import axios from 'axios';
import {BASE_URL} from '../../BASE_URL';
import {ENDPOINT} from './api.config';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';
import store from '../stores/store';
import {clearAuthDetails} from '../stores/slices/authSlice';
import {clearFoodSlice} from '../stores/slices/foodSlice';

export const signIn = async apiParams => {
  const API_URL = BASE_URL + ENDPOINT.auth.login;
  const res = await axios.post(API_URL, apiParams);
  return res;
};

export const signOut = async () => {
  store.dispatch(clearFoodSlice());
  store.dispatch(clearAuthDetails());
  await AsyncStorage.clear();
};
