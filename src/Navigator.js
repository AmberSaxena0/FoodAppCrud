import {View, Text, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screen/splash';
import SignUp from './screen/auth/signup';
import SignIn from './screen/auth/signin';
import Carousel from './screen/auth/carousel';
import {useSelector} from 'react-redux';
import OnBoarding from './screen/main/onBoarding';
import DishesDetails from './screen/dishesDetails';
import DishListPage from './screen/DishListPage';
import CourseListPage from './screen/courseListPage';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const userIsLoggedIn = useSelector(state => state.AuthSlice.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          navigationBarHidden: Platform.OS == 'android' ? true : false,
          animation: 'slide_from_right',
        }}>
        {!userIsLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Carousel" component={Carousel} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="DishesDetails" component={DishesDetails} />
            <Stack.Screen name="DishListPage" component={DishListPage} />
            <Stack.Screen name="CourseListPage" component={CourseListPage} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
