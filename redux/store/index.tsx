import { configureStore } from "@reduxjs/toolkit";
import reducerdata from "../reducers/reducerdata";

export default configureStore({
    reducer:{
        data:reducerdata,
    }
})