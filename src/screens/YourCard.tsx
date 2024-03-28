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
import React, {useRef, useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Chip from '../components/Chip';
const YourCard = () => {
  const navigation = useNavigation();
  const [condition, setCondition] = useState('Choose a Template');
  const [flatListScrollIndex, setFLatListScrollIndex] = useState(0);
  const [img, setImg] = useState('');
  const [listIndex, setListIndex] = useState<number>();
  const image = [
    {img: require('../../assets/image.png'), id: 1},
    {img: require('../../assets/img.png'), id: 2},
    {img: require('../../assets/image.png'), id: 3},
    {img: require('../../assets/img.png'), id: 4},
    {img: require('../../assets/image.png'), id: 5},
    {img: require('../../assets/img.png'), id: 6},
    {img: require('../../assets/image.png'), id: 7},
    {img: require('../../assets/img.png'), id: 8},
    {img: require('../../assets/image.png'), id: 9},
    {img: require('../../assets/img.png'), id: 10},
    {img: require('../../assets/image.png'), id: 11},
    {img: require('../../assets/img.png'), id: 12},
    {img: require('../../assets/image.png'), id: 13},
  ];
  const scrollRef = useRef<FlatList>(null);
  console.log('flatListScrollIndex', flatListScrollIndex);

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
                onPress={() => setCondition('Choose a Template')}
                label="Choose a Template"
              />
              <Chip
                onPress={() => setCondition('Upload Image')}
                label="Upload Image"
              />
            </View>
          </View>
          <View>
            <View style={tw`w-[100%] gap-3 mt-3 flex-row`}>
              <Chip
                onPress={() => setCondition('Upload Image')}
                label="Text To Image (Ai Prompt)"
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
                    source={img ? img.img : require('../../assets/image.png')}
                  />
                </View>
                <View style={tw`flex-row items-center gap-2`}>
                  <TouchableOpacity
                    //prev
                    onPress={() => {
                      if (flatListScrollIndex > 0) {
                        scrollRef.current?.scrollToIndex({
                          animated: true,
                          index: flatListScrollIndex - 1,
                        });
                        setFLatListScrollIndex(prev => prev - 1);
                      }
                    }}>
                    <Icon name="left" size={25} />
                  </TouchableOpacity>
                  <FlatList
                    // onScroll={handleScroll}
                    ref={scrollRef}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={tw`ml-3`}
                    data={image}
                    horizontal
                    renderItem={({item, index}) => {
                      return (
                        <LinearGradient
                          colors={
                            listIndex === index
                              ? ['#BAF2E2', '#B8D1FC']
                              : [
                                  'rgba(234, 247, 252, 1)',
                                  'rgba(234, 247, 252, 1)',
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={[
                            tw`w-33 h-23 mr-2 rounded-2xl`,
                            {
                              marginLeft: -5,
                              // height: 150,
                              // width: 200,
                              // borderRadius: 20,
                            },
                          ]}>
                          <TouchableOpacity
                            onPress={() => {
                              setListIndex(index);

                              setImg(item);
                            }}
                            style={[
                              tw` w-30 h-20 rounded-2xl overflow-hidden `,
                              {
                                // borderColor: listIndex === index ? 'black' : '',
                                // borderWidth: listIndex === index ? 5 : 0,
                                margin: 5,
                              },
                            ]}>
                            <ImageBackground
                              style={tw` w-30 h-20 rounded-2xl`}
                              source={item.img}
                            />
                          </TouchableOpacity>
                        </LinearGradient>
                      );
                    }}
                  />
                  <TouchableOpacity
                    //next
                    onPress={() => {
                      if (flatListScrollIndex < image.length - 1) {
                        scrollRef.current?.scrollToIndex({
                          animated: true,
                          index: flatListScrollIndex + 1,
                        });
                        setFLatListScrollIndex(prev => prev + 1);
                      }
                    }}>
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
            onPress={() => navigation.navigate('Preview', {img: img})}
            style={{
              width: '45%',
              borderColor: 'grey',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourCard;
