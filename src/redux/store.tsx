import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuestionSlice from './Features/QuestionSlice';
import thunk from 'redux-thunk';
import CategoriesSlice from './Features/CategoriesSlice';
import AppSlice from './Features/AppSlice';
import {useDispatch} from 'react-redux';

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
  app: AppSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
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
export const useAppDispatch = () => useDispatch<AppDispatch>();

export {store, persistor};
