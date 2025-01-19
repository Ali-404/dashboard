import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    user: null,
    loading: true,
    error: '',
    isLogin: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logIn: (state) => {
            state.isLogin = true
        },
        logOut: (state) => {
            state.isLogin = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state) =>{
            state.user = ,
            state.loading = false,
            state.error = '',
            state.isLogin = true
        }).addCase(loginAsync.pending, (state)=>{
            state.user = null,
            state.loading = true,
            state.error = "",
            state.isLogin = false
        }).addCase(loginAsync.failed,(state)=>{
            state.user = null,
            state.loading = false,
            state.error = "error: User not found",
            state.isLogin = false
        })
    }
})

export const loginAsync = createAsyncThunk(
    "auth/loginAsync",
    axios.get("https://dummyjson.com/users").then((res)=> {
        console.log(res.data)
        loginAsync.fulfilled
    })
)

export default authSlice.reducer