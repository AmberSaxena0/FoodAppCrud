import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLORS, TEXT} from '../../utils/constants';
import CustomText from '../CustomText';
import CustomButton from '../CustomButton';
import styles, {DishCardStyle, DishListStyles} from './styles';
import HeartIcon from '../../../assets/icons/common/HeartIcon';

export const DishList = ({
  name,
  image,
  ingredients,
  onPressCard,
  price,
  onLikePress,
  isLiked,
  onPressBuyNow,
  itemInCart,
  onRemoveItemPress,
  quantity,
  TotalPrice,
}) => {
  return (
    <TouchableOpacity
      style={DishListStyles.cardContainer}
      onPress={onPressCard}
      activeOpacity={0.8}>
      <View style={DishListStyles.imageContainer}>
        <Image source={{uri: image}} style={DishListStyles.image} />
      </View>
      <View style={DishListStyles.detailsContainer}>
        <View style={DishListStyles.headerRow}>
          <Text style={DishListStyles.title} numberOfLines={1}>
            {name}
          </Text>
          {onLikePress && (
            <TouchableOpacity onPress={onLikePress}>
              <HeartIcon
                stroke={isLiked ? COLORS.red : COLORS.grey}
                fill={isLiked ? COLORS.red : COLORS.grey}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={DishListStyles.ingredients} numberOfLines={1}>
          {ingredients.map(item => item + ' ')}
        </Text>
        <View style={DishListStyles.footerRow}>
          <Text style={DishListStyles.price} numberOfLines={1}>
            Rs.{price}
          </Text>
          {quantity && (
            <>
              <View style={DishListStyles.quantityContainer}>
                <Text style={DishListStyles.quantityLabel}>Qts.</Text>
                <Text style={DishListStyles.quantityValue}>{quantity}</Text>
              </View>
              <View style={DishListStyles.quantityContainer}>
                <Text style={DishListStyles.quantityLabel}>Total</Text>
                <Text style={DishListStyles.quantityValue}>{TotalPrice}</Text>
              </View>
            </>
          )}
          <TouchableOpacity
            style={DishListStyles.button}
            onPress={itemInCart ? onRemoveItemPress : onPressBuyNow}>
            <Text style={DishListStyles.buttonText}>
              {itemInCart ? 'Remove' : TEXT.COMMON.BUY_NOW}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const DishCard = ({
  name,
  image,
  ingredients,
  onPressCard,
  price,
  onPressBuyNow,
}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <>
      <TouchableOpacity style={DishCardStyle.card} onPress={onPressCard}>
        <Image source={{uri: image}} style={DishCardStyle.image} />
        <View style={DishCardStyle.info}>
          <Text style={DishCardStyle.title} numberOfLines={1}>
            {name}
          </Text>
          <Text style={DishCardStyle.description} numberOfLines={1}>
            {ingredients.map(item => item + ' ')}
          </Text>
          <View style={DishCardStyle.footer}>
            <Text style={DishCardStyle.price}>Rs. {price}</Text>
            <TouchableOpacity
              style={DishCardStyle.stockButton}
              onPress={onPressBuyNow}>
              <Text style={DishCardStyle.stockText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
