import {combineReducers, configureStore} from '@reduxjs/toolkit';

import pageSlice from './pageReducer';


const rootReducer = combineReducers({
  pages: pageSlice,
 
})

const store = configureStore({
  reducer: rootReducer
})

export default store;