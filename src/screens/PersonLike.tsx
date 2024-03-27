import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
const PersonLike = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        tw`flex-1  justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <ScrollView>
        <View style={tw` flex-1 items-center  w-full justify-center px-5 `}>
          <Image
            style={{
              marginTop: 50,
              width: 100,
              height: 100,
              marginBottom: 10,
              // marginLeft: 20,
            }}
            resizeMode="contain"
            source={require('../../assets/cardci-Logo.png')}
          />

          <Text style={tw`text-[8] text-black font-bold text-center`}>
            what is this person like?
          </Text>
          <View style={tw`w-[100%] gap-5 mt-5`}>
            <Input placeholder="ENTER ADDRESS LINE ONE" />
            <Input placeholder="APT., STE., BLDG. (OPTIONAL)" />
            <Input placeholder="City" />
            <Input placeholder="State" />
            <Input placeholder="Zip" />
            <Input placeholder="Recipients Email Address" />
            <Input placeholder="Recipients Phone Number" />
          </View>
        </View>

        <View style={tw`flex-row items-center justify-between px-2 mb-4 mt-5`}>
          <Btn
            left
            onPress={() => navigation.goBack()}
            title="Back"
            style={{
              width: '45%',
              padding: 10,
              borderRadius: 20,
              borderColor: 'grey',
            }}
          />
          <Btn
            right
            title="Continue"
            onPress={() => navigation.navigate('Home')}
            style={{
              width: '45%',
              padding: 10,
              borderRadius: 20,
              borderColor: 'grey',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonLike;
