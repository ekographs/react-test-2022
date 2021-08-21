import { createSlice } from "@reduxjs/toolkit";

// const defaultEmployee = {
//   id: new Date().getTime(),
//   firstName: "Abe",
//   surname: "Simpson",
//   email: "abe.simpson@example.com",
//   age: 33,
//   jobTitle: "Work grouch",
//   status: "ACTIVE",
// };

const initialState = {
  employees_records: [],
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
    editEmployee: {
      prepare: employee => ({
        payload: { ...employee },
      }),
      // spread operator adding more data to the end of the array
      reducer(draftState, action) {
        const i = draftState.employees_records.findIndex(e => e.id === action.payload.id);
        const empsrec = [...draftState.employees_records];
        empsrec.splice(i, 1, action.payload); // replacing the old employee record with the new one
        // delEmployee[i] = emp; // replace list item with newly updated emp
        draftState.employees_records = empsrec;
      },
    },
    delEmployee: {
      prepare: employeeId => ({
        payload: employeeId,
      }),
      // spread operator adding more data to the end of the array
      reducer(draftState, action) {
        const i = draftState.employees_records.findIndex(e => e.id === action.payload);
        const empsrec = [...draftState.employees_records];
        empsrec.splice(i, 1); // removing one item from thr array
        // delEmployee[i] = emp; // replace list item with newly updated emp
        draftState.employees_records = empsrec;
      },
    },
  },
});

export const { saveNewEmployee, delEmployee, editEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
