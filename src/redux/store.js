import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userstateReducer from './slices/userstateSlice';


const rootReducer = combineReducers({
    userstate:userstateReducer,
})

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
  });
  
  export default store;
  