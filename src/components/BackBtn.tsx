import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#BAF2E2', '#B8D1FC']}
      style={{
        alignSelf: 'flex-start',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-sharp" size={25} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BackBtn;
