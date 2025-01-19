import { configureStore } from "@reduxjs/toolkit";
import soldReducer from './features/sold/soldSlice'

export const store = configureStore({
    reducer: {
        sold: soldReducer
    },
})
