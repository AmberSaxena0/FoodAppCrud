import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {DishList} from '../../../../component/DishCard/DishCard';
import CustomText from '../../../../component/CustomText';
import {COLORS, TEXT} from '../../../../utils/constants';
import styles from './styles';

const Layout = ({cartItems, onRemoveItemPress, onPressCard}) => {
  let Total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <View style={styles.container}>
        {cartItems && cartItems.length ? (
          <>
            <CustomText textAlign="left" style={styles.cartTitle}>
              Cart
            </CustomText>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              data={cartItems}
              renderItem={({item}) => (
                <DishList
                  name={item.name}
                  ingredients={item.ingredients}
                  image={item.image}
                  price={item.price}
                  itemInCart
                  onRemoveItemPress={() => onRemoveItemPress(item.id)}
                  quantity={item.quantity}
                  TotalPrice={item.price * item.quantity}
                  onPressCard={() => onPressCard(item, item.heading)}
                />
              )}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total price:</Text>
              <Text style={styles.totalAmount}>Rs. {Total}</Text>
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.emptyText}>Cart is empty</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Layout;
