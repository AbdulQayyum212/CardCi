import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`p-5 gap-5`}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={AddCard}
            renderItem={({item}) => {
              return (
                <View style={tw`gap-3`}>
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('RecipientName')}
                    style={[
                      tw`w-[100%] shadow-lg bg-white items-center justify-center  rounded-2xl h-[35] overflow-hidden mt-3`,
                    ]}>
                    {/* <ImageBackground
                      blurRadius={10}
                      style={[
                        tw`w-[100%] h-[35] rounded-2xl items-center justify-center `,
                      ]}
                      resizeMode="cover"
                      source={require('../../assets/cardImage.jpeg')}> */}
                    <View
                      style={tw`flex-row items-center justify-around w-full`}>
                      <View>
                        <Text style={[tw`text-black font-bold text-[4.5]`]}>
                          {`Name: ${item.name}`}
                        </Text>
                        <Text style={[tw`text-black font-bold text-[4.5]`]}>
                          {`Address: ${item.address}`}
                        </Text>
                        <Text style={[tw`text-black font-bold text-[4.5]`]}>
                          {`City: ${item.city}`}
                        </Text>
                        <Text style={[tw`text-black font-bold text-[4.5]`]}>
                          {`Relationship:${item.RelationShip}`}
                        </Text>
                      </View>
                      <View style={tw`gap-5`}>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('SelectOccasion')}
                        >
                          <LinearGradient
                            colors={['#BAF2E2', '#B8D1FC']}
                            style={[
                              tw`w-[100%] p-2 rounded-xl h-12 items-center justify-center`,
                            ]}>
                            <Text style={tw`text-red-500  font-bold`}>
                              Delete
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('SelectOccasion')}>
                          <LinearGradient
                            colors={['#BAF2E2', '#B8D1FC']}
                            style={[
                              tw`w-[100%] p-2 rounded-xl h-12 items-center justify-center`,
                            ]}>
                            <Text style={tw`text-black  font-bold`}>
                              Create a Card
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* </ImageBackground> */}
                  </TouchableOpacity>
                </View>
              );
            }}
          />

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyContact;
