import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Layout from './layout';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({
    pass: true,
    co_pass: true,
  });
  const navigation = useNavigation();
  const onLoginPress = () => {
    navigation.goBack();
  };
  const onCreateAccountPress = () => {
    // navigation.navigate('Carousel');
  };
  return (
    <Layout
      name={name}
      setName={val => setName(val)}
      email={email}
      setEmail={val => setEmail(val)}
      phone={phone}
      setPhone={val => setPhone(val)}
      password={password}
      setPassword={val => setPassword(val)}
      confirmPassword={confirmPassword}
      setConfirmPassword={val => setConfirmPassword(val)}
      showPassword={showPassword}
      onLoginPress={onLoginPress}
      onCreateAccountPress={onCreateAccountPress}
      setShowPassword={val => setShowPassword(val)}
    />
  );
};

export default SignUp;
