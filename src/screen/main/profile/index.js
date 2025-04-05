import {View, Text} from 'react-native';
import React from 'react';
import Layout from './layout';
import {useSelector} from 'react-redux';

const Profile = () => {
  const user_profile = useSelector(state => state.AuthSlice);

  return <Layout user_profile={user_profile} />;
};

export default Profile;
