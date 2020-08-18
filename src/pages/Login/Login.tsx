import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRedirect,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../../assets/logo.png";
import { colorFill } from "ionicons/icons";
import { useEffect, useState, useRef } from "react";
import { menuController } from "@ionic/core";

import { connect } from "react-redux";
import state from "../../store";
import axios from "axios";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="http://criczz.us-east-2.elasticbeanstalk.com/"
      >
        Stock Crickz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  notchedOutline: {
    borderColor: "#a5a5a5",
  },
  colorFill: {
    color: "white",
    borderColor: "#a5a5a5",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return dispatch({ type: "", value: "" });
}

const API_ROOT = state.getState().apiBase;

const Login: React.FC = () => {
  let activeTestUrl = state.getState().demo;
  console.log(activeTestUrl);

  const history = useHistory();
  const classes = useStyles();

  let top = "top";
  let center = "center";

  const formValid = (formErrors: Object) => {
    let valid = true;
    Object.values(formErrors).forEach((val) => {
      return val.length === 0 && (valid = false);
    });
    return valid;
  };

  const un = useRef<HTMLIonInputElement>(null);
  const pwd = useRef<HTMLIonInputElement>(null);
  let errorUn, errorPwd, uname, upwd;

  errorUn = useRef(null) ? false : true;
  errorPwd = useRef(null) ? false : true;

  const [showunerr, func1] = useState(false);
  const [showpwderr, func2] = useState(false);

  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');


    // Live Matches API call
  const checkLogin = (un: any, pwd: any) => {
    return axios({
      url: API_ROOT + "/login",
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: {
        userName:un,
        password:pwd
      }
    }).then((response) => {
      return response;
    }).catch((err)=>{
      return err;
    });
  };


  const checkValidation = () => {
    state.dispatch({ type: "SET_VAL", value: "kumar" });

    let activeTestUrl2 = state.getState().demo;
    console.log(activeTestUrl2);

    uname = un.current?.value;
    upwd = pwd.current?.value;
    errorUn =
      typeof uname === "string" ? (uname.length === 0 ? false : true) : "";
    errorPwd =
      typeof upwd === "string" ? (upwd.length === 0 ? false : true) : "";

    if (errorUn && errorPwd) {
      checkLogin(uname, upwd).then((res: any) => {
        console.log(res);
        if(res.data){
          const status = res.data.desc;
          if(status === 'SUCCESS'){
            localStorage.setItem('userToken', res.data.data);
            history.push("/menu");
          }else{
            setOpen(true);
            setSnackbarMsg(status);
            setTimeout(() => {
              setOpen(false);
            }, 2000);
          }
        }else{
          setOpen(true);
          setSnackbarMsg("Server Error");
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }
      })
    }else {
      func1(!errorUn);
      func2(!errorPwd);
    }
    // if (errorUn && errorPwd) {
    //   if (uname === "sathish" && upwd === "123") {
    //     history.push("/menu");
    //     // window.location.reload();
    //   } else {
    //     func1(typeof errorUn === "boolean" && errorUn);
    //     func2(typeof errorPwd === "boolean" && errorPwd);
    //     setOpen(true);
    //     setTimeout(() => {
    //       setOpen(false);
    //     }, 2000);
    //   }
    // } else {
    //   func1(!errorUn);
    //   func2(!errorPwd);
    // }
  };

  const check = (val: any) => {
    if (val.value.length > 0) {
      if (val.name === "username") {
        func1(false);
      } else if (val.name === "password") {
        func2(false);
      }
    }
  };

  //Disabling Menu specifically in login page
  menuController.enable(false);

  return (
    <IonPage>
      <IonContent className="login">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}> */}
            <img className="login-logo" src={logo} alt="SC Logo" />

            {/* </Avatar> */}
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                error={showunerr}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                inputProps={{ style: { color: "white" }, ref: un }}
                onChange={(e: any) => check(e.target)}
                onKeyDown={(e:any) => (e.keyCode === 13 ? checkValidation() : '')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={showpwderr}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                inputProps={{ style: { color: "white" }, ref: pwd }}
                onChange={(e: any) => check(e.target)}
                onKeyDown={(e:any) => (e.keyCode === 13 ? checkValidation() : '')}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                size="large"
                onClick={checkValidation}
              >
                Log In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid> */}
            </form>
          </div>
          <Box className="copyright">
            <Copyright />
          </Box>

          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={open}
            message={snackbarMsg}
          ></Snackbar>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
