import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    isValidPokemon: true,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.isValidPokemon = true 
    },
    setInvalidPokemon: (state) => {
      state.isValidPokemon = false
    },
  },
});

export const { setSearchTerm, setInvalidPokemon } = searchSlice.actions

export const selectSearchTerm = (state) => state.search.searchTerm
export const selectIsValidPokemon = (state) => state.search.isValidPokemon

export default searchSlice.reducer
