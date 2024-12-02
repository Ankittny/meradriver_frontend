import { configureStore } from "@reduxjs/toolkit";
import { enqueryReducer } from "./Reducer/Enquery";

const store = configureStore({
    reducer:{
        enquery: enqueryReducer,
    }
})

export default store;