import {View, Text} from 'react-native';
import React from 'react';
import Layout from './layout';
import {useDispatch, useSelector} from 'react-redux';
import {addFoodToCart} from '../../stores/slices/foodSlice';
import {useNavigation} from '@react-navigation/native';

const DishListPage = props => {
  const {heading} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const dishes = useSelector(state => state.FoodSlice.dishes);
  const onPressBuyNow = item => {
    console.log(item, 'item');
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
    console.log(ingredients, 'ingredients');
    navigation.navigate('OnBoarding', {screen: 'cart'});
  };
  const onPressCard = (item, heading) => {
    navigation.navigate('DishesDetails', {item, heading});
  };

  return (
    <Layout
      title={heading}
      dishes={dishes}
      onPressBuyNow={id => onPressBuyNow(id)}
      onPressCard={val => onPressCard(val)}
    />
  );
};

export default DishListPage;
