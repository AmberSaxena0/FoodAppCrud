import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CustomText from '../../../../component/CustomText';

import {DishCard} from '../../../../component/DishCard/DishCard';
import {TEXT} from '../../../../utils/constants';
import styles from './styles';
import Loader from '../../../../component/Loader';

const Layout = ({
  userDetails,
  dishes,
  onPressCard,
  onSeeAllPress,
  onPressBuyNow,
  loader,
}) => {
  return loader ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      {dishes && dishes.length ? (
        <>
          <CustomText textAlign="left" style={styles.greetingText}>
            Hello,{'\n'}
            {userDetails.firstName}.
          </CustomText>
          <CustomText textAlign="left" style={styles.subHeadingText}>
            {TEXT.HOME.WHAT_DO_YOU_WANT_TO_EAT}
          </CustomText>

          <FlatList
            ListHeaderComponent={
              <View style={styles.sectionHeader}>
                <CustomText textAlign="left" style={styles.sectionTitle}>
                  {TEXT.HOME.TODAY_SPEACIAL}
                </CustomText>
                <Text
                  style={styles.seeAllText}
                  onPress={() => onSeeAllPress(TEXT.HOME.TODAY_SPEACIAL)}>
                  {TEXT.COMMON.SEE_ALL}
                </Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
            data={dishes}
            renderItem={({item, index}) =>
              index < 5 && (
                <DishCard
                  onPressCard={() =>
                    onPressCard(item, TEXT.HOME.TODAY_SPEACIAL)
                  }
                  name={item.name}
                  image={item.image}
                  ingredients={item.ingredients}
                  price={item.price}
                  onPressBuyNow={() => onPressBuyNow(item)}
                />
              )
            }
          />
        </>
      ) : null}
    </View>
  );
};

export default Layout;
