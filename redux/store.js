import { createStore } from 'redux';
import rootReducer from './reducers'
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['splash', 'data', 'tabbar'],
    whitelist: ['favs', 'products']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)

let persistor = persistStore(store)

export { store, persistor }
