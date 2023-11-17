import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuestionSlice from './Features/QuestionSlice';
import thunk from 'redux-thunk';
import CategoriesSlice from './Features/CategoriesSlice';

const persistConfigQuestion = {
  key: 'question',
  storage: AsyncStorage,
};

const persistConfigCategories = {
  key: 'categories',
  storage: AsyncStorage,
  blacklist: [],
};

const questionReducer = persistReducer(persistConfigQuestion, QuestionSlice);
const categoriesReducer = persistReducer(
  persistConfigCategories,
  CategoriesSlice,
);

const rootReducer = combineReducers({
  question: questionReducer,
  categories: categoriesReducer,
});

// sadece question ve authSlice dosyalarını kaydet
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  logger: false,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
