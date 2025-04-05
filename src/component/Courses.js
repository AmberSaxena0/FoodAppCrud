import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/constants';

const Courses = ({name, icon, onCourseItemPress}) => {
  return (
    <TouchableOpacity onPress={onCourseItemPress} style={styles.main}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Courses;
const styles = StyleSheet.create({
  main: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 105,
    width: 77,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    height: 77,
    width: 77,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.orange,
  },
  text: {
    marginVertical: 5,
    textAlign: 'center',
    color: COLORS.black,
    fontSize: 17,
  },
});
