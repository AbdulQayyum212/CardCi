import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeHeader from '../components/HomeHeader';
import LinearGradient from 'react-native-linear-gradient';
import MyContact from './MyContact';
import MyOrder from './MyOrder';
import Wish from './Wish';
import Dashboard from './Dashboard';
const Home = () => {
  const navigation = useNavigation();
  const [condition, setCondition] = useState('My Contact');
  return (
    <SafeAreaView style={tw`h-full`}>
      {/* <HomeHeader heading="Home" /> */}
      <View style={tw`flex-row  h-full`}>
        <LinearGradient
          colors={['#BAF2E2', '#B8D1FC']}
          style={tw`w-30  h-full bg-black items-center`}>
          <View
            style={tw`flex-row items-center   mt-4 w-full justify-between px-5`}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginBottom: 20,
                // marginLeft: 20,
              }}
              resizeMode="contain"
              source={require('../../assets/cardci-Logo.png')}
            />
          </View>
          <View style={tw`gap-8`}>
            <TouchableOpacity
              onPress={() => setCondition('Dashboard')}
              style={[
                tw`items-center justify-center gap-2 w-[100] h-20`,
                {
                  backgroundColor:
                    condition === 'Dashboard' ? '#A1D0C7' : 'transparent',
                },
              ]}>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../../assets/Dashboard.png')}
              />
              <Text>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCondition('My Contact')}
              style={[
                tw`items-center justify-center gap-2 w-[100] h-20`,
                {
                  backgroundColor:
                    condition === 'My Contact' ? '#A1D0C7' : 'transparent',
                },
              ]}>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../../assets/MyContact.png')}
              />
              <Text>My Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCondition('My Order')}
              style={[
                tw`items-center justify-center gap-2 w-[100] h-20`,
                {
                  backgroundColor:
                    condition === 'My Order' ? '#A1D0C7' : 'transparent',
                },
              ]}>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../../assets/MyOrder.png')}
              />
              <Text>My Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCondition('Add More')}
              style={[
                tw`items-center justify-center gap-2 w-[100] h-20`,
                {
                  backgroundColor:
                    condition === 'Add More' ? '#A1D0C7' : 'transparent',
                },
              ]}>
              <Icon name="payment" size={25} />
              <Text>Add More</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {condition === 'Dashboard' ? (
          <Dashboard />
        ) : condition === 'My Contact' ? (
          <MyContact />
        ) : condition === 'My Order' ? (
          <MyOrder />
        ) : (
          <Wish />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
