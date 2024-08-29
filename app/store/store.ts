import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/cartProducts/cartProductsSlice"
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
    reducer:{
        cartProducts: productReducer,
        searchSlice: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch