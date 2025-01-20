import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    currency: "MAD",
    rate: 1,
    all_currencies : [],
    loading: false,
    error: ""
}


const currencySlice = createSlice({
    initialState,
    name: "currency",
    reducers: {
        changeCurrency: (state,action) => {
            state.currency = action.payload
            state.rate = state.all_currencies[action.payload] // hadi ghadi t3tina rate dial current currency ex: {"MAD": 1}
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchCurrencies.fulfilled, (state,action) => {
            state.all_currencies = action.payload
            state.loading = false
            state.error = ""
        }).addCase(fetchCurrencies.pending, (state) => {
            state.loading = true
            state.error = ""
        }).addCase(fetchCurrencies.rejected, (state) => {
            state.all_currencies = []
            state.loading = false
            state.error = "There is a probleme with fetching currencies !"
        })

    }
})

export const fetchCurrencies = createAsyncThunk("currency/fetchCurrencies", async () => {
    const resp = await axios.get("https://api.exchangerate-api.com/v4/latest/MAD");
    return resp.data.rates
})

export const {changeCurrency} = currencySlice.actions;
export default currencySlice.reducer;