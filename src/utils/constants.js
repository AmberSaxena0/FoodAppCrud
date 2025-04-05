import Icon1 from '../../assets/icons/auth/CarouselIcons/Icon1';
import Icon2 from '../../assets/icons/auth/CarouselIcons/Icon2';
import Icon3 from '../../assets/icons/auth/CarouselIcons/Icon3';

import AboutUsIcon from '../../assets/icons/profile/AboutUsIcon';
import InviteIcon from '../../assets/icons/profile/InviteIcon';
import NotificationIcon from '../../assets/icons/profile/NotificationIcon';
import OrderHistoryIcon from '../../assets/icons/profile/OrderHistoryIcon';
import PaymentIcon from '../../assets/icons/profile/PaymentIcon';
import SignOutIcon from '../../assets/icons/profile/SignOutIcon';
import TrackIcon from '../../assets/icons/profile/TrackIcon';
import {signOut} from '../network/auth';

export const COLORS = {
  white: '#fff',
  orange: '#FF640D',
  black: '#000',
  lightgrey: '#F6F6F7',
  grey: '#2E3A59',
  whiteTransparent: 'rgba(0, 0, 0, 0.5)',
  red: 'red',
};
export const COMMON_STYLES = {
  main: {
    flex: 1,
  },
};

export const CarouselItem = [
  {
    heading: 'Welcome to Bhook',
    sub_heading:
      'food delivery app that helps you to get the best dishes quickly and in time from your nearest restaurant. ',
    icon: <Icon1 />,
  },
  {
    heading: 'Enjoy fast delivery',
    sub_heading:
      'We offer 45 minutes delivery gurantee or the food will be delivered for free.',
    icon: <Icon2 />,
  },
  {
    heading: 'Order best dishes',
    sub_heading:
      'Your order will be immediately collected and sent by our courier',
    icon: <Icon3 />,
  },
];

export const TEXT = {
  AUTH: {
    LETS_GET_STARTED: "Let's Get Started",
    CREATE_AN_ACCOUNT: 'Create an new account',
    CREATE: 'Create',
    NAME: 'Name',
    EMAIL: 'Email',
    PHONE: 'Phone',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm password',
    ALREADY_HAVE_AN_ACCOUNT: 'Already have an account?',
    LOGIN: 'Login',
    WELCOME_BACK: 'Welcome back!',
    LOGIN_TO_YOUR_EXISTING_ACCOUNT: 'Log in to your existant account',
    USERNAME: 'Username',
    FORGOT_PASSWORD: 'Forget Password?',
    CONNECT_USING: 'Or connect using',
    DONT_HAVE_AN_ACCOUNT: "Don't have an account?",
    SIGNUP: 'Sign Up',
    OTP_VERIFICATION: 'OTP verification',
    OTP_MESSAGE: 'We will send you an One Time Password this mobile number',
    GET_OTP: 'GET OTP',
    CREATE_NEW_PASSWORD:
      'We will send you an One Time Password this mobile number',
    PASSWORD_MESSAGE:
      'Your new password must be different from previous used password',
    NEW_PASSWORD: 'New password',
    RESET_PASSWORD: 'Reset password',
    OTP_SENT_TO: 'Enter the OTP sent to',
    DONT_RECIEVE_OTP: "Don't receive the OTP? ",
    RESEND_OTP: 'RESEND OTP',
    VERIFY_N_PROCEED: 'Verify & Proceed',
    GOOGLE: 'Google',
    FACEBOOK: 'Facebook',
  },
  HOME: {
    WHAT_DO_YOU_WANT_TO_EAT: 'What do you want to eat?',
    TODAY_SPEACIAL: "Today's special ",
  },
  PRODUCT: {
    PRODUCT_DESCRIPTION: 'Product Descriptions',
    REVIEWS: 'Reviews',
    SUGGESTED_DISH: 'Suggestion dish',
    POPULAR_DISHES: 'Popular dish',
    LIKED_DISHES: 'Liked dish',
  },
  DELIVERY: {
    ADD_DELIVERT_ADDRESS: 'Add delivery address',
    ADDRESS: 'Address',
    ORDER_SUMMARY: 'Order summary',
    PAYMENT: 'Payment',
    ALTERNATE_PHONE_NUMBER: 'Add Alternate Phone Number',
    USE_MY_LOCATION: 'Use my location',
    NAME: 'Name*',
    PHONE: 'Phone number (Required)*',
    PINCODE: 'Pincode*',
    STATE: 'State*',
    CITY: 'City*',
    HOUSE_NUMBER: 'House No. Building Name (Required)*',
    LANDMARK: 'Road name, Area, colony*',
    CHANGE_OR_ADD_ADDRESS: 'Change or Add address',
    CONTINUE: 'Continue',
    ORDER_PLACED: 'Change or Add address',
  },

  COMMON: {
    CONTINUE: 'Continue',
    SEARCH: 'Search',
    SEE_ALL: 'See All',
    BUY_NOW: 'Buy Now',
    TRACK_ORDER: 'Track Order',
    CHECK_ORDER_HERE: 'Check your orders here',
    NO_INTERNET: 'No internet found, Please check your network.',
    SEARCH_FOOD: 'Search for your food',
    ITEM_NOT_FOUND: 'Sorry, Item not found.',
    EDIT_CARD: 'Edit card',
    EDIT_ADDRESS: 'Edit Address',
    FAVORITE: 'Liked Dishes',
  },
};

export const ProfileList = [
  {
    name: 'Notifications',
    icon: <NotificationIcon />,
    onPress: () => {},
  },
  {
    name: 'Payment method',
    icon: <PaymentIcon />,
    onPress: () => {},
  },
  {
    name: 'Reward credits',
    icon: <PaymentIcon />,
    onPress: () => {},
  },
  {
    name: 'Invite Friends',
    icon: <InviteIcon />,
    onPress: () => {},
  },
  {
    name: 'Track order',
    icon: <TrackIcon />,
    onPress: () => {},
  },
  {
    name: 'Order history',
    icon: <OrderHistoryIcon />,
    onPress: () => {},
  },
  {
    name: 'About us',
    icon: <AboutUsIcon />,
    onPress: () => {},
  },
  {
    name: 'Sign Out',
    icon: <SignOutIcon />,
    onPress: signOut,
  },
];
