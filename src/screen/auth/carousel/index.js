import {View, Text, FlatList, Dimensions} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {CarouselItem, COLORS, TEXT} from '../../../utils/constants';
import {commonStyles} from '../../../utils/commonStyles';
import CustomButton from '../../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Carousel = () => {
  const flatlistRef = useRef(null);
  const [currIdx, setCurrentIdx] = useState(0);
  const onNextPress = idx => {
    setCurrentIdx(idx);

    flatlistRef.current.scrollToIndex({
      index: idx,
      animated: true,
    });
  };
  const onViewableItemsChanged = useCallback(item => {
    const {index, isViewable} = item.changed[0];
    if (isViewable) {
      setCurrentIdx(index);
    }
  }, []);
  const navigation = useNavigation();
  const onSkipPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <>
      <FlatList
        ref={flatlistRef}
        data={CarouselItem}
        style={commonStyles.simpleContainer}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        onViewableItemsChanged={onViewableItemsChanged}
        horizontal
        renderItem={({item, index}) => {
          return (
            <>
              <View style={styles.icon}>
                {item.icon}
                <Text style={styles.heading}>{item.heading}</Text>
                <Text style={styles.subHeading}>{item.sub_heading}</Text>

                {index === 2 ? (
                  <CustomButton style={{marginTop: 30}} onPress={onSkipPress}>
                    <Text style={styles.continue}>{TEXT.COMMON.CONTINUE}</Text>
                  </CustomButton>
                ) : (
                  <View style={styles.skipButton}>
                    <Text onPress={onSkipPress} style={styles.skipTxt}>
                      Skip
                    </Text>

                    <View style={styles.pagination}>
                      {[0, 1, 2].map(itme => {
                        return (
                          <View
                            style={[
                              {
                                width: currIdx === itme ? 30 : 10,
                              },
                              styles.dotstyle,
                            ]}
                          />
                        );
                      })}
                    </View>

                    <Text
                      onPress={() => onNextPress(index + 1)}
                      style={styles.nextText}>
                      Next
                    </Text>
                  </View>
                )}
              </View>
            </>
          );
        }}
      />
    </>
  );
};

export default Carousel;
