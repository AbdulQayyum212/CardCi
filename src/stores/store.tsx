// store.tsx
import {applyMiddleware, legacy_createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer, {RootState} from './reducers';

const selectCardState = (state: any) => state.AddCard;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor, selectCardState};
