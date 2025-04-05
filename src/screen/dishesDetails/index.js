import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Layout from './layout';
import {useDispatch, useSelector} from 'react-redux';
import {
  addDecreaseQuantity,
  addFoodToCart,
  addIncreaseQuantity,
  addLikeFood,
  removeFoodFromCart,
} from '../../stores/slices/foodSlice';

const DishesDetails = props => {
  console.log(JSON.stringify(props.route.params));
  const {
    item: {
      name,
      ingredients,
      instructions,
      image,
      rating,
      reviewCount,
      mealType,
      tags,
      id,
      price,
      servings,
      caloriesPerServing,
      prepTimeMinutes,
      difficulty,
      cookTimeMinutes,
    },
    heading,
  } = props.route.params;
  const foodDetails = useSelector(
    state => state.FoodSlice.dishes.filter(item => item.id === id)[0],
  );
  const checkItemInCart = useSelector(
    state => state.FoodSlice.cartItem?.findIndex(item => item.id === id) !== -1,
  );

  const dispatch = useDispatch();

  const onBuyPress = () => {
    dispatch(
      addFoodToCart({
        id,
        quantity: foodDetails.quantity,
        name,
        price,
        image,
        ingredients,
      }),
    );
  };
  const onRemovePress = () => {
    dispatch(removeFoodFromCart(id));
  };

  const onLikeDish = () => {
    dispatch(addLikeFood(id));
  };
  const increaseQuantity = () => {
    dispatch(addIncreaseQuantity(id));
  };

  const decreaseQuantity = () => {
    dispatch(addDecreaseQuantity(id));
  };

  return (
    <Layout
      heading={heading}
      name={name}
      ingredients={ingredients}
      instructions={instructions}
      image={image}
      rating={rating}
      reviewCount={reviewCount}
      mealType={mealType}
      tags={tags}
      price={price}
      quantity={foodDetails.quantity}
      onBuyPress={onBuyPress}
      onLikeDish={onLikeDish}
      isLiked={foodDetails.isLiked}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      checkItemInCart={checkItemInCart}
      onRemovePress={onRemovePress}
      servings={servings}
      caloriesPerServing={caloriesPerServing}
      difficulty={difficulty}
      prepTimeMinutes={prepTimeMinutes}
      cookTimeMinutes={cookTimeMinutes}
    />
  );
};

export default DishesDetails;
