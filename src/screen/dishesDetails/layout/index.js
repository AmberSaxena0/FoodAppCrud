import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../../component/CustomHeader';
import CustomText from '../../../component/CustomText';
import {Rating} from 'react-native-ratings';
import {COLORS} from '../../../utils/constants';
import QuantitySelector from '../../../component/QuantitySelector';
import HeartIcon from '../../../../assets/icons/common/HeartIcon';
import styles from './styles';
import FoodIcon from '../../../../assets/icons/mealType/food';
import FoodServing from '../../../../assets/icons/mealType/serving';
import FoodCalories from '../../../../assets/icons/mealType/foodcalories';

const Layout = ({
  name,
  ingredients,
  instructions,
  image,
  rating,
  reviewCount,
  mealType,
  tags,
  heading,
  setQuantity,
  quantity,
  onBuyPress,
  price,
  onLikeDish,
  isLiked,
  increaseQuantity,
  decreaseQuantity,
  checkItemInCart,
  onRemovePress,
  servings,
  caloriesPerServing,

  difficulty,
  prepTimeMinutes,
  cookTimeMinutes,
}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <CustomHeader headerText={''} />
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <CustomText style={styles.title} textAlign="left">
              {name}
            </CustomText>
            <TouchableOpacity onPress={onLikeDish}>
              <HeartIcon
                stoke={isLiked ? COLORS.red : COLORS.grey}
                fill={isLiked ? COLORS.red : COLORS.grey}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingRow}>
            <Rating
              minValue={0}
              readonly
              ratingCount={5}
              startingValue={rating}
              style={styles.rating}
              imageSize={20}
            />
            <Text
              style={
                styles.reviewText
              }>{`${rating} (${reviewCount} reviews)`}</Text>
          </View>
          <Text style={styles.priceText}>Rs. {price}</Text>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{gap: 10, marginTop: 10}}>
            <FoodTags
              foodTxt={mealType
                .map((item, index) => {
                  if (index === mealType.length - 1) {
                    return item;
                  }
                  return item + ', ';
                })
                .join('')}
              ICON={FoodIcon}
            />
            <FoodTags foodTxt={servings} ICON={FoodServing} />
            <FoodTags
              foodTxt={caloriesPerServing + ' per serving'}
              ICON={FoodCalories}
            />
          </ScrollView>
          {ingredients && ingredients.length && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  fontWeight: '900',
                  marginVertical: 10,
                  marginTop: 20,
                }}>
                Ingredients
              </Text>
              {ingredients.map((item, index) => (
                <InstructionsComponent desc={item} idx={index + 1} />
              ))}
            </>
          )}
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{gap: 10, marginTop: 15}}>
            <FoodTags foodTxt={'Difficulty: ' + difficulty} />
            <FoodTags
              foodTxt={'Preperation Time: ' + prepTimeMinutes + ' minutes'}
            />
            <FoodTags
              foodTxt={'Cooking Time: ' + cookTimeMinutes + ' minutes'}
            />
          </ScrollView>

          {instructions && instructions.length && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  fontWeight: '900',
                  marginVertical: 10,
                  marginTop: 20,
                }}>
                Instructions
              </Text>
              {instructions.map((item, index) => (
                <InstructionsComponent desc={item} idx={index + 1} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
      <QuantitySelector
        setQuantity={val => setQuantity(val)}
        quantity={quantity}
        onBuyPress={onBuyPress}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        checkItemInCart={checkItemInCart}
        onRemovePress={onRemovePress}
      />
    </>
  );
};

export default Layout;

const InstructionsComponent = ({desc, idx}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, width: '100%', marginTop: 10}}>
      <Text style={{fontSize: 16, color: COLORS.black, fontWeight: '900'}}>
        {idx}.
      </Text>
      <Text
        style={{
          width: '95%',
          fontSize: 14,
          color: COLORS.black,
          fontWeight: '500',
        }}>
        {desc}
      </Text>
    </View>
  );
};

const FoodTags = ({foodTxt, ICON, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderWidth: 0.5,
        marginRight: 10,
        height: 40,
      }}>
      {ICON && <ICON />}
      <Text
        style={{
          fontSize: 14,
          textAlignVertical: 'center',
          marginTop: 5,
          fontWeight: '600',
        }}>
        {foodTxt}
      </Text>
    </View>
  );
};
