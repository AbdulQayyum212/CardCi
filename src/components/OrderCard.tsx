import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const OrderCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookingStatus')}
      style={tw`rounded-lg bg-white shadow-lg  p-1 gap-2`}>
      <View style={tw`flex-row items-center`}>
        <View>
          <Image
            style={tw`m-2 w-15 h-15 rounded-lg`}
            source={require('../../assets/cardImage.jpeg')}
          />
        </View>
        {/* <Image
        style={tw` h-13 rounded-full mt-5 top--2 mx-1`}
        source={require('../../assets/Line.png')}
      /> */}
        <View style={tw` flex-1 justify-between items-start px-1 gap-6`}>
          <View>
            <Text style={tw`text-black text-3 w-50`}>Waqar Khan</Text>
            <Text style={tw`text-black text-3 w-50`}>abc</Text>
          </View>
          <View style={tw`flex-row items-center `}>
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` h-2 w-2 bg-black rounded-full`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` w-6 h-1`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` h-2 w-2 bg-black rounded-full`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` w-6 h-1`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` h-2 w-2 bg-black rounded-full`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` w-6 h-1`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` h-2 w-2 bg-black rounded-full`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` w-6 h-1`}
            />
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={tw` h-2 w-2 bg-black rounded-full`}
            />
          </View>
        </View>
      </View>
      <View style={tw`border-dashed w-full border `} />
      <View style={tw`px-2 flex-row items-center justify-between`}>
        <Text style={tw`font-bold`}>Pick Up </Text>
        <Icon name="car-sport-sharp" color="black" size={16} />
        <Text style={tw`font-bold`}>Drop off</Text>
      </View>
      <View style={tw`px-2 flex-row items-center justify-between`}>
        <Text>Event Date</Text>
        <Text>6/04/2024</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
