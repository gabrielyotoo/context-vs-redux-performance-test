import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
