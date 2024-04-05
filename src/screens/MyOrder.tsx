import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import tw from 'twrnc';
import OrderCard from '../components/OrderCard';
const MyOrder = () => {
  return (
    <SafeAreaView
      style={[tw`flex-1 `, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <HomeHeader heading="MyOrder" />
      <View style={tw`p-3`}>
        <OrderCard />
      </View>
    </SafeAreaView>
  );
};

export default MyOrder;
