import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import tw from 'twrnc';

const Dashboard = () => {
  return (
    <SafeAreaView
      style={[tw`flex-1 `, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <HomeHeader heading="Dashboard" />
    </SafeAreaView>
  );
};

export default Dashboard;
