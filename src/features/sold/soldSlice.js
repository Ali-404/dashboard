import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    outcomes: [],
    incomes: [],

}

const soldSlice = createSlice({
    initialState,
    name: "Sold",
    reducers:{
        addIncome: (state, payload) => {
            state.incomes = [...state.incomes, payload]
        },
        addOutcome: (state, payload) => {   
            state.outcomes = [...state.outcomes, payload]
        },
    },
})

export const {addIncome, addOutcome} = soldSlice.actions;
export default soldSlice.reducer;