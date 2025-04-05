import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BackIcon from '../../assets/icons/common/BackIcon';
import {COLORS} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({headerText, onBackPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={onBackPress ? onBackPress : () => navigation.goBack()}
          style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>

        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 15,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height: 60,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '700',
    marginLeft: 10,
  },
});

export default CustomHeader;
