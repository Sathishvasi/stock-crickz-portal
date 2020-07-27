import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";  
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import verticalLogo from "../../assets/logo-name.png";
import { personSharp, menuSharp } from "ionicons/icons";
import { connect } from "react-redux";
import state from "../../store";

import "../../styles/appStyles.scss";


function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return dispatch({ type: "", value: "" });
}

const useStyles = makeStyles((theme) => ({
  navRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  const balance = state.getState().availableBalance;

  return (
    <IonHeader>
    <div className={classes.navRoot}>
      <AppBar position="static">
        <Toolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <div className="logo-name">
            <h3>Stock Crickz</h3>
          </div>
          <div className="balance" color="inherit">
            <IonIcon slot="start" ios={personSharp} md={personSharp} />
            <p>{balance}</p>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </IonHeader>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
