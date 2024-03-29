import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {ToastError, ToastSuccess} from '../Config/Constants';
import Toast from 'react-native-toast-message';
export default function RecipientName() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  return (
    <SafeAreaView
      style={[
        tw`flex-1 justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <View style={tw` items-center  w-full justify-center px-5 `}>
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
          What’s Your Recipient’s Name?
        </Text>
        <View style={tw`p-[20] w-[100%] `}>
          <Input
            onChangeText={(text: string) => setName(text)}
            placeholder="Full Name"
          />
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between px-2 mb-4`}>
        <Btn
          left
          onPress={() => navigation.goBack()}
          title="Back"
          style={{
            width: '45%',
            borderColor: 'grey',
          }}
        />
        <Btn
          right
          title="Continue"
          onPress={() => {
            if (name === '')
              return Toast.show(ToastError('Full Name is Required'));
            navigation.navigate('RelationShip', {name: name});
          }}
          style={{
            width: '45%',
            borderColor: 'grey',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
