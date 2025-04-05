import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/constants';
import EyeOpenIcon from '../../assets/icons/common/EyeOpenIcon';
import EyeCloseIcon from '../../assets/icons/common/EyeCloseIcon';
import SearchIcon from '../../assets/icons/common/SearchIcon';

const Input = ({
  value,
  onChangeText,
  editable,
  placeholder,
  keyboardType,
  secureTextEntry,
  onShowPasswordPress,
  backgroundColor = COLORS.white,
  showSearch,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      {showSearch && (
        <View style={styles.searchIconContainer}>
          <SearchIcon color={COLORS.black} />
        </View>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
        cursorColor={COLORS.orange}
        keyboardType={keyboardType}
      />
      {onShowPasswordPress && (
        <TouchableOpacity
          onPress={onShowPasswordPress}
          style={styles.passwordIconContainer}>
          {secureTextEntry ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    height: 40,
  },
  searchIconContainer: {
    paddingLeft: 10,
  },
  textInput: {
    paddingHorizontal: 15,
    flex: 0.87,
  },
  passwordIconContainer: {
    flex: 0.1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Input;
