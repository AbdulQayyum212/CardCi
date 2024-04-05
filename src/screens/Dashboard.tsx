import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import tw from 'twrnc';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import DashboardCard from '../components/Box';

const Dashboard = () => {
  return (
    <SafeAreaView
      style={[tw`flex-1 `, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <HomeHeader heading="Dashboard" />
      <View style={tw`flex-row items-center h-20`}>
        <TouchableOpacity>
          <Avatar.Image
            size={50}
            style={tw`m-2`}
            source={require('../../assets/cardImage.jpeg')}
          />
        </TouchableOpacity>
        <Image
          style={tw` h-13 rounded-full mt-5 top--2 mx-1`}
          source={require('../../assets/Line.png')}
        />
        <View style={tw`gap-5 flex-1 justify-between items-start px-1 `}>
          <Text style={tw`text-black text-3 w-50`}>Waqar Khan</Text>
          <Text style={tw`text-black text-3 w-50`}>
            urspecial1one@gmail.com
          </Text>
        </View>
      </View>
      <View style={tw`px-3 mt-10 gap-5`}>
        <DashboardCard num={'05'} label={'Contact'} />
        <DashboardCard num={'04'} label={'Cards'} />
        <DashboardCard num={'03'} label={'Orders'} />
        <DashboardCard num={'02'} label={'Pending'} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
