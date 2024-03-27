import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
const Btn = ({style, title, onPress, left, right}: any) => {
  return (
    <TouchableOpacity
      style={[
        tw` border flex-row items-center gap-2`,
        style,
        {justifyContent: right ? 'flex-end' : null},
      ]}
      onPress={onPress}>
      {/* <LinearGradient
        style={[tw` border flex-row items-center gap-2`, style]}
        colors={['#BAF2E2', '#B8D1FC']}> */}
      {left && (
        <Image
          style={{width: 30, height: 15}}
          source={require('../../assets/lefticon.png')}
        />
      )}
      <Text style={tw`text-black font-bold text-base`}>{title}</Text>
      {right && (
        <Image
          style={{width: 30, height: 15}}
          source={require('../../assets/righticon.png')}
        />
      )}
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default Btn;
