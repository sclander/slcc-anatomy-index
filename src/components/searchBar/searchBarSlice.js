import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    value: '',
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    clear: state => {
      state.value = '';
    },
  },
});

export const { update, clear } = searchBarSlice.actions;

export const selectSearchBarQuery = state => state.searchBar.value;

export default searchBarSlice.reducer;