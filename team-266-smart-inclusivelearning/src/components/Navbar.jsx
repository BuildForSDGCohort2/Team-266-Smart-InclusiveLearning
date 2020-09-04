import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../Nav.css";
import logo from "../SIL-logo.png";
import Register from "../components/Register";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "right",
  },
  btn: {
    backgroundColor: "lightgray",
    float: "right",
    marginTop: "10px",
  },
  btn_nav_signup: {
    position: "fixed",
    display: "flex",
    top: "10px",
    right: "20px",
  },
  btn_nav_signin: {
    position: "fixed",
    display: "flex",
    top: "10px",
    right: "120px",
  },
  paper: {
    position: "absolute",
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openSignin, setOpenSignin] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenSignin = () => {
    setOpenSignin(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSigninClose = () => {
    setOpenSignin(false);
  };

  return (
    <div className='nav'>
      <div className='nav__logo' />
      <Button
        variant='outlined'
        color='primary'
        onClick={handleOpenSignin}
        className={classes.btn_nav_signin}
      >
        Sign In
      </Button>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleOpen}
        className={classes.btn_nav_signup}
      >
        Sign Up
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='register-modal-title'
      >
        <div style={modalStyle} className={classes.paper}>
          <div>
            <img src={logo} alt='sil' />
            <h5 className={classes.title} id='register-modal-title'>
              Student Registration
            </h5>
          </div>

          <TextField
            autofocus
            margin='dense'
            id='username'
            type='username'
            label='Usename'
            fullWidth
          />
          <TextField
            margin='dense'
            id='email'
            type='email'
            label='Email Address'
            fullWidth
          />
          <TextField
            margin='dense'
            id='password'
            type='password'
            label='Password'
            fullWidth
          />

          <div className={classes.btn}>
            <Button onClick={handleClose} color='primary'>
              Sign up
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={openSignin}
        onClose={handleSigninClose}
        aria-labelledby='login-modal-title'
      >
        <div style={modalStyle} className={classes.paper}>
          <div>
            <img src={logo} alt='sil' />
            <h5 className={classes.title} id='login-modal-title'>
              Sign In
            </h5>
          </div>
          <TextField
            margin='dense'
            id='email'
            type='email'
            label='Email Address'
            fullWidth
          />
          <TextField
            margin='dense'
            id='password'
            type='password'
            label='Password'
            fullWidth
          />
          <br />
          <div className={classes.btn}>
            <Button onClick={handleSigninClose} color='primary'>
              Sign in
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
