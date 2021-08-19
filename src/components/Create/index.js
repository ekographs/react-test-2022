import React, { useCallback } from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";
import "./status.css";

const Create = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      // console.log({ employee });
      dispatch(saveNewEmployee(employee));
      // localStorage.setItem("eko", JSON.stringify(employee));
    },
    [dispatch]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          id: new Date().getTime(),
          firstName: "hgcg",
          surname: "kkhb",
          email: "nk@gmail.com",
          age: "22",
          jobTitle: "vet",
          status: "Active",
        }}
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
