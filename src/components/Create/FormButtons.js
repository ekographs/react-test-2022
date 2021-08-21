import React from "react";
import { useHistory } from "react-router";
// import { useFormikContext } from "formik";
import { Box, Button, Flex } from "../styled";

const FormButtons = () => {
  // const { submitForm, values } = useFormikContext();
  const history = useHistory();

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button
          data-cy="backButton"
          onClick={e => {
            e.preventDefault();
            history.goBack();
          }}
        >
          Back
        </Button>
      </Box>
      <Box>
        <Button
          data-cy="saveButton"
          // onClick={() => {
          //   console.log({ values });
          //   submitForm();
          // }}
          type="submit"
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;
