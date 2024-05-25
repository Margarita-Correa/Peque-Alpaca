import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice"
import reductorShop from "../features/Shop/shopSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorShop
    }
})