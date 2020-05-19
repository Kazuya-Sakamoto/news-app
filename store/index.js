import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';
import { composeWithDevTools } from  'redux-devtools-extension';
import { persistReducer, persistStore } from  'redux-persist'; //*ストレージに保存
import { AsyncStorage } from 'react-native' //*ここに保存
const rootReducer = combineReducers ({
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;