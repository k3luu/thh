import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  bootstrapFormLabel: {
    fontSize: 18
  }
});

const MyTextField = props => <TextField style={{ height: '100%' }} {...props} />;

export default withStyles(styles)(MyTextField);
