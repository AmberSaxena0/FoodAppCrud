import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../home';
import Favourite from '../favourite';
import Profile from '../profile';
import Cart from '../cart';
import HomeIcon from '../../../../assets/icons/common/HomeIcon';
import HeartIcon from '../../../../assets/icons/common/HeartIcon';
import CartIcon from '../../../../assets/icons/common/CartIcon';
import ProfileIcon from '../../../../assets/icons/common/ProfileIcon';
import {COLORS} from '../../../utils/constants';
import {StyleSheet} from 'react-native';
import styles from './styles';

const OnBoarding = () => {
  const BottomTab = createBottomTabNavigator();

  const renderTabIcon = (Icon, focused) => {
    return (
      <View
        style={[
          styles.iconContainer,
          {backgroundColor: focused ? '#ECECEC' : '#fff'},
        ]}>
        <Icon color={focused ? COLORS.orange : COLORS.grey} />
      </View>
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(HomeIcon, focused),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(HeartIcon, focused),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(CartIcon, focused),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(ProfileIcon, focused),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default OnBoarding;
