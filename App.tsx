import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
// import { Provider } from 'react-redux';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
