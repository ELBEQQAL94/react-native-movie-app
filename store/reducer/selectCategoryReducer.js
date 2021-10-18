import {createSlice} from '@reduxjs/toolkit';

// requests
import {request} from '../../api';

const initialState = {
  selectedCategory: request.fetchTrending,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory(state, {payload}) {
      return {
        selectedCategory: payload,
      };
    },
  },
});

export const {setSelectedCategory} = categorySlice.actions;

export default categorySlice.reducer;
