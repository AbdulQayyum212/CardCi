import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import tw from 'twrnc';
const MyOrder = () => {
  return (
    <SafeAreaView
      style={[tw`flex-1 `, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <HomeHeader heading="MyOrder" />
      <View style={tw`p-5`}>
        {/* <TouchableOpacity
          // onPress={() => navigation.navigate('RecipientName')}
          style={[
            tw`w-[100%] p-2 border shadow-lg gap-2 bg-white rounded-2xl h-[29] overflow-hidden`,
          ]}>
          <Text style={[tw`text-black text-[15px] `]}>Order:1234543</Text>
          <Text style={[tw`text-black text-[15px] `]}>Receipt:Pending</Text>
          <Text style={[tw`text-black text-[15px] `]}>
            Delivery Date: 29-Mar-2024
          </Text>
          <Text style={[tw`text-black text-[15px]  `]}>
            Order Status:Pending{' '}
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default MyOrder;
