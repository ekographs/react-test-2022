import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};
export const delEmployee = employeeId => dispatch => {
  dispatch(actions.delEmployee(employeeId));
};
export const editEmployee = employee => dispatch => {
  dispatch(actions.editEmployee(employee));
};
