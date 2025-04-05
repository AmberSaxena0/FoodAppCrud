import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    height: 250,
    width: '100%',
  },
  content: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    width: '90%',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  reviewText: {
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.black,
  },
  priceText: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: '800',
    marginBottom: 10,
  },
});
export default styles;
