import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
// import employeeSlice from "../../redux/employees";
import { Box, Button, Flex, Header } from "../styled";
import "./employeestyle.css";
// import data from "./employees-data.json";

const View = () => {
  // const [employees] = useState(data);
  // eslint-disable-next-line camelcase
  const employees = useSelector(state => state.employees.employees_records);
  // setEmployees
  const history = useHistory();
  // eslint-disable-next-line camelcase
  // if (!employees_records) {
  //   return <p>Loading</p>;
  // }
  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <div className="employee-container">
        <table>
          <thead>
            <tr>
              <th>firstName</th>
              <th>surname</th>
              <th>email</th>
              <th>age</th>
              <th>jobTitle</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr>
                <td>{employee.firstName}</td>
                <td>{employee.surname}</td>
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
