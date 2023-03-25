import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import detailSlice from '../containers/User/detailSlice';
//  import appointmentSlice from '..'
import  appointmentSlice  from '../containers/User/AppointmentSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';


const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
    appointment: appointmentSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});