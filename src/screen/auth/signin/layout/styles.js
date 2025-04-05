import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/constants';

const styles = StyleSheet.create({
  main: {backgroundColor: COLORS.lightgrey, paddingVertical: 15},
  welcome: {alignItems: 'center', marginVertical: 15},
  existingAccountText: {fontSize: 17, fontWeight: '400', marginVertical: 10},
  forgotPass: {
    fontSize: 14,
    textAlign: 'right',
    color: COLORS.orange,
    fontWeight: '400',
    marginBottom: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTxt: {
    fontSize: 20,
    color: COLORS.white,
    paddingHorizontal: 20,
  },
  connectUsing: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '400',
    marginBottom: 20,
    marginTop: 10,
  },
  socialIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  google: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googleText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 10,
  },
  facebookText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 10,
  },
  facebook: {flexDirection: 'row', justifyContent: 'space-between'},
});
export default styles;
