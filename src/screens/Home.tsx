import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../components/HomeHeader';
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <HomeHeader heading="Home" />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={tw`text-red`}>Hello</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
