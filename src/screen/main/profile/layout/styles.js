import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey, // Set a default background color
  },
  profileHeader: {
    height: '35%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.black,
  },
  profileEmail: {
    fontSize: 13,
    marginTop: 5,
    color: COLORS.black,
    fontWeight: '500',
  },
  profileItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profileItemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '600',
  },
});
export default styles;
