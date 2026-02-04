import React, { useState, useRef, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-[#043873] text-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center">
          <div
            className="logo d-flex align-items-center justify-content-center"
            //  onClick={() => navigate(`/home`)}
          >
            {/* <img src={require(`../assets/images/order-icon.png`)} alt="Logo" className="logo-title w-80 px-2"/>  */}
            <img
              src={require(`../assets/images/white-space-logo.png`)}
              alt="Logo"
              className="logo-title"
            />
          </div>
        </a>

        <div className="ms-auto">
          <div className="flex flex-row gap-5">
            <ul className="navbar-nav flex-row gap-3">
              <li className="nav-item nav-link-nonactive">
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  variant="text"
                  className="menu-button"
                >
                  Products&nbsp;
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  slotProps={{
                    list: {
                      "aria-labelledby": "fade-button",
                    },
                  }}
                  slots={{ transition: Fade }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                   <MenuItem onClick={handleClose}>menu 1</MenuItem>
                  <MenuItem onClick={handleClose}>menu 2</MenuItem>
                  <MenuItem onClick={handleClose}>menu 3</MenuItem>
                </Menu>
              </li>
              <li className="nav-item nav-link-nonactive">
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  variant="text"
                  className="menu-button"
                >
                  Solutions&nbsp;
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  slotProps={{
                    list: {
                      "aria-labelledby": "fade-button",
                    },
                  }}
                  slots={{ transition: Fade }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>menu 1</MenuItem>
                  <MenuItem onClick={handleClose}>menu 2</MenuItem>
                  <MenuItem onClick={handleClose}>menu 3</MenuItem>
                </Menu>
              </li>
              <li className="nav-item nav-link-nonactive">
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  variant="text"
                  className="menu-button"
                >
                  Resources&nbsp;
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  slotProps={{
                    list: {
                      "aria-labelledby": "fade-button",
                    },
                  }}
                  slots={{ transition: Fade }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>menu 1</MenuItem>
                  <MenuItem onClick={handleClose}>menu 2</MenuItem>
                  <MenuItem onClick={handleClose}>menu 3</MenuItem>
                </Menu>
              </li>
              <li className="nav-item nav-link-nonactive">
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  variant="text"
                  className="menu-button"
                >
                  Pricing&nbsp;
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  slotProps={{
                    list: {
                      "aria-labelledby": "fade-button",
                    },
                  }}
                  slots={{ transition: Fade }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>menu 1</MenuItem>
                  <MenuItem onClick={handleClose}>menu 2</MenuItem>
                  <MenuItem onClick={handleClose}>menu 3</MenuItem>
                </Menu>
              </li>
            </ul>

            <div className="flex flex-row gap-3">
              <button className="bg-[#FFE492]  w-full rounded rounded-sm text-[18px]">Login</button>
              <button className="bg-[#4F9CF9]  w-full rounded rounded-sm text-white text-nowrap text-lg">Try Whitepace free&nbsp;<ArrowForwardIcon sx={{ fontSize: 18 }}/></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
