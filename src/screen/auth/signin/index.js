import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import Layout from './layout';
import {signIn} from '../../../network/auth';
import {useDispatch} from 'react-redux';
import {addUserDetails} from '../../../stores/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const onForgotPasswordPress = () => {};
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const onLoginPress = async () => {
    setLoader(true);
    try {
      const api = await signIn({
        username: email,
        password: password,
      });
      const apiResponse = await api?.data;

      dispatch(addUserDetails(apiResponse));
      await AsyncStorage.setItem('@user_details', JSON.stringify(apiResponse));
    } catch (error) {
      console.log(error?.response?.data, error?.status, 'error');
      if (error?.status == 400) {
        console.log('Hllo');
        Alert.alert(error?.response?.data?.message);
      }
    } finally {
      setLoader(false);
    }
  };
  const onSignUpPress = () => {
    // navigation.navigate('OnBoarding');
  };
  return (
    <Layout
      email={email}
      setEmail={val => setEmail(val)}
      password={password}
      setPassword={val => setPassword(val)}
      showPassword={showPassword}
      setShowPassword={val => setShowPassword(val)}
      onForgotPasswordPress={onForgotPasswordPress}
      onLoginPress={onLoginPress}
      onSignUpPress={onSignUpPress}
      loader={loader}
    />
  );
};

export default Signin;
