import React from 'react';
import Layout from './layout';
import {useDispatch, useSelector} from 'react-redux';
import {removeFoodFromCart} from '../../../stores/slices/foodSlice';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const getCartItemFronStore = useSelector(state => state.FoodSlice.cartItem);
  const dishes = useSelector(state => state.FoodSlice.dishes);

  const dispatch = useDispatch();
  const onRemoveItemPress = id => {
    dispatch(removeFoodFromCart(id));
  };
  const navigation = useNavigation();
  const onPressCard = (item, heading) => {
    const _item = dishes.filter(it => it.id === item.id)[0];
    console.log(_item, 'item');
    navigation.navigate('DishesDetails', {item: _item, heading});
  };
  return (
    <Layout
      onPressCard={(val, heading) => onPressCard(val)}
      cartItems={getCartItemFronStore}
      onRemoveItemPress={id => onRemoveItemPress(id)}
    />
  );
};

export default Cart;
