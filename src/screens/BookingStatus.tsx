import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import BackBtn from '../components/BackBtn';
import GradientText from '../components/GradientText';

const BookingStatus = () => {
  return (
    <View style={[tw`flex-1`, {backgroundColor: 'rgba(234, 247, 252, 1)'}]}>
      <Image
        resizeMode="cover"
        source={require('../../assets/image.png')}
        style={tw`w-full h-72`}
      />
      <View style={[tw`px-10 `, {marginTop: -40}]}>
        <View
          style={tw`bg-white shadow-lg w-full h-56 rounded-3xl px-5 justify-center `}>
          <View style={tw` items-center `}>
            <View style={tw`flex-row   w-full gap-4`}>
              <View style={tw`flex-row gap-4 `}>
                <Text>10:40</Text>
                <View style={tw`items-center`}>
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` h-4 w-4 bg-black rounded-full`}
                  />
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` w-1 h-9 `}
                  />
                </View>
              </View>
              <Text style={tw`font-bold text-[15px]`}>Booking Made</Text>
            </View>

            <View style={tw`flex-row   w-full gap-4`}>
              <View style={tw`flex-row gap-4 `}>
                <Text>10:40</Text>
                <View style={tw`items-center`}>
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` h-4 w-4 bg-black rounded-full`}
                  />
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` w-1 h-9 `}
                  />
                </View>
              </View>
              <Text style={tw`font-bold text-[15px]`}>
                Courier is in the way{' '}
              </Text>
            </View>

            <View style={tw`flex-row   w-full gap-4`}>
              <View style={tw`flex-row gap-4 `}>
                <Text>10:40</Text>
                <View style={tw`items-center`}>
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` h-4 w-4 bg-black rounded-full`}
                  />
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` w-1 h-9`}
                  />
                </View>
              </View>
              <Text style={tw`font-bold text-[15px]`}>pickup package</Text>
            </View>

            <View style={tw`flex-row   w-full gap-4`}>
              <View style={tw`flex-row gap-4 `}>
                <Text>10:40</Text>
                <View style={tw`items-center`}>
                  <LinearGradient
                    colors={['#BAF2E2', '#B8D1FC']}
                    style={tw` h-4 w-4 bg-black rounded-full`}
                  />
                </View>
              </View>
              <Text style={tw`font-bold text-[15px]`}>Deliver package</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          top: 10,
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <BackBtn />
        <Text style={[tw` font-bold text-[20px]`, {color: 'white'}]}>
          Booking Status{' '}
        </Text>
        {/* <GradientText style={tw` font-bold text-[20px]`}>
          Booking Status
        </GradientText> */}

        <View style={{width: '12%'}} />
      </View>
    </View>
  );
};

export default BookingStatus;

const styles = StyleSheet.create({});
