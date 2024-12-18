import { configureStore } from "@reduxjs/toolkit";
import { enqueryReducer } from "./Reducer/Enquery";
import { driverRegisterReducer } from "./Reducer/auth";
import { verifyDriverReducer } from "./Reducer/VerifyDriver";
import { DriverDetailReducer } from "./Reducer/DriverDetail";

const store = configureStore({
    reducer:{
        enquery: enqueryReducer,
        driverRegister:driverRegisterReducer,
        verifyDriver: verifyDriverReducer,
        driverDetail:DriverDetailReducer,
    }
})

export default store;