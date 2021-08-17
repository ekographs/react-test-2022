import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  age: yup
    .number()
    .min(18)
    .label("Age")
    .required("Required Kindly enter your Age"),
  status: yup.string().required("Status is Required"),
  jobTitle: yup.string().required("Required"),
});

export default formValidationSchema;
