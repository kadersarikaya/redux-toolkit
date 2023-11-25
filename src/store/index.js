import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoAsyncReducer from './todoAsyncSlice'
import todoSyncSliceReducer from './todoSyncSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoAsync: todoAsyncReducer,
    todoSync: todoSyncSliceReducer,
    user: userReducer,
  },
})