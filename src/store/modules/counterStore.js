import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: 'counter',
    initialState:{count:0},
    reducers:{
        inscrement(state) {
            state.count++
        },
        descrement(state) {
            state.count--
        },
        inscrementNum(state, action) {
            state.count = state.count+action.payload
        }
    }
}) 

const {inscrement, descrement, inscrementNum} = counterStore.actions
const counterReduce = counterStore.reducer

export {inscrement, descrement, inscrementNum}
export default counterReduce
