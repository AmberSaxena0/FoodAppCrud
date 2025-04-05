import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CustomHeader from '../../../component/CustomHeader';
import {DishList} from '../../../component/DishCard/DishCard';
import {COLORS} from '../../../utils/constants';

const Layout = ({title, dishes, onPressBuyNow, onPressCard}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightgrey}}>
      <CustomHeader headerText={title} />
      <FlatList
        data={dishes}
        showsVerticalScrollIndicator={false}
        style={{height: '92%'}}
        renderItem={({item, index}) => {
          return (
            <DishList
              onPressCard={() => onPressCard(item)}
              name={item.name}
              ingredients={item.ingredients}
              image={item.image}
              price={item.price}
              isLiked={item.isLiked}
              onPressBuyNow={() => onPressBuyNow(item)}
            />
          );
        }}
      />
    </View>
  );
};

export default Layout;
