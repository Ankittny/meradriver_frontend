import { configureStore } from "@reduxjs/toolkit";
import { enqueryReducer } from "./Reducer/Enquery";
import { driverRegisterReducer } from "./Reducer/auth";
import { verifyDriverReducer } from "./Reducer/VerifyDriver";
import { DriverDetailReducer } from "./Reducer/DriverDetail";
import { hireDriverReducer } from "./Reducer/HireDriver";

const store = configureStore({
    reducer:{
        enquery: enqueryReducer,
        driverRegister:driverRegisterReducer,
        verifyDriver: verifyDriverReducer,
        driverDetail:DriverDetailReducer,
        hireDriver:hireDriverReducer,
    }
})

export default store;