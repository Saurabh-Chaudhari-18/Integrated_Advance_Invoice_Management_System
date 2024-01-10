import Avatar from "@mui/material/Avatar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";
import "../assets/styles/Header/header.css";
import { useEffect, useState } from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionIndex from "../features/actionIndex";
function Header(params) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  function handleLogout(params) {
    dispatch(actionIndex.setToggleLoader(true));
    setTimeout(()=>{
      
      localStorage.removeItem('admin');
      dispatch(actionIndex.setToggleLoader(false));
      navigate('/login');

    },2000)
  }
  return (
    <>
      <div
        className="header_wrapper"
        style={{ backgroundColor: `${params?.color}` }}
      >
        <div className="header_title">{params.title}</div>
        <div className="header_notification_icon">
          <Badge badgeContent={4} color="primary">
            <NotificationsActiveIcon />
          </Badge>
        </div>
        <div className="header_profile_icon">
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            // sx={{ width: 56, height: 56 }}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Header;
