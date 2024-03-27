import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-paper';
import tw from 'twrnc';
import DrawerProfileModal from './DrawerProfileModal';
// import {useDispatch} from 'react-redux';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  // const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      style={{
        // paddingVertical: -30,
        paddingBottom: 100,
      }}>
      <View
        style={tw`flex-row items-center   mt-4 w-full justify-between px-5`}>
        <Image
          style={{
            width: 80,
            height: 80,
            marginBottom: 20,
            marginLeft: 20,
          }}
          resizeMode="contain"
          source={require('../../assets/cardci-Logo.png')}
        />
      </View>
      {/* <DrawerProfileModal /> */}
      <DrawerItemList {...props} />
      {/* <Drawer.Item
        active
        label="LOGOUT"
        style={tw`m-1 bg-transparent rounded-none mb-10`}
        icon="logout"
        onPress={() => {
          // dispatch(logoutUser());
        }}
      /> */}
    </DrawerContentScrollView>
  );
};

export default React.memo(CustomDrawerContent);

const styles = StyleSheet.create({});
