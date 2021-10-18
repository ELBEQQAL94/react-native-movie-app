import {configureStore} from '@reduxjs/toolkit';

// Reducers
import selectCategoryReducer from './reducer/selectCategoryReducer';

export default configureStore({
  reducer: {
    selectCategoryState: selectCategoryReducer,
  },
});
