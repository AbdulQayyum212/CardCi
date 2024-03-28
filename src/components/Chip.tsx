import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
const Chip = ({label, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={tw`p-2 border rounded-2xl`}
        colors={['#BAF2E2', '#B8D1FC']}>
        <Text>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Chip;
