import {View, Text, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Input = ({
  placeholder,
  onChangeText,
  value,
  style,
  keyboardType,
}: any) => {
  return (
    <View style={tw`bg-white border-2 w-{100%} rounded-3xl`}>
      <TextInput
        style={[tw`h-[13] pl-3`, style]}
        placeholderTextColor={'black'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
