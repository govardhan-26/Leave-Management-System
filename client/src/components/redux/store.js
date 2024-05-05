import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userSlice } from './api/userProtectedApi'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
    [userSlice.reducerPath]:userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userSlice.middleware,
    ),
})

setupListeners(store.dispatch)