import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Layout from './layout';
import {useDispatch, useSelector} from 'react-redux';
import {addFoodToCart, addLikeFood} from '../../../stores/slices/foodSlice';
import {useNavigation} from '@react-navigation/native';

const Favourite = () => {
  const likedFood = useSelector(state =>
    state.FoodSlice.dishes?.filter(item => item.isLiked === true),
  );
  const dispatch = useDispatch();
  const onLikePress = id => {
    dispatch(addLikeFood(id));
  };
  const navigation = useNavigation();
  const onPressBuyNow = item => {
    const {id, quantity, name, price, image, ingredients} = item;
    dispatch(
      addFoodToCart({
        id,
        quantity,
        name,
        price,
        image,
        ingredients,
      }),
    );
    navigation.navigate('cart');
  };
  const onPressCard = (item, heading) => {
    navigation.navigate('DishesDetails', {item, heading});
  };

  return (
    <Layout
      likedFood={likedFood}
      onLikePress={id => onLikePress(id)}
      onPressBuyNow={item => onPressBuyNow(item)}
      onPressCard={val => onPressCard(val)}
    />
  );
};

export default Favourite;
