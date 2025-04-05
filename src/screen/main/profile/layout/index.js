import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, ProfileList} from '../../../../utils/constants';
import ArrowIcon from '../../../../../assets/icons/common/ArrowIcon';
import styles from './styles';

const Layout = ({user_profile}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{uri: user_profile.image}}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName} numberOfLines={1}>
            {user_profile.firstName}
            {user_profile.lastName}
          </Text>
          <Text style={styles.profileEmail} numberOfLines={1}>
            {user_profile.email}
          </Text>
        </View>
        <ArrowIcon />
      </View>
      {ProfileList.map((item, index) => {
        return (
          <TouchableOpacity
            key={JSON.stringify(item) + index}
            style={styles.profileItem}
            onPress={item.onPress}>
            {item.icon}
            <Text style={styles.profileItemText}>{item.name}</Text>
            <ArrowIcon />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Layout;
