import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackBtn from '../components/BackBtn';
const Wish = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        tw`flex-1 justify-between w-full`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <View style={tw` items-center  w-full justify-center px-5 `}>
        {/* <BackBtn /> */}
        <Image
          style={{
            marginTop: 20,
            width: 100,
            height: 100,
            marginBottom: 10,
            // marginLeft: 20,
          }}
          resizeMode="contain"
          source={require('../../assets/cardci-Logo.png')}
        />
        <Text style={tw`text-[5] text-black font-bold text-center`}>
          How Many people do you want to wish?
        </Text>
      </View>
      <View>
        <View style={tw`p-[9] w-full flex-row items-center justify-around `}>
          <View
            style={tw`w-25 h-20 shadow-2xl bg-white rounded-lg  overflow-hidden`}>
            <View style={tw`items-center justify-center  bg-white flex-1`}>
              <Text style={tw`text-center`}>1 recipient Package</Text>
            </View>
            <LinearGradient
              colors={['#BAEDE5', '#B8D5F9']}
              style={[tw`w-25  h-8 justify-center items-center `]}>
              <Text style={tw`text-black font-bold text-lg`}>$5</Text>
            </LinearGradient>
          </View>
          <View
            style={tw`w-25 h-20 shadow-2xl bg-white rounded-lg justify-between overflow-hidden`}>
            <View style={tw`items-center justify-center  bg-white flex-1`}>
              <Text style={tw`text-center`}>2 recipient Package</Text>
            </View>
            <LinearGradient
              colors={['#BAEDE5', '#B8D5F9']}
              style={[tw`w-25  h-8 justify-center items-center `]}>
              <Text style={tw`text-black font-bold text-lg`}>$15</Text>
            </LinearGradient>
          </View>
        </View>
        <View
          style={tw`p-[10] w-full flex-row items-center justify-around gap-3`}>
          <View
            style={tw`w-25 h-20 shadow-2xl bg-white rounded-lg justify-between overflow-hidden`}>
            <View style={tw`items-center justify-center  bg-white flex-1`}>
              <Text style={tw`text-center`}>1 recipient Package</Text>
            </View>
            <LinearGradient
              colors={['#BAEDE5', '#B8D5F9']}
              style={[tw`w-25  h-8 justify-center items-center `]}>
              <Text style={tw`text-black font-bold text-lg`}>$25</Text>
            </LinearGradient>
          </View>
          <View
            style={tw`w-25 h-20 shadow-2xl bg-white rounded-lg justify-between overflow-hidden`}>
            <View style={tw`items-center justify-center  bg-white flex-1`}>
              <Text style={tw`text-center`}>Custom</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between px-2 mb-4 p-[19]`}>
        {/* <Btn
          right
          title="Continue"
          onPress={() => navigation.navigate('RelationShip')}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 20,
            borderColor: 'grey',
          }}
        /> */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`w-full`}>
          <LinearGradient
            colors={['#BAEDE5', '#B8D5F9']}
            style={[
              tw`flex-row items-center justify-center gap-2`,
              {
                width: '100%',
                padding: 10,
                borderRadius: 20,
                borderColor: 'grey',
              },
            ]}
            //   onPress={onPress}
          >
            <View style={tw`flex-row items-center justify-center gap-1 `}>
              <Text style={tw`text-black font-bold text-base`}>Continue</Text>

              <Image
                style={{width: 30, height: 15}}
                source={require('../../assets/righticon.png')}
              />
            </View>
            {/* </LinearGradient> */}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Wish;
