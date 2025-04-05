import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../utils/constants';

const QuantitySelector = ({
  increaseQuantity,
  decreaseQuantity,
  onBuyPress,
  quantity,
  setQuantity,
  checkItemInCart,
  onRemovePress,
  show,
}) => {
  return (
    <View style={styles.container}>
      {/* Decrease Button */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* Quantity Display */}
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>

        {/* Increase Button */}
        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Buy Now Button */}
      {!show && (
        <TouchableOpacity
          style={styles.button}
          onPress={checkItemInCart ? onRemovePress : onBuyPress}>
          <Text style={styles.buyNowText}>
            {checkItemInCart ? 'Remove ' : 'Buy now'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    padding: 10,
    backgroundColor: COLORS.grey,
  },
  button: {
    backgroundColor: '#ff6f00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  buyNowButton: {
    backgroundColor: '#ff6f00',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuantitySelector;
