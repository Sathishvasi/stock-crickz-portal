import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

const BettingPL: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent>
        <h2>Betting P&L</h2>
      </IonContent>
    </IonPage>
  );
};

export default BettingPL;
