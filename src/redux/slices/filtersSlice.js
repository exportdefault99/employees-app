import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilter: 'all',
  searchTerm: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      const { filterType, value } = action.payload;
      state[filterType] = value;
    }
  },
  selectors: {
    selectActiveFilter: (state) => state.activeFilter,
    selectSearchTerm: (state) => state.searchTerm
  }
});

export const { selectActiveFilter, selectSearchTerm } = filtersSlice.selectors;

export const { changeFilters } = filtersSlice.actions;

export default filtersSlice.reducer;