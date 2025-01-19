import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    history: [
        // {
        //     type: "outcome",
        //     raison:"test",
        //     amount: 1000,
        //     date: new Date("02-05-2005").toISOString().split("T")[0]
        // },
        // {
        //     type: "income",
        //     raison:"test",
        //     amount: 200,
        //     date: new Date("01-03-2020").toISOString().split("T")[0]
        // },
        // {
        //     type: "income",
        //     raison:"test",
        //     amount: 2200,
        //     date: new Date("02-06-2003").toISOString().split("T")[0]
        // },
    ]

}

const soldSlice = createSlice({
    name: "Sold",
    initialState,
    reducers:{
        addIncome: (state, {payload}) => {
            state.history = [...state.history, {
                type: "income",
                raison: payload.raison,
                amount: payload.amount,
                date: payload.date ?? new Date().toISOString().split("T")[0]
            }]
        },
        addOutcome:(state, {payload}) => {
            state.history = [...state.history, {
                type: "outcome",
                raison: payload.raison,
                amount: payload.amount,
                date:payload.date ?? new Date().toISOString().split("T")[0]
            }]
        },

        
  
        
    },
})

export const getTotal = (state, type) => {
    if (!state.sold.history || state.sold.history.length === 0) return 0;
    return Number(state.sold.history
      .filter((el) => el.type === type)
      .reduce((total, el) => total + Number(el.amount), 0));
};



export const {addIncome, addOutcome} = soldSlice.actions;
export default soldSlice.reducer;