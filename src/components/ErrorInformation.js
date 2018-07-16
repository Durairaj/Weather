import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  root: {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
    backgroundColor: "#f55a4e",
    color: "#ffffff",
  },
});

const ErrorInformation = ({error, classes}) => {
  return <SnackbarContent
    className={classes.root}
    message={error.toString()}
  />
};

ErrorInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorInformation);
