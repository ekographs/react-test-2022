import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import employeeSlice from "../../redux/employees";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { delEmployee } from "../../redux/employees/actionCreators";
import { Flex, Header } from "../styled";
import "./employeestyle.css";
// import { flex } from "../styled/utils";

// import data from "./employees-data.json";
// spreading the employee state
const View = () => {
  const employees = useSelector(state => state.employees.employees_records);
  // setEmployees
  const history = useHistory();
  const dispatch = useDispatch();

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 20,
    },
    body: {
      fontSize: 24,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const useButtonStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  return (
    <>
      <Header data-cy="header">View Employees</Header>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">firstName</StyledTableCell>
              <StyledTableCell align="center">surname</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">age</StyledTableCell>
              <StyledTableCell align="center">jobTitle</StyledTableCell>
              <StyledTableCell align="center">status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(employee => (
              <StyledTableRow key={employee.id}>
                <StyledTableCell component="th" scope="row">
                  {employee.firstName}
                </StyledTableCell>
                <StyledTableCell align="center">{employee.surname}</StyledTableCell>
                <StyledTableCell align="center">{employee.email}</StyledTableCell>
                <StyledTableCell align="center">{employee.age}</StyledTableCell>
                <StyledTableCell align="center">{employee.jobTitle}</StyledTableCell>
                <StyledTableCell align="center">{employee.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <div className={buttonStyles.root}>
                    <ButtonGroup variant="contained" aria-label="contained primary button group">
                      <Link to={`/edit/${employee.id}`}>
                        <Button color="primary">Edit</Button>
                      </Link>
                      <Button
                        style={{ marginLeft: "5px" }}
                        color="secondary"
                        onClick={() => dispatch(delEmployee(employee.id))}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Button
          variant="contained"
          data-cy="backButton"
          onClick={() => history.goBack()}
          color="primary"
        >
          Back
        </Button>
      </Flex>
    </>
  );
};

export default View;
