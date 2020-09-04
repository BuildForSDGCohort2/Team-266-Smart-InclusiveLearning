import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Nav.css';
import logo from '../SIL-logo.png';

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
    text: {
        textAlign: 'right'
    },
    btn: {
        backgroundColor: 'lightgray',
        float: 'right'
    },
    paper: {
        position: 'absolute',
        width: 550,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
}));

function SignIn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="nav">
            <div className="nav__logo" />
            <Modal open={open} onClose={handleClose} aria-labelledby="login-modal-title">
                <div style={modalStyle} className={classes.paper}>
                    <div >
                        <img src={logo} alt="sil" />
                        <h5 className={classes.text} id="login-modal-title">Login</h5>
                    </div>
                    <TextField
                        margin="dense"
                        id="email"
                        type="email"
                        label="Email Address"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        type="password"
                        label="Password"
                        fullWidth
                    />
                    <br />
                    <div className={classes.btn}>
                        <Button onClick={handleClose} color="primary">Sign in</Button>
                    </div>
                   
                </div>
            </Modal>
            
        </div>
    )
}

export default SignIn
