import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RecipientName from '../screens/RecipientName';
import RelationShip from '../screens/RelationShip';
import PersonLike from '../screens/PersonLike';
import SelectOccasion from '../screens/SelectOccasion';
import DeliveryDate from '../screens/ DeliveryDate';
import YourCard from '../screens/YourCard';
import Preview from '../screens/Preview';
import Wish from '../screens/Wish';
import BookingStatus from '../screens/BookingStatus';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipientName" component={RecipientName} />
      <Stack.Screen name="RelationShip" component={RelationShip} />
      <Stack.Screen name="PersonLike" component={PersonLike} />
      <Stack.Screen name="SelectOccasion" component={SelectOccasion} />
      <Stack.Screen name="DeliveryDate" component={DeliveryDate} />
      <Stack.Screen name="YourCard" component={YourCard} />
      <Stack.Screen name="Preview" component={Preview} />
      <Stack.Screen name="Wish" component={Wish} />
      <Stack.Screen name="BookingStatus" component={BookingStatus} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
