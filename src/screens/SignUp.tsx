import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {ToastError, ToastSuccess} from '../Config/Constants';
import Toast from 'react-native-toast-message';
import BackBtn from '../components/BackBtn';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  return (
    <SafeAreaView
      style={[
        tw`flex-1 justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <ScrollView>
        <View style={tw` items-center  w-full justify-center px-5 `}>
          <BackBtn />
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
          <Text style={tw`text-[8] text-black font-bold text-center`}>
            Sign Up
          </Text>
          <View style={tw`p-[20] w-[100%] gap-5 `}>
            <Input
              value={firstName}
              onChangeText={(text: string) => setFirstName(text)}
              placeholder="First Name"
            />
            <Input
              value={lastName}
              onChangeText={(text: string) => setLastName(text)}
              placeholder="Last Name"
            />
            <Input
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              placeholder="Email"
            />
            <Input
              keyboardType="number-pad"
              value={number}
              onChangeText={(text: string) => setNumber(text)}
              placeholder="Number"
            />
            <View>
              {/* <Btn textStyle={{textAlign: 'center'}} title="Sign In" /> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('StackNavigation')}>
                <LinearGradient
                  colors={['#BAF2E2', '#B8D1FC']}
                  style={[
                    tw`w-[100%] p-2 rounded-full h-12 items-center justify-center`,
                  ]}>
                  <Text style={tw`text-black  font-bold`}>Sign Up</Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 10,
                  // alignSelf: 'flex-start',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
