import React from "react";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee, editEmployee } from "../../redux/employees/actionCreators";
import "./status.css";

const Create = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees_records);
  const employee = employees.find(e => e.id.toString() === id);
  const history = useHistory();

  const submitForm = emp => {
    if (employee) {
      dispatch(editEmployee(emp));
    } else {
      dispatch(saveNewEmployee(emp));
    }
    toast.success("Employee Saved!");
    history.goBack();
  };
  // [dispatch, employee]

  return (
    <>
      <Header>{employee ? "Edit Employee" : "Create New Employee"}</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={
          employee || {
            id: new Date().getTime(),
            firstName: "hgcg",
            surname: "kkhb",
            email: "nk@gmail.com",
            age: "22",
            jobTitle: "vet",
            status: "Active",
          }
        }
      >
        <Form>
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Flex alignItems="left" direction="column" width="300px">
              <FormField name="firstName" placeholder="First name" />
              <FormField name="surname" placeholder="Surname" />
              <FormField name="email" placeholder="Email" />
              <FormField name="age" placeholder="Age" />
              <FormField name="jobTitle" placeholder="Job Title" />
              <Field as="select" name="status" className="field-status">
                <option value="Active">Active</option>
                <option value="LEAVE_OF_ABSENCE">LEAVE_OF_ABSENCE</option>
                <option value="TERMINATED">TERMINATED</option>
              </Field>
              <FormButtons />
            </Flex>
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default Create;
