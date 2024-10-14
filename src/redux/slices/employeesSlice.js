import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";

const employeesAdapter = createEntityAdapter();

const initialState = employeesAdapter.getInitialState();

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: {
      reducer: employeesAdapter.addOne,
      prepare: ({ name, salary }) => ({
        payload: {
          id: nanoid(),
          name,
          salary,
          rise: false,
          bonus: false
        }
      })
    },
    removeEmployee: employeesAdapter.removeOne,
    toggleEmployeeProp: (state, action) => {
      const { id, prop } = action.payload;
      employeesAdapter.updateOne(state, {
        id,
        changes: {
          [prop]: !state.entities[id][prop]
        }
      });
    }
  }
});

export const {
  selectAll: selectAllEmployees,
  selectTotal: selectTotalEmployees
} = employeesAdapter.getSelectors(state => state.employees);

export const { addEmployee, removeEmployee, toggleEmployeeProp } = employeesSlice.actions;

export default employeesSlice.reducer;