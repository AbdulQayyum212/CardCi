import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {Chip} from 'react-native-ui-lib';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const YourCard = () => {
  const navigation = useNavigation();
  const [condition, setCondition] = useState('Choose a Template');
  const image = [
    {img: require('../../assets/image.png')},
    {img: require('../../assets/img.png')},
    {img: require('../../assets/image.png')},
  ];
  return (
    <SafeAreaView
      style={[
        tw`flex-1  justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Create Your Card!
          </Text>
          <View>
            <View style={tw`w-[100%] gap-3 mt-5 flex-row`}>
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
                label={'Choose a Template'}
                onPress={() => setCondition('Choose a Template')}
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
                label={'Upload Image'}
                onPress={() => setCondition('Upload Image')}
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
                //   onPress={() => setCondition('Festival')}
              />
            </View>
          </View>
          <View>
            <View style={tw`w-[100%] gap-3 mt-3 flex-row`}>
              <Chip
                // id={key}
                style={{
                  padding: 10,
                  // paddingVertical: 10,
                  borderRadius: 20,
                  width: 200,
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
                label={'Text To Image (Ai Prompt)'}
                onPress={() => setCondition('Text To Image (Ai Prompt)')}
                // onPress={() => setCondition('Festival')}
              />
            </View>
          </View>
        </View>

        <View>
          {condition === 'Choose a Template' ? (
            <>
              <View style={tw`w-[100%] gap-3 mt-1  justify-center p-5`}>
                <View style={tw` w-full h-50 rounded-2xl overflow-hidden`}>
                  {/* <Text s>Card</Text> */}
                  <ImageBackground
                    style={tw` w-full h-50 rounded-2xl`}
                    source={require('../../assets/image.png')}
                  />
                </View>
                <View style={tw`flex-row items-center gap-2`}>
                  <TouchableOpacity>
                    <Icon name="left" size={25} />
                  </TouchableOpacity>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={tw`ml-3`}
                    data={image}
                    horizontal
                    renderItem={({item}) => {
                      return (
                        <View
                          style={tw` w-30 h-20 rounded-2xl overflow-hidden mr-5`}>
                          {/* <Text s>Card</Text> */}
                          <ImageBackground
                            style={tw` w-30 h-20 rounded-2xl`}
                            source={item.img}
                          />
                        </View>
                      );
                    }}
                  />

                  <TouchableOpacity>
                    <Icon name="right" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : condition === 'Upload Image' ? (
            <View style={tw`w-[100%] gap-3 mt-1  justify-center p-5`}>
              <View style={tw` w-full h-50 rounded-2xl overflow-hidden`}>
                {/* <Text s>Card</Text> */}
                <ImageBackground
                  style={tw` w-full h-50 rounded-2xl`}
                  source={require('../../assets/image.png')}
                />
              </View>
            </View>
          ) : (
            <>
              <View style={tw`w-[100%] gap-3 mt-1  justify-center p-5`}>
                <View style={tw` w-full h-50 rounded-2xl overflow-hidden`}>
                  {/* <Text s>Card</Text> */}
                  <ImageBackground
                    style={tw` w-full h-50 rounded-2xl`}
                    source={require('../../assets/image.png')}
                  />
                </View>
                <View style={tw`p-[20] w-[100%] `}>
                  <Input placeholder="Person Holding Child Hand" />
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <View style={tw`flex-row items-center justify-between px-2 mb-4 mt-5`}>
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
          onPress={() => navigation.navigate('Preview')}
          style={{
            width: '45%',
            borderColor: 'grey',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourCard;
