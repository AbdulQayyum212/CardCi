import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Toast, {ErrorToast} from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/stores/store';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AuthStackNavigation />
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
