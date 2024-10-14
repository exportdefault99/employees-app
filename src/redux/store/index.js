import { configureStore } from "@reduxjs/toolkit";

import { employeesReducer, filtersReducer } from '../reducers';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    filters: filtersReducer
  }
});