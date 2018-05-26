import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {},
  input: {}
});

const MyTextField = props => (
  <TextField
    InputLabelProps={{
      style: { fontSize: 18 }
    }}
    InputProps={{
      style: { fontSize: 18 }
    }}
    {...props}
  />
);

export default withStyles(styles)(MyTextField);
