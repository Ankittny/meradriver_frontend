import { configureStore } from "@reduxjs/toolkit";
import { enqueryReducer } from "./Reducer/Enquery";
import { driverRegisterReducer } from "./Reducer/auth";

const store = configureStore({
    reducer:{
        enquery: enqueryReducer,
        driverRegister:driverRegisterReducer,   
    }
})

export default store;