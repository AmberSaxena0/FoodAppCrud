import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/constants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
  container: {
    padding: 15,
    flex: 1,
  },
  greetingText: {
    fontSize: 36,
  },
  subHeadingText: {
    fontSize: 21,
    fontWeight: '400',
    marginVertical: 10,
  },
  coursesList: {
    marginVertical: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 26,
  },
  seeAllText: {
    color: COLORS.orange,
    padding: 10,
    fontWeight: '800',
    fontSize: 16,
  },
});
export default styles;
