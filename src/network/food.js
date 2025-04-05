import axios from 'axios';
import {BASE_URL} from '../../BASE_URL';
import {ENDPOINT} from './api.config';
import {G} from 'react-native-svg';

export const getRecipes = async () => {
  const API_URL = BASE_URL + ENDPOINT.food.recipes;
  const res = await axios.get(API_URL);
  return res;
};
export const getCourseFood = async mealType => {
  const API_URL = BASE_URL + ENDPOINT.food.mealType(mealType);
  console.log(API_URL);
  const res = await axios.get(API_URL);
  return res;
};
