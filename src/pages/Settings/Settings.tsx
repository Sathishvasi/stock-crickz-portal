import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonToggle,
  IonItem,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
// import { information } from 'ionicons/icons';
import { informationCircle } from "ionicons/icons";
import { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";

const Settings: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [actedit1, setedit1] = useState(true);
  const [button1, setbutton1] = useState<string>("Edit");

  const [actstake1, setNumber1] = useState<number>(1000);
  const [actstake2, setNumber2] = useState<number>(20000);
  const [actstake3, setNumber3] = useState<number>(25000);
  const [actedit2, setedit2] = useState(true);
  const [button2, setbutton2] = useState<string>("Edit");
  const [editstake1, setEditstake1] = useState<number>(500);
  const [editstake2, setEditstake2] = useState<number>(1000);
  const [editstake3, setEditstake3] = useState<number>(1500);

  const [actedit3, setedit3] = useState(true);
  const [button3, setbutton3] = useState<string>("Edit");
  const [editcasinostake1, setEditCasinostake1] = useState<number>(1000);
  const [editcasinostake2, setEditCasinostake2] = useState<number>(2000);
  const [editcasinostake3, setEditCasinostake3] = useState<number>(3000);

  const [info_content, setinfo] = useState(true);
  var isActiveOne = actedit1;
  var inputOne = isActiveOne ? "inactive" : "active";

  var isActiveTwo = actedit2;
  var inputTwo = isActiveTwo ? "inactive" : "active";

  var isActiveThree = actedit3;
  var inputThree = isActiveThree ? "inactive" : "active";

  const buttonClick1 = () => {
    if (button1 == "Edit") {
      let act1 = actstake1 + "Active Stake";
      setNumber1(actstake1);
      setNumber2(actstake2);
      setNumber3(actstake3);
      setbutton1("Save");
      setedit1(false);
    } else {
      setNumber1(actstake1);
      setNumber2(actstake2);
      setNumber3(actstake3);
      setbutton1("Edit");
      setedit1(true);
    }
  };

  const buttonClick2 = () => {
    if (button2 == "Edit") {
      setEditstake1(editstake1);
      setEditstake2(editstake2);
      setEditstake3(editstake3);
      setbutton2("Save");
      setedit2(false);
    } else {
      setEditstake1(editstake1);
      setEditstake2(editstake2);
      setEditstake3(editstake3);
      setbutton2("Edit");
      setedit2(true);
    }
  };

  const buttonClick3 = () => {
    if (button3 == "Edit") {
      setEditCasinostake1(editcasinostake1);
      setEditCasinostake2(editcasinostake2);
      setEditCasinostake3(editcasinostake3);
      setbutton3("Save");
      setedit3(false);
    } else {
      //act1 = actstake1.current?.value;
      //actstake1 = act1;
      //console.log(editstake1);
      setEditCasinostake1(editcasinostake1);
      setEditCasinostake2(editcasinostake2);
      setEditCasinostake3(editcasinostake3);
      setbutton3("Edit");
      setedit3(true);
    }
  };
  const info = () => {
    //console.log(info_content);
    if (info_content == false) {
      setinfo(true);
    } else {
      setinfo(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent className="settings">
        <Container>
          <h4 className="page-header">Settings</h4>

          <IonList className="settings-content">
            <IonItem lines="none">
              <IonLabel class="content">One Click Settings</IonLabel>
              <IonButtons>
                <IonIcon icon={informationCircle} onClick={info} />
              </IonButtons>
            </IonItem>
            <div>
              <IonCard class="card_class" hidden={info_content}>
                <IonCardContent>
                  <li>Using 1 click Bet is easy.</li>
                  <ul>
                    <li>Enable 1 Click Betting.</li>
                    <li>Edit your 1 Click stake values below.</li>
                    <li>Choose your active stake.</li>
                    <li>
                      When 1 Click Betting is activated, choose different stakes
                      by clicking on the red bar.
                    </li>
                    <li>
                      When done with 1 Click Betting, turn off by tapping the
                      toggle to off.
                    </li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </div>
            <IonItem lines="none">
              <IonLabel className="sub-content">
                Tab to turn on one click betting
              </IonLabel>

              <IonToggle
                checked={checked}
                onIonChange={(e) => setChecked(e.detail.checked)}
              />
            </IonItem>
            <IonItem lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size="4">
                    <IonInput
                      className={inputOne}
                      readonly={actedit1}
                      value={actstake1}
                      type="number"
                      onIonInput={(e: any) => setNumber1(e.target.value)}
                    ></IonInput>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      className={inputOne}
                      readonly={actedit1}
                      value={actstake2}
                      type="number"
                      onIonInput={(e: any) => setNumber2(e.target.value)}
                    ></IonInput>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      className={inputOne}
                      readonly={actedit1}
                      value={actstake3}
                      type="number"
                      onIonInput={(e: any) => setNumber3(e.target.value)}
                    ></IonInput>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem lines="none" disabled={!checked}>
              <IonButton slot="end" class="edit_button" onClick={buttonClick1}>
                {button1}
              </IonButton>
            </IonItem>
            <IonItem lines="none">
              <IonLabel class="content">Edit Stakes</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size="4">
                    <IonInput
                      className={inputTwo}
                      readonly={actedit2}
                      value={editstake1}
                      type="number"
                      onIonInput={(e: any) => setEditstake1(e.target.value)}
                    ></IonInput>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      className={inputTwo}
                      readonly={actedit2}
                      value={editstake2}
                      type="number"
                      onIonInput={(e: any) => setEditstake2(e.target.value)}
                    ></IonInput>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      className={inputTwo}
                      readonly={actedit2}
                      value={editstake3}
                      type="number"
                      onIonInput={(e: any) => setEditstake3(e.target.value)}
                    ></IonInput>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem lines="none">
              <IonButton class="edit_button" slot="end" onClick={buttonClick2}>
                {button2}
              </IonButton>
            </IonItem>

            <IonItem lines="none">
              <IonLabel class="content">Edit Casino Stakes</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol size="4">
                    <IonInput
                      className={inputThree}
                      readonly={actedit3}
                      value={editcasinostake1}
                      type="number"
                      onIonInput={(e: any) =>
                        setEditCasinostake1(e.target.value)
                      }
                    ></IonInput>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      className={inputThree}
                      readonly={actedit3}
                      value={editcasinostake2}
                      type="number"
                      onIonInput={(e: any) =>
                        setEditCasinostake2(e.target.value)
                      }
                    ></IonInput>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      className={inputThree}
                      readonly={actedit3}
                      value={editcasinostake3}
                      type="number"
                      onIonInput={(e: any) =>
                        setEditCasinostake3(e.target.value)
                      }
                    ></IonInput>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem lines="none">
              <IonButton slot="end" class="edit_button" onClick={buttonClick3}>
                {button3}
              </IonButton>
            </IonItem>
          </IonList>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Settings;