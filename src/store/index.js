import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./modules/counterStore";

const store = configureStore({
    reducer: {
        counterReduce
    }
})

export default store