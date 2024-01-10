import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import "../assets/styles/Dialog/dialog.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import actionIndex from '../features/actionIndex'



export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  
  return (
    <div
      className="dialog_container"
      style={{
        display: "flex",
        justifyContent:
          props.title == "Add product" || props.title == "Add Client"
            ? "flex-start"
            : "flex-end",
        gap: "20px",
      }}
    >
      <Button variant="outlined" onClick={handleClickOpen}>
        {props?.icon} {props.title}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
        <DialogContent >{props.component}</DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color={props.title == "Find And Select" ? "primary" : "success"}
          >
            close
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
