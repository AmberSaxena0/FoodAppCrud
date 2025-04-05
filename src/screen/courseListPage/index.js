import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../component/CustomText';
import CustomHeader from '../../component/CustomHeader';
import {getCourseFood} from '../../network/food';
import {DishList} from '../../component/DishCard/DishCard';
import {useDispatch} from 'react-redux';
import {addFoodToCart, addLikeFood} from '../../stores/slices/foodSlice';
import {useNavigation} from '@react-navigation/native';
import Layout from './layout';

const CourseListPage = props => {
  const {heading} = props.route.params;
  const [courseItems, setCourseItem] = useState([]);
  useEffect(() => {
    getAllCourseFood();
  }, []);
  const getAllCourseFood = async () => {
    try {
      const api = await getCourseFood(heading);
      const apiResponse = await api.data;
      setCourseItem(
        apiResponse.recipes?.map(item => ({
          ...item,
          price: Math.floor(Math.random() * 900),
          isLiked: false,
          quantity: 1,
        })),
      );
    } catch (error) {
      console.log(error, 'error');
    }
  };
  const dispatch = useDispatch();
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
    navigation.navigate('OnBoarding', {screen: 'cart'});
  };

  const onLikePress = id => {
    const _courseItems = [...courseItems];
    const idx = _courseItems.findIndex(item => item.id === id);
    _courseItems[idx].isLiked = !_courseItems[idx].isLiked;
    setCourseItem(_courseItems);
    dispatch(addLikeFood(id));
  };

  return (
    <Layout
      heading={heading}
      courseItems={courseItems}
      onLikePress={id => onLikePress(id)}
      onPressBuyNow={item => onPressBuyNow(item)}
    />
  );
};

export default CourseListPage;
