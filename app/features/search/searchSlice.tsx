import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    sValue: string
}

const initialState: InitialState = {
    sValue: ''
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.sValue = action.payload
        }
    }
})

export const { setSearchTerm } = searchSlice.actions
export default searchSlice.reducer