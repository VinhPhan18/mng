/* eslint-disable no-undef */
import React from 'react';
import classNames from "classnames/bind";
import logo from "../../../image/logo.png";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FiBell, FiSettings } from "react-icons/fi";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function Header() {
  const cx = classNames.bind(style);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={logo} alt="Logo" className={cx("logo-image")} />
      </div>
      <div className={cx("menu")}>
        <ul className={cx("menu-list")}>
          <li className={cx("menu-item")}>
            <Link to="/manage-transactions" className={cx("menu-link")}>
              Giao dịch
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/manage-employees" className={cx("menu-link")}>
              Nhân viên
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/manage-customers" className={cx("menu-link")}>
              Khách hàng
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/manage-orders" className={cx("menu-link")}>
              Đơn hàng
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/manage-contracts" className={cx("menu-link")}>
               Hợp đồng
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/manage-products" className={cx("menu-link")}>
              Hàng hóa
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/customer-support" className={cx("menu-link")}>
              Hỗ trợ 
            </Link>
          </li>
        </ul>
      </div>
      <div className={cx("notification-icon")}>
        <Link to="/notifications" className={cx("notification-link")}>
          <FiBell />
        </Link>
      </div>
      <Stack direction="row" spacing={2}>
        
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="primary"  
            size="large"    
            sx={{ fontSize: '15px',
            marginTop: '5px',
            color: 'white',
            marginLeft: '20px', 
             }} 
          >
            Tài khoản
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </div>
  );
}
