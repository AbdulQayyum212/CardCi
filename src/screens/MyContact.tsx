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
import {useDispatch, useSelector} from 'react-redux';
import {setAddCard} from '../stores/actions/AddCardAction';
const MyContact = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {AddCard} = useSelector(selectCardState);
  console.log('AddCard', AddCard);
  const remove = (i: any) => {
    let Delete = AddCard.filter((item: any, index: number) => index !== i);
    console.log('Delete', Delete);

    dispatch(setAddCard(Delete));
  };
  return (
    <SafeAreaView
      style={[tw`flex-1 `, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <HomeHeader heading="My Contact" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`p-5 gap-5`}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={AddCard}
            renderItem={({item, index}) => {
              return (
                <View style={[tw`gap-2`]}>
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('RecipientName')}
                    style={[
                      tw`w-[100%] py-2 shadow-lg bg-white items-center justify-between rounded-2xl h-[35] overflow-hidden mt-3`,
                    ]}>
                    {/* <ImageBackground
                      blurRadius={10}
                      style={[
                        tw`w-[100%] h-[35] rounded-2xl items-center justify-center `,
                      ]}
                      resizeMode="cover"
                      source={require('../../assets/cardImage.jpeg')}> */}
                    <View
                      style={tw`flex-row items-center justify-between px-5 w-full `}>
                      <View>
                        <Text style={[tw`text-black font-bold text-[3]`]}>
                          {`Name:`}
                        </Text>
                        <Text style={tw`text-[3]`}>{item.name}</Text>
                        <Text style={[tw`text-black font-bold text-[3]`]}>
                          {`Address:`}
                        </Text>
                        <Text style={tw`text-[3]`}>{item.address}</Text>
                        <Text style={[tw`text-black font-bold text-[3]`]}>
                          {`Relationship:`}
                        </Text>
                        <Text style={tw`text-[3]`}>{item.RelationShip}</Text>
                      </View>
                    </View>
                    <View
                      style={tw`flex-row items-center justify-center gap-10`}>
                      <TouchableOpacity
                        onPress={() => remove(index)}
                        // onPress={() => navigation.navigate('SelectOccasion')}
                      >
                        <LinearGradient
                          colors={['#BAF2E2', '#B8D1FC']}
                          style={[
                            tw`w-[20] p-2 rounded-xl h-7 items-center justify-center`,
                          ]}>
                          <Text style={tw`text-red-500  text-[2]`}>Delete</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('SelectOccasion')}>
                        <LinearGradient
                          colors={['#BAF2E2', '#B8D1FC']}
                          style={[
                            tw`w-[20] p-2 rounded-xl h-7 items-center justify-center`,
                          ]}>
                          <Text style={tw`text-black  text-[2] text-center`}>
                            Create a Card
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    {/* </ImageBackground> */}
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('RecipientName')}>
            <LinearGradient
              colors={['#BAF2E2', '#B8D1FC']}
              style={[
                tw`w-[54] p-2 rounded-xl h-10 items-center justify-center`,
              ]}>
              <Text style={tw`text-black  text-[3]`}>Add a New Contact</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyContact;
