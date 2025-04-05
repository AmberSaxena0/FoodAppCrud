import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CustomHeader from '../../../component/CustomHeader';
import {DishList} from '../../../component/DishCard/DishCard';

const Layout = ({courseItems, onLikePress, onPressBuyNow, heading}) => {
  return (
    <>
      <CustomHeader headerText={heading} />
      <View style={{padding: 10}}>
        {courseItems && courseItems.length ? (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={courseItems}
              renderItem={({item, index}) => {
                return (
                  <DishList
                    name={item.name}
                    ingredients={item.ingredients}
                    image={item.image}
                    price={item.price}
                    isLiked={item.isLiked}
                    onLikePress={() => onLikePress(item.id)}
                    onPressBuyNow={() => onPressBuyNow(item)}
                  />
                );
              }}
            />
          </>
        ) : (
          <Text>No liked food found!</Text>
        )}
      </View>
    </>
  );
};

export default Layout;
