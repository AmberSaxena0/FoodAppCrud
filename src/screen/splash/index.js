import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import BhookIcon from '../../../assets/icons/auth/BhookIcon';
import {commonStyles} from '../../utils/commonStyles';
import {COLORS} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {addUserDetails} from '../../stores/slices/authSlice';
import styles from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkUserIsLoggedIn();
    }, 500);
  }, []);

  const dispatch = useDispatch();
  const checkUserIsLoggedIn = async () => {
    const user_details = JSON.parse(
      await AsyncStorage.getItem('@user_details'),
    );

    if (user_details == null) {
      navigation.navigate('Carousel');
    } else {
      navigation.navigate('SignIn');
      dispatch(addUserDetails(user_details));
    }
  };

  return (
    <View style={commonStyles.container}>
      <BhookIcon />
      <Text style={styles.welcomTxt}>Welcome to Bhook</Text>
      <Text style={styles.textMsg}>Eat. Drink. Love.</Text>
    </View>
  );
};

export default SplashScreen;
