import {View, Text, TurboModuleRegistry} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from './layout';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes} from '../../../network/food';
import {useNavigation} from '@react-navigation/native';
import {addDishes, addFoodToCart} from '../../../stores/slices/foodSlice';

const Home = () => {
  const userDetails = useSelector(state => state.AuthSlice);
  const dishes = useSelector(state => state.FoodSlice.dishes);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getAllRecipes();
  }, []);
  const getAllRecipes = async () => {
    try {
      const api = await getRecipes();
      const apiResponse = await api.data;
      dispatch(addDishes(apiResponse.recipes));
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const onSeeAllPress = heading => {
    navigation.navigate('DishListPage', {heading});
  };
  const navigation = useNavigation();
  const onPressCard = (item, heading) => {
    navigation.navigate('DishesDetails', {item, heading});
  };

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

  return (
    <>
      <Layout
        userDetails={userDetails}
        dishes={dishes}
        onSeeAllPress={onSeeAllPress}
        onPressCard={onPressCard}
        onPressBuyNow={onPressBuyNow}
        loader={loader}
      />
    </>
  );
};

export default Home;
