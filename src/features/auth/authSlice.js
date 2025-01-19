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
        logOut: (state) => {
            state.isLogin = false
            state.user = null
            state.error = ""
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state,action) =>{
           
            state.user = action.payload
            state.loading = false
            state.error = ''
            state.isLogin = true

        }).addCase(loginAsync.pending, (state)=>{
           
            state.user = null
            state.loading = true
            state.error = ""
            state.isLogin = false

        }).addCase(loginAsync.rejected,(state,action)=>{
        
            state.user = null
            state.loading = false
            state.error = action.payload
            state.isLogin = false 

        })
    }
})

export const loginAsync = createAsyncThunk(
    "auth/loginAsync",
    async (formData, thunk) => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            
            //find user
            const user = response.data.users.find(u => u.email === formData.email && u.password === formData.password)
            if (!user){

                return thunk.rejectWithValue("Incorrect User Info !")
            }
            
            return user;
        }catch(e) {
            return thunk.rejectWithValue(e.response?.data?.message || 'An error occurred')
        }  
    }
)

export default authSlice.reducer