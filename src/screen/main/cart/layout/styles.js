import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  cartTitle: {
    marginBottom: 10,
    fontSize: 26,
  },
  flatList: {
    height: '80%',
  },
  totalContainer: {
    height: '20%',
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 16,
    color: COLORS.black,
  },
  totalAmount: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '700',
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
    marginTop: 20,
  },
});
export default styles;
