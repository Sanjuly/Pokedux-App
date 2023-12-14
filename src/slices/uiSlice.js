import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
}})
// Action creators are generated for each case reducer function
export const { setLoading } = uiSlice.actions
export default uiSlice.reducer