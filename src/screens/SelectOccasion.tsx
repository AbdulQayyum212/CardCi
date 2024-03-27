import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {Chip} from 'react-native-ui-lib';
import {Alert} from 'react-native';
const SelectOccasion = () => {
  const navigation = useNavigation();
  const [condition, setCondition] = useState('celebration');
  return (
    <SafeAreaView
      style={[
        tw`flex-1  justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <View style={tw`  items-center  w-full justify-center px-5 `}>
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
          SELECT OCCASION
        </Text>
        <View>
          <View style={tw`w-[100%] gap-3 mt-5 flex-row`}>
            <Chip
              // id={key}
              style={{
                padding: 10,
                // paddingVertical: 10,
                borderRadius: 20,
                width: 120,
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                borderColor: 'grey',
              }}
              // leftElement={
              //   <Image
              //     style={{width: 30, height: 30}}
              //     source={value.image}
              //   />
              // }
              label={'celebration'}
              // onPress={() =>
              //   setPublishListing((prev: any) => ({
              //     ...prev,
              //     [k]: {
              //       ...v,
              //       ...{
              //         [key]: {...value, selected: !value.selected},
              //       },
              //     },
              //   }))
              // }
            />
            <Chip
              // id={key}
              style={{
                padding: 10,
                // paddingVertical: 10,
                borderRadius: 20,
                width: 95,
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                borderColor: 'grey',
              }}
              // leftElement={
              //   <Image
              //     style={{width: 30, height: 30}}
              //     source={value.image}
              //   />
              // }
              label={'Festival'}
              // onPress={() =>
              //   setPublishListing((prev: any) => ({
              //     ...prev,
              //     [k]: {
              //       ...v,
              //       ...{
              //         [key]: {...value, selected: !value.selected},
              //       },
              //     },
              //   }))
              // }
              onPress={() => setCondition('Festival')}
            />
            <Chip
              // id={key}
              style={{
                padding: 10,
                // paddingVertical: 10,
                borderRadius: 20,
                width: 100,
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                borderColor: 'grey',
              }}
              // leftElement={
              //   <Image
              //     style={{width: 30, height: 30}}
              //     source={value.image}
              //   />
              // }
              label={'Holidays'}
              onPress={() => setCondition('Holidays')}
              // onPress={() => setCondition('Festival')}
            />
          </View>
          <Chip
            // id={key}
            style={{
              padding: 10,
              // paddingVertical: 10,
              borderRadius: 20,
              width: 200,
              marginTop: 10,
              alignSelf: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'grey',
            }}
            // leftElement={
            //   <Image
            //     style={{width: 30, height: 30}}
            //     source={value.image}
            //   />
            // }
            label={'Create Your Own Occasion'}
            onPress={() => setCondition('Create Your Own Occasion')}
            // onPress={() =>
            //   setPublishListing((prev: any) => ({
            //     ...prev,
            //     [k]: {
            //       ...v,
            //       ...{
            //         [key]: {...value, selected: !value.selected},
            //       },
            //     },
            //   }))
            // }
          />
        </View>
      </View>

      <View>
        <Text style={tw`text-center font-bold text-2xl mb-5`}>
          Select Your Celebration Below
        </Text>
        {condition === 'celebration' ? (
          <>
            <View style={tw`w-[100%] gap-3 mt-5 flex-row justify-center`}>
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 100,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Birthday'}
                onPress={() => Alert.alert('Hello')}
              />
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 180,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Fathers/Mother Days'}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
            </View>
            <View style={tw`w-[100%] gap-3 mt-5 flex-row justify-center`}>
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 180,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Wedding Anniversary'}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 120,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Anniversary'}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
            </View>
          </>
        ) : condition === 'Festival' ? (
          <View style={tw`w-[100%] gap-3 mt-5 flex-row justify-center`}>
            <Chip
              // id={key}
              style={{
                padding: 10,
                // paddingVertical: 10,
                borderRadius: 20,
                width: 160,
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                borderColor: 'grey',
              }}
              // leftElement={
              //   <Image
              //     style={{width: 30, height: 30}}
              //     source={value.image}
              //   />
              // }
              label={'All Religions Above'}
              onPress={() => Alert.alert('Hello')}
            />
            <Chip
              // id={key}
              style={{
                padding: 10,
                // paddingVertical: 10,
                borderRadius: 20,
                width: 190,
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                borderColor: 'grey',
              }}
              // leftElement={
              //   <Image
              //     style={{width: 30, height: 30}}
              //     source={value.image}
              //   />
              // }
              label={'Chinese New Year 2024'}
              // onPress={() =>
              //   setPublishListing((prev: any) => ({
              //     ...prev,
              //     [k]: {
              //       ...v,
              //       ...{
              //         [key]: {...value, selected: !value.selected},
              //       },
              //     },
              //   }))
              // }
            />
          </View>
        ) : condition === 'Holidays' ? (
          <>
            <View style={tw`w-[100%] gap-2 mt-5 flex-row justify-center`}>
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 107,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Christmas'}
                onPress={() => Alert.alert('Hello')}
              />
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 108,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'New Years'}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 130,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Thanksgiving '}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
            </View>
            <View style={tw`w-[100%] gap-2 mt-5 flex-row justify-center`}>
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 85,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Easter'}
                onPress={() => Alert.alert('Hello')}
              />
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 107,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Halloween'}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 140,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'St Patrick’s Day'}
                // onPress={() =>
                //   setPublishListing((prev: any) => ({
                //     ...prev,
                //     [k]: {
                //       ...v,
                //       ...{
                //         [key]: {...value, selected: !value.selected},
                //       },
                //     },
                //   }))
                // }
              />
            </View>
            <View style={tw`w-[100%] gap-2 mt-5 flex-row justify-center`}>
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 140,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                // leftElement={
                //   <Image
                //     style={{width: 30, height: 30}}
                //     source={value.image}
                //   />
                // }
                label={'Happy Holidays'}
                onPress={() => Alert.alert('Hello')}
              />
            </View>
          </>
        ) : (
          <View style={tw`p-[20] w-[100%] `}>
            <Input placeholder="Custom" />
          </View>
        )}
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
          onPress={() => navigation.navigate('DeliveryDate')}
          style={{
            width: '45%',
            padding: 10,
            borderRadius: 20,
            borderColor: 'grey',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectOccasion;
