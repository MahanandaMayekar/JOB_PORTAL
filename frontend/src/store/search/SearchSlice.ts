import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchInitialState } from '../../types/searchBar/searchBarTypes';

const SearchSlice = createSlice({
    name: "search",
    initialState: SearchInitialState,
    reducers: {
        setSearchQuery: (state,action:PayloadAction<string>) => {
           state.query=action.payload 
        }
    }
})
export const { setSearchQuery } = SearchSlice.actions;
export default SearchSlice.reducer;