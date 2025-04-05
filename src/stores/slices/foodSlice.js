import {createSlice} from '@reduxjs/toolkit';

export const FoodSlice = createSlice({
  name: 'FoodSlice',
  initialState: {
    dishes: [],
    cartItem: [],
  },

  reducers: {
    addDishes(state, action) {
      const data = action.payload?.map(item => ({
        ...item,
        price: Math.floor(Math.random() * 900),
        isLiked: false,
        quantity: 1,
      }));
      state.dishes = data;
    },
    addLikeFood(state, action) {
      let idx = state.dishes.findIndex(item => item.id === action.payload);
      const _dishes = [...state.dishes];
      _dishes[idx].isLiked = !_dishes[idx].isLiked;
      state.dishes = _dishes;
    },
    addIncreaseQuantity(state, action) {
      const idx = state.dishes.findIndex(item => item.id === action.payload);
      state.dishes[idx].quantity = state.dishes[idx].quantity + 1;
    },
    addDecreaseQuantity(state, action) {
      const idx = state.dishes.findIndex(item => item.id === action.payload);
      if (state.dishes[idx].quantity <= 1) {
        return;
      } else state.dishes[idx].quantity = state.dishes[idx].quantity - 1;
    },

    addFoodToCart(state, action) {
      const _cartItem = state.cartItem;
      const idx = _cartItem.findIndex(item => item.id === action.payload.id);
      if (idx === -1) {
        _cartItem.push(action.payload);
      }
    },
    removeFoodFromCart(state, action) {
      const _cartItem = state.cartItem;
      const idx = _cartItem.findIndex(item => item.id === action.payload);
      _cartItem.splice(idx, 1);
    },
    clearFoodSlice(state) {
      state.dishes = [];
      state.cartItem = [];
    },
  },
});

export const {
  addDishes,
  addLikeFood,
  addOrder,
  addFoodToCart,
  addIncreaseQuantity,
  addDecreaseQuantity,
  removeFoodFromCart,
  clearFoodSlice,
} = FoodSlice.actions;
export default FoodSlice.reducer;
