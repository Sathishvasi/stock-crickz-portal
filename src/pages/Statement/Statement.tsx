import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
  import { menuController } from "@ionic/core";
  import Navbar from "../../components/Navbar/Navbar";
  
  const Statement: React.FC = () => {
    menuController.enable(true);
    return (
      <IonPage>
        <IonHeader>
          <Navbar />
        </IonHeader>
  
        <IonContent className="bg">
          <h2>Transfer Statement</h2>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Statement;
  