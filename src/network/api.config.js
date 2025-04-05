export const ENDPOINT = {
  auth: {
    login: 'auth/login',
  },
  food: {
    recipes: 'recipes',
    mealType: val => `recipes/meal-type/${val}`,
  },
};
