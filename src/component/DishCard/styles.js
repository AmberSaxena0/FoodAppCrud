import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const DishCardStyle = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 120,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stockButton: {
    backgroundColor: '#ff7043',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  stockText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const DishListStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 85,
    width: 85,
    justifyContent: 'center',
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '700',
    width: '85%',
  },
  ingredients: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '400',
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityLabel: {
    fontSize: 10,
  },
  quantityValue: {
    fontWeight: '900',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: COLORS.orange,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: '700',
  },
});

export {DishCardStyle, DishListStyles};
