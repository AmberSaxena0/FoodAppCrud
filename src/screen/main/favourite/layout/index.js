import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {DishList} from '../../../../component/DishCard/DishCard';
import CustomText from '../../../../component/CustomText';
import {COLORS, TEXT} from '../../../../utils/constants';

const Layout = ({likedFood, onLikePress, onPressBuyNow, onPressCard}) => {
  return (
    <View style={styles.container}>
      {likedFood && likedFood.length ? (
        <>
          <CustomText textAlign="left" style={styles.headerText}>
            {TEXT.COMMON.FAVORITE}
          </CustomText>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={likedFood}
            style={styles.list}
            renderItem={({item}) => (
              <DishList
                name={item.name}
                ingredients={item.ingredients}
                image={item.image}
                price={item.price}
                isLiked={item.isLiked}
                onLikePress={() => onLikePress(item.id)}
                onPressBuyNow={() => onPressBuyNow(item)}
                onPressCard={() => onPressCard(item)}
              />
            )}
          />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No liked food found!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  headerText: {
    marginBottom: 10,
    fontSize: 26,
  },
  list: {
    height: '95%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Layout;
