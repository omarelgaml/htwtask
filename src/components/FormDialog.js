import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: this.props.openDialog,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
   console.log(document.getElementById("in").value);
    this.setState({ open: false });
  };

  render() {
    return (
      <div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter you name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Congratulation! You are from the top ten
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter your name"
              id="in"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}