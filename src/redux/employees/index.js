import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@example.com",
  age: 33,
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      // spread operator adding more data to the end of the array
      reducer(draftState, action) {
        draftState.employees_records = [...draftState.employees_records, action.payload];
        // const emp = [...draftState.employees_records];
      },
    },
  },
});

export const { saveNewEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
