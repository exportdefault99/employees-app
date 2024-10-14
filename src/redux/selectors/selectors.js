import { createSelector } from '@reduxjs/toolkit';
import { selectAllEmployees, selectTotalEmployees } from '../slices/employeesSlice';
import { selectActiveFilter, selectSearchTerm } from '../slices/filtersSlice';
import {
  countBonusEmployees,
  filteredEmployeesBySearch,
  filteredEmployeesByActiveFilter,
  filteredEmployeesByAll
} from "../../utils/filterEmployees";

const selectTotalBonusEmployees = createSelector(
  selectAllEmployees,
  countBonusEmployees
);

const selectFilteredEmployeesBySearch = createSelector(
  selectAllEmployees,
  selectSearchTerm,
  filteredEmployeesBySearch
);

const selectFilteredEmployeesByActiveFilter = createSelector(
  selectAllEmployees,
  selectActiveFilter,
  filteredEmployeesByActiveFilter
);

const selectFilteredEmployees = createSelector(
  selectFilteredEmployeesBySearch,
  selectFilteredEmployeesByActiveFilter,
  filteredEmployeesByAll
);

export { 
  selectFilteredEmployees, 
  selectTotalEmployees, 
  selectTotalBonusEmployees, 
  selectActiveFilter, 
  selectSearchTerm 
};