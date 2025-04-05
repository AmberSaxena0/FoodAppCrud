import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../../component/CustomHeader';
import CustomText from '../../../../component/CustomText';
import {COLORS, TEXT} from '../../../../utils/constants';
import {commonStyles} from '../../../../utils/commonStyles';
import Input from '../../../../component/Input';
import CustomButton from '../../../../component/CustomButton';

const Layout = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  setShowPassword,
  onLoginPress,
  onCreateAccountPress,
}) => {
  return (
    <ScrollView
      style={[
        commonStyles.simpleContainer,
        {backgroundColor: COLORS.lightgrey, paddingVertical: 15},
      ]}>
      <CustomHeader />
      <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
        <CustomText>{TEXT.AUTH.LETS_GET_STARTED}</CustomText>
        <CustomText
          style={{fontSize: 17, fontWeight: '400', marginVertical: 10}}>
          {TEXT.AUTH.CREATE_AN_ACCOUNT}
        </CustomText>
        <Input
          value={name}
          onChangeText={val => setName(val)}
          placeholder={TEXT.AUTH.NAME}
        />

        <Input
          value={email}
          onChangeText={val => setEmail(val)}
          placeholder={TEXT.AUTH.EMAIL}
        />
        <Input
          value={phone}
          onChangeText={val => setPhone(val)}
          placeholder={TEXT.AUTH.PHONE}
          keyboardType="numeric"
        />
        <Input
          value={password}
          onChangeText={val => setPassword(val)}
          placeholder={TEXT.AUTH.PASSWORD}
          secureTextEntry={showPassword.pass}
          onShowPasswordPress={() =>
            setShowPassword({...showPassword, pass: !showPassword.pass})
          }
        />
        <Input
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
          placeholder={TEXT.AUTH.CONFIRM_PASSWORD}
          secureTextEntry={showPassword.co_pass}
          onShowPasswordPress={() =>
            setShowPassword({...showPassword, co_pass: !showPassword.co_pass})
          }
        />
      </View>
      <CustomButton onPress={onCreateAccountPress}>
        <CustomText
          style={{
            fontSize: 16,
            color: COLORS.white,
            textTransform: 'uppercase',
            fontWeight: '800',
          }}>
          {TEXT.AUTH.CREATE}
        </CustomText>
      </CustomButton>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            textAlign: 'center',
            fontWeight: '400',
          }}>
          {TEXT.AUTH.ALREADY_HAVE_AN_ACCOUNT}{' '}
          <Text
            style={{color: COLORS.orange, fontWeight: '700'}}
            onPress={onLoginPress}>
            {' '}
            {TEXT.AUTH.LOGIN} here
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Layout;
