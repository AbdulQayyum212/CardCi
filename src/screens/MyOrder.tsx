import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';

const MyOrder = () => {
  return (
    <SafeAreaView>
      <HomeHeader heading="MyOrder" />
      <Text>MyOrder</Text>
    </SafeAreaView>
  );
};

export default MyOrder;
