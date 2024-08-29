import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductProps = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    image: string,
}

type InitialState = {
    productList: ProductProps[]
}

const initialState: InitialState = {
    productList: []
}

const productSlice = createSlice({
    name:'cartProduct',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductProps>) => {
            const product = action.payload;
            const existingProduct = state.productList.find(p => p.id === product.id);
            if(!existingProduct) {
                state.productList.push(product);
                return
            }
            existingProduct.quantity += product.quantity;
    },
    decreaseProduct: (state, action ) => {
        const product = action.payload;
        const existingProduct = state.productList.find(p => p.id === product.id);
        if(existingProduct && existingProduct.quantity > 0) {
         existingProduct.quantity -= 1;
            if(existingProduct.quantity === 0) {
                state.productList = state.productList.filter(p => p.id!== product.id);
            }
        }

    }
        
}})

export const { addProduct, decreaseProduct } = productSlice.actions

export default productSlice.reducer