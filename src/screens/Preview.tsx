import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {Chip} from 'react-native-ui-lib';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
const Preview = () => {
  const navigation = useNavigation();
  const rotationF = useSharedValue(0);
  const rotationB = useSharedValue(180);
  const frontStyle = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateY: `${rotationF.value}deg`}],
    };
  });
  const backStyle = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateY: `${rotationB.value}deg`}],
    };
  });

  const onAnimate = () => {
    // if (rotationF.value === 180) {
    //   rotationF.value = withTiming(0, {duration: 1000});
    //   rotationB.value = withTiming(180, {duration: 1000});
    //   return;
    // }

    'worklet';
    rotationF.value = withTiming(180, {duration: 1000});
    rotationB.value = withTiming(360, {duration: 1000});
  };
  const animate = () => {
    if (rotationF.value != 180) {
      runOnUI(onAnimate)();
    } else {
      navigation.navigate('Wish');
    }
  };

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
            Preview
          </Text>
          <View style={tw`w-[100%] gap-3 mt-1  justify-center p-5`}>
            {/* <View style={tw` w-full h-50 rounded-2xl overflow-hidden`}>
              <ImageBackground
                style={tw` w-full h-50 rounded-2xl`}
                source={require('../../assets/image.png')}
              />
            </View> */}
          </View>
          <Animated.View
            style={[
              frontStyle,
              tw`w-75 rounded-2xl overflow-hidden h-50`,
              styles.card,
              {
                backgroundColor: 'red',
              },
            ]}>
            <ImageBackground
              style={tw` w-full h-50 rounded-2xl`}
              source={require('../../assets/image.png')}
            />
          </Animated.View>
          <Animated.View
            style={[
              backStyle,
              tw`w-75 rounded-2xl overflow-hidden h-50`,
              styles.card,
              {
                backgroundColor: 'blue',
              },
            ]}>
            <LinearGradient
              colors={['#BAEDE5', '#B8D5F9']}
              style={[
                tw`w-75 rounded-2xl overflow-hidden h-50 justify-center items-center p-5`,
              ]}>
              <Text style={tw`text-center text-2xl`}>
                In your eyes, I found the universe I've always longed for.
              </Text>
            </LinearGradient>
          </Animated.View>
        </View>
      </ScrollView>
      <View style={tw`flex-row items-center justify-between px-2 mb-4 mt-5`}>
        <Btn
          left
          //   onPress={() => navigation.goBack()}
          onPress={() => {
            'worklet';
            if (rotationF.value === 180) {
              rotationF.value = withTiming(0, {duration: 1000});
              rotationB.value = withTiming(180, {duration: 1000});
              return;
            } else {
              navigation.goBack();
            }
          }}
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
          onPress={() => animate()}
          //   onPress={() => navigation.navigate('DeliveryDate')}
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
const styles = StyleSheet.create({
  cardContainer: {
    // width: 300,
    // height: 300,
    //   backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  card: {
    position: 'absolute',
    top: 220,
    left: 40,
    // width: '100%',
    // height: '100%',
    backfaceVisibility: 'hidden',
  },
  pressBtn: {
    width: 100,
    height: 50,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
export default Preview;