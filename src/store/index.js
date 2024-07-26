import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./modules/counterStore";
import channelReduce from "./modules/channelStore";

const store = configureStore({
    reducer: {
        counterReduce2: counterReduce,
        channelReduce2: channelReduce
    }
})

export default store