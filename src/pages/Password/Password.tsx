import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  IonAlert
} from "@ionic/react";
  import React from "react";
  import { menuController } from "@ionic/core";
  import Navbar from "../../components/Navbar/Navbar";
  import { makeStyles } from "@material-ui/core/styles";
  import { useEffect, useState, useRef } from "react";
  import Container from "@material-ui/core/Container";
  import TextField from "@material-ui/core/TextField";

  const useStyles = makeStyles((theme) => ({
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    input: {
          color: 'black',
          borderColor: 'black',
          borderStyle: 'solid',
          // borderWidth: '2px'
      },
    }));
  
  const Password: React.FC = () => {
  menuController.enable(true);
  const classes = useStyles();

  const oldpass = useRef<HTMLIonInputElement>(null);
  const newpass = useRef<HTMLIonInputElement>(null);
  const repeatpass = useRef<HTMLIonInputElement>(null);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
 
  let passwordold, passwordnew, passwordrepeat;

  const savepassword = () => {
    passwordold = oldpass.current?.value;
    passwordnew = newpass.current?.value;
    passwordrepeat = repeatpass.current?.value;

    if(passwordold == passwordnew){
      setShowAlert1(true);
      console.log("please enter the new password");
    }
    if(passwordnew != passwordrepeat){
      setShowAlert2(true);
      console.log("Repeat the new password");
    }
  }
    return (
      <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent className="changepassword">
        <Container>
          <h4 className="page-header">Change Password</h4>
            <form className={classes.form}>
              <IonItem lines = 'none' class = "item_background">
                <TextField
                  label="Old Password"
                  name="oldpassword"
                  required
                  fullWidth
                  type = "password"
                  // error={showunerr}
                  // InputProps={{
                  //   className: classes.input,
                  // }}
                  inputProps = {{ className: classes.input, ref: oldpass }}
                />
              </IonItem>

              <IonItem lines = 'none' class = "item_background">
                <TextField 
                    label="New Password"
                    name="newpassword"
                    required
                    fullWidth
                    type = "password"
                     // InputProps={{
                     //   style: { background: "white",color: "black", border: "solid 2px" }
                     //  }}
                    // inputProps={inputProps}
                    inputProps={{ className: classes.input, ref: newpass }}
                  />
                </IonItem>

                <IonItem lines = 'none' class = "item_background">
                  <TextField 
                    label="Repeat New Password"
                    name="repearnewpass"
                    required
                    fullWidth
                    type = "password"
                     // InputProps={{
                     //   style: { background: "white",color: "black", border: "solid 2px" }
                     //  }}
                    // inputProps={inputProps}
                    inputProps={{ className: classes.input, ref: repeatpass }}
                  />
                </IonItem>

                <IonItem lines = 'none' class = "item_background">
                  <IonButton class = "savebutton" slot = 'end' onClick = {savepassword}>
                    Save
                  </IonButton>
                </IonItem>
                <IonAlert
                  isOpen={showAlert1}
                  onDidDismiss={() => setShowAlert1(false)}
                  cssClass='my-custom-class'
                  // header={'Alert'}
                  // subHeader={'Subtitle'}
                  message={'Please Enter the New Password!'}
                  buttons={['OK']}
                />
                <IonAlert
                  isOpen={showAlert2}
                  onDidDismiss={() => setShowAlert2(false)}
                  cssClass='my-custom-class'
                  // header={'Alert'}
                  // subHeader={'Subtitle'}
                  message={'Please Repeat New Password!'}
                  buttons={['OK']}
                />
             </form>
        </Container>
      </IonContent>
    </IonPage>
    );
  };
  
  export default Password;
  