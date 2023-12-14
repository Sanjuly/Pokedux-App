import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchTerm: '',
    isValidPokemon: true,
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
            state.isValidPokemon = true
        },
        setInvalidPokemon: (state) => {
            state.isValidPokemon = false;
        }
}})
// Action creators are generated for each case reducer function
export const { setSearchTerm, setInvalidPokemon } = searchSlice.actions
export const selectSearchTerm = (state) => state.search.searchTerm
export const selectIsValidPokemon = (state) => state.search.isValidPokemon
export default searchSlice.reducer