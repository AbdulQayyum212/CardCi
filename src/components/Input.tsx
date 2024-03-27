import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Input = ({placeholder, onChangeText, value}: any) => {
  return (
    <View style={tw`bg-white border-4 w-{100%} rounded-3xl`}>
      <TextInput
        style={tw`h-[13] pl-3`}
        placeholderTextColor={'black'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
