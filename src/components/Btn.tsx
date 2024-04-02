import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
const Btn = ({style, title, onPress, left, right, textStyle}: any) => {
  return (
    <LinearGradient
      style={[
        tw`border flex-row items-center h-13`,
        style,
        {justifyContent: right ? 'flex-end' : null, borderRadius: 20},
      ]}
      colors={
        left
          ? ['rgba(234, 247, 252, 1)', 'rgba(234, 247, 252, 1)']
          : ['#BAF2E2', '#B8D1FC']
      }>
      <TouchableOpacity
        style={[
          tw`flex-row flex-1 items-center gap-1 h-13 px-3`,
          style,
          {justifyContent: right ? 'flex-end' : null, borderRadius: 20},
        ]}
        onPress={onPress}>
        {left && (
          <Image
            style={{width: 30, height: 15}}
            source={require('../../assets/lefticon.png')}
          />
        )}
        <Text style={[tw`text-black font-bold text-base`, textStyle]}>
          {title}
        </Text>
        {right && (
          <Image
            style={{width: 30, height: 15}}
            source={require('../../assets/righticon.png')}
          />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Btn;
