import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {selectCardState} from '../stores/store';
import {useSelector} from 'react-redux';
const MyContact = () => {
  const navigation = useNavigation();
  const {AddCard} = useSelector(selectCardState);
  console.log('AddCard', AddCard);

  return (
    <SafeAreaView
      style={[tw`bg-[ flex-1`, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <HomeHeader heading="My Contact" />
      <View style={tw`p-5 gap-5`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecipientName')}
          style={[tw`w-[100%]  border rounded-2xl h-[35] overflow-hidden`]}>
          <ImageBackground
            blurRadius={10}
            style={[
              tw`w-[100%] h-[35] rounded-2xl items-center justify-center `,
            ]}
            resizeMode="cover"
            source={require('../../assets/cardImage.jpeg')}>
            <Text style={[tw`text-black font-bold text-[6]`]}>
              Name:Waqar Khan
            </Text>
            <Text style={[tw`text-black font-bold text-[6]`]}>
              Relationship:Friend
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SelectOccasion')}>
          <LinearGradient
            colors={['#BAF2E2', '#B8D1FC']}
            style={[
              tw`w-[100%] rounded-full h-12 items-center justify-center`,
            ]}>
            <Text style={tw`text-black text-lg font-bold`}>Create a Card</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecipientName')}
          style={[tw`w-[100%]  border rounded-2xl h-[35] overflow-hidden`]}>
          <ImageBackground
            blurRadius={10}
            style={[
              tw`w-[100%] h-[35] rounded-2xl items-center justify-center `,
            ]}
            resizeMode="cover"
            source={require('../../assets/cardImage.jpeg')}>
            <Text style={tw`text-black font-bold text-[6]`}>
              Add a New Contact
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecipientName')}
          style={[tw`w-[100%]  border rounded-2xl h-[35] overflow-hidden`]}>
          <ImageBackground
            blurRadius={10}
            style={[
              tw`w-[100%] h-[35] rounded-2xl items-center justify-center`,
            ]}
            resizeMode="cover"
            source={require('../../assets/cardImage.jpeg')}>
            <Text style={tw`text-black font-bold text-[6]`}>
              Add a New Contact
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyContact;
