import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {ToastError} from '../Config/Constants';
import {setProperties} from '../stores/actions/AddCardAction';
import {useDispatch} from 'react-redux';
const PersonLike = ({route}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<{
    name: string;
    RelationShip: string;
    address: string;
    ste: string;
    city: string;
    state: string;
    zip: string;
    recipientsAddress: string;
    recipientsNumber: number;
  }>({
    name: route?.params?.data?.name,
    RelationShip: route?.params?.data?.RelationShip,
    address: '',
    ste: '',
    city: '',
    state: '',
    zip: '',
    recipientsAddress: '',
    recipientsNumber: 123456789,
  });
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
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, address: text}))
              }
              placeholder="ENTER ADDRESS LINE ONE"
            />
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, ste: text}))
              }
              placeholder="APT., STE., BLDG. (OPTIONAL)"
            />
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, city: text}))
              }
              placeholder="City"
            />
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, state: text}))
              }
              placeholder="State"
            />
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, zip: text}))
              }
              placeholder="Zip"
            />
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, recipientsAddress: text}))
              }
              placeholder="Recipients Email Address"
            />
            <Input
              onChangeText={(text: string) =>
                setData((prev: any) => ({...prev, recipientsNumber: text}))
              }
              placeholder="Recipients Phone Number"
            />
          </View>
        </View>

        <View style={tw`flex-row items-center justify-between px-2 mb-4 mt-5`}>
          <Btn
            left
            onPress={() => navigation.goBack()}
            title="Back"
            style={{
              width: '45%',
              // padding: 10,
              // borderRadius: 20,
              borderColor: 'grey',
            }}
          />
          <Btn
            right
            title="Continue"
            onPress={() => {
              if (data.address === '')
                return Toast.show(ToastError('Address is Required'));
              if (data.city === '')
                return Toast.show(ToastError('City is Required'));
              if (data.state === '')
                return Toast.show(ToastError('State is Required'));
              if (data.zip === '')
                return Toast.show(ToastError('Zip is Required'));
              if (data.recipientsAddress === '')
                return Toast.show(ToastError('Recipients Address is Required'));
              if (data.recipientsNumber === 0)
                return Toast.show(ToastError('Recipients Number is Required'));
              dispatch(setProperties(data));
              navigation.navigate('Home');
              console.log('Data', data);
            }}
            style={{
              width: '45%',
              // padding: 10,
              // borderRadius: 20,
              borderColor: 'grey',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonLike;
