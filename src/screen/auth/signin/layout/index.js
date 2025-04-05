import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../../../utils/commonStyles';
import {COLORS, TEXT} from '../../../../utils/constants';
// import WelcomeIcon from '../../../../../assets/icons/auth/WelcomeIcon';
import CustomText from '../../../../component/CustomText';
import Input from '../../../../component/Input';
import CustomButton from '../../../../component/CustomButton';
import GoogleIcon from '../../../../../assets/icons/auth/GoogleIcon';
import FacebookIcon from '../../../../../assets/icons/auth/FacebookIcon';
import WelcomeIcon from '../../../../../assets/icons/auth/WelcomeIcon';
import styles from './styles';
import Loader from '../../../../component/Loader';

const Layout = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  onSignUpPress,
  onForgotPasswordPress,
  onLoginPress,
  loader,
}) => {
  return loader ? (
    <Loader />
  ) : (
    <ScrollView style={([commonStyles.simpleContainer], styles.main)}>
      <View
        style={{
          marginHorizontal: 15,
        }}>
        <View style={styles.welcome}>
          <WelcomeIcon />
        </View>
        <CustomText>{TEXT.AUTH.WELCOME_BACK}</CustomText>
        <CustomText style={styles.existingAccountText}>
          {TEXT.AUTH.LOGIN_TO_YOUR_EXISTING_ACCOUNT}
        </CustomText>
        <Input
          value={email}
          onChangeText={val => setEmail(val)}
          placeholder={TEXT.AUTH.USERNAME}
        />
        <Input
          value={password}
          onChangeText={val => setPassword(val)}
          placeholder={TEXT.AUTH.PASSWORD}
          secureTextEntry={showPassword}
          onShowPasswordPress={() => setShowPassword(!showPassword)}
        />
        <CustomText onPress={onForgotPasswordPress} style={styles.forgotPass}>
          {TEXT.AUTH.FORGOT_PASSWORD}
        </CustomText>
        <View style={styles.loginContainer}>
          <CustomButton style={{marginVertical: 5}} onPress={onLoginPress}>
            <CustomText style={styles.loginTxt}>{TEXT.AUTH.LOGIN}</CustomText>
          </CustomButton>
        </View>
        <CustomText style={styles.connectUsing}>
          {TEXT.AUTH.CONNECT_USING}
        </CustomText>
        <View style={styles.socialIcon}>
          <CustomButton style={styles.google}>
            <GoogleIcon />
            <CustomText style={styles.googleText}>
              {TEXT.AUTH.GOOGLE}
            </CustomText>
          </CustomButton>
          <CustomButton style={styles.facebook}>
            <FacebookIcon />
            <CustomText style={styles.facebookText}>
              {TEXT.AUTH.FACEBOOK}
            </CustomText>
          </CustomButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default Layout;
