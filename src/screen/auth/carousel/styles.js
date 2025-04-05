import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/constants';

const styles = StyleSheet.create({
  icon: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  heading: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.black,
    marginTop: 27,
    marginBottom: 15,
  },
  subHeading: {
    paddingHorizontal: '10%',
    textAlign: 'center',
    color: COLORS.black,
    fontSize: 17.5,
  },
  continue: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '900',
  },
  skipButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
  skipTxt: {
    fontSize: 16,
    flex: 0.2,
    textAlign: 'left',
    color: COLORS.black,
    fontWeight: '900',
  },
  pagination: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dotstyle: {
    height: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginHorizontal: 10,
    borderRadius: 100,
  },
  nextText: {
    fontSize: 16,
    flex: 0.2,
    textAlign: 'right',
    color: COLORS.black,
    fontWeight: '900',
  },
});
export default styles;
