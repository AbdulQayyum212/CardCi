import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';

const DashboardCard = ({num, label}: any) => {
  return (
    <View
      style={tw`flex-row items-center justify-between  h-13 rounded-3xl overflow-hidden border-2`}>
      <Text style={tw`ml-3 font-semibold text-lg uppercase leading-tight`}>
        {label}
      </Text>
      <LinearGradient
        colors={['#BAF2E2', '#B8D1FC']}
        style={tw` justify-center h-full  items-center w-15`}>
        <Text style={tw`text-2xl font-bold`}>{num}</Text>
      </LinearGradient>
    </View>
  );
};

export default DashboardCard;
