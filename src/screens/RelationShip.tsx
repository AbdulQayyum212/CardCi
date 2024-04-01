import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import Toast from 'react-native-toast-message';
import {ToastError} from '../Config/Constants';
import BackBtn from '../components/BackBtn';
const RelationShip = ({route}) => {
  const [data, setData] = useState({
    name: route?.params?.name,
    RelationShip: '',
  });
  const navigation = useNavigation();
  const emojisWithIcons = [
    {title: 'Friend', icon: 'emoticon-happy-outline'},
    {title: 'Sister', icon: 'emoticon-cool-outline'},
    {title: 'Brother', icon: 'emoticon-lol-outline'},
    {title: 'Father', icon: 'emoticon-sad-outline'},
    {title: 'Mother', icon: 'emoticon-cry-outline'},
  ];
  return (
    <SafeAreaView
      style={[
        tw`flex-1  justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <View style={tw` items-center  w-full justify-center px-5 `}>
        <BackBtn />
        <Image
          style={{
            marginTop: 20,
            width: 100,
            height: 100,
            marginBottom: 10,
            // marginLeft: 20,
          }}
          resizeMode="contain"
          source={require('../../assets/cardci-Logo.png')}
        />
        <Text style={tw`text-[6] text-black font-bold text-center`}>
          WHAT IS THEIR RELATIONSHIP TO YOU?
        </Text>
        {/* <View style={tw`p-[20] w-[100%] `}>
          <Input placeholder="Full Name" />
        </View> */}
        <SelectDropdown
          data={emojisWithIcons}
          onSelect={(selectedItem, index) => {
            setData((prev: any) => ({
              ...prev,
              RelationShip: selectedItem.title,
            }));
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                {/* {selectedItem && (
            // <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )} */}
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || 'Relation'}
                </Text>
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: '#D2D9DF'}),
                }}>
                {/* <Icon name={item.icon} style={styles.dropdownItemIconStyle} /> */}
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>

      <View style={tw`flex-row items-center justify-between px-2 mb-4`}>
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
          // onPress={() => console.log(data)}
          onPress={() => {
            if (data.RelationShip === '')
              return Toast.show(ToastError('Full Name is Required'));
            navigation.navigate('PersonLike', {data: data});
          }}
          right
          title="Continue"
          style={{
            width: '45%',
            borderColor: 'grey',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 20,
    height: 50,
    borderWidth: 4,
    // backgroundColor: '#E9ECEF',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    backgroundColor: 'white',
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
export default RelationShip;
