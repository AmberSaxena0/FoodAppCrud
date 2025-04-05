import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../utils/constants';

const CustomText = ({children, style, onPress, textAlign = 'center'}) => {
  return (
    <Text onPress={onPress} style={[styles.text, {textAlign}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.black,
  },
});

export default CustomText;
