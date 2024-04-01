import React from 'react';
import StackNavigation from './StackNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerScreenContainer from '../components/DrawerScreenContainer';
import Home from '../screens/Home';
import {Image} from 'react-native';
import MyContact from '../screens/MyContact';
import MyOrder from '../screens/MyOrder';
import Wish from '../screens/Wish';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="My Contact"
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 156,
          backgroundColor: '#BAF4E0',
        },
        // @ts-ignore
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        // drawerActiveTintColor: COLORS.green,
        // drawerInactiveTintColor: COLORS.grey,
        // @ts-ignore
        drawerItemStyle: {
          // backgroundColor: 'red',
          // flexDirection: 'column-reverse',
          // height: 100,
        },
        sceneContainerStyle: {
          // flexDirection: 'column',
          // backgroundColor: COLORS.white,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <>
        <Drawer.Screen
          name="Dashboard"
          options={{
            sceneContainerStyle: {flexDirection: 'row-reverse'},
            // title: 'Dashboard',
            drawerIcon: ({color}) => (
              // <Icon name="home" size={25} style={{ marginRight: -20, color }} />
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: -20}}
                source={require('../../assets/Dashboard.png')}
              />
            ),
          }}>
          {props => (
            <DrawerScreenContainer {...props}>
              <Home />
            </DrawerScreenContainer>
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="My Contact"
          options={{
            sceneContainerStyle: {flexDirection: 'row-reverse'},
            drawerIcon: ({color}) => (
              // <Icon name="home" size={25} style={{ marginRight: -20, color }} />
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: -20}}
                source={require('../../assets/MyContact.png')}
              />
            ),
          }}>
          {props => (
            <DrawerScreenContainer {...props}>
              <MyContact />
            </DrawerScreenContainer>
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="My Order"
          options={{
            sceneContainerStyle: {flexDirection: 'row-reverse'},
            drawerIcon: ({color}) => (
              // <Icon name="home" size={25} style={{ marginRight: -20, color }} />
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: -20}}
                source={require('../../assets/MyOrder.png')}
              />
            ),
          }}>
          {props => (
            <DrawerScreenContainer {...props}>
              <MyOrder />
            </DrawerScreenContainer>
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="Add More"
          options={{
            sceneContainerStyle: {flexDirection: 'row-reverse'},
            drawerIcon: ({color}) => (
              // <Icon name="home" size={25} style={{ marginRight: -20, color }} />
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: -20}}
                source={require('../../assets/MyOrder.png')}
              />
            ),
          }}>
          {props => (
            <DrawerScreenContainer {...props}>
              <Wish />
            </DrawerScreenContainer>
          )}
        </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
