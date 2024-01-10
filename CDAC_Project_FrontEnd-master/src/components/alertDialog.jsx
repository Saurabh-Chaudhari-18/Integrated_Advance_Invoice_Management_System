import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from "react";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmition(params) {
    handleClose();
    props.submitHandler();
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirmation box.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your sure you want to submit.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >No</Button>
          <Button onClick={handleSubmition} autoFocus>
            Yes Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}