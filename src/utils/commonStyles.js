import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from './constants';

const {height, width} = Dimensions.get('screen');

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.orange,
  },
  img: {
    width: width * 0.6,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
