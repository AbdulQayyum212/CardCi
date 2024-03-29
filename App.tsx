import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import 'react-native-gesture-handler';
import Toast, {ErrorToast} from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/stores/store';
// import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </PersistGate>
        <Toast
          config={{
            error: props => (
              <ErrorToast
                {...props}
                text1NumberOfLines={2}
                text2NumberOfLines={2}
              />
            ),
          }}
        />
      </Provider>
    </>
  );
};

export default App;
