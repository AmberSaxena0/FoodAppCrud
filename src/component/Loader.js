import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import BhookIcon from '../../assets/icons/auth/BhookIcon';
import {COLORS} from '../utils/constants';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.whiteTransparent,
      }}>
      <BhookIcon />
      <ActivityIndicator
        color={COLORS.orange}
        size={50}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default Loader;
