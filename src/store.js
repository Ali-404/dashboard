import { configureStore } from "@reduxjs/toolkit";
import soldReducer from './features/sold/soldSlice'
import authReducer from './features/auth/authSlice'

export const store = configureStore({
    reducer: {
        sold: soldReducer,
        auth: authReducer,
    },
})
