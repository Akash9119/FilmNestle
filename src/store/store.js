import { configureStore } from '@reduxjs/toolkit'

import homeSlice from './slices/homeSlice';

export default configureStore({
  reducer: {
    home: homeSlice,
  },
})