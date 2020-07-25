import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { menuController } from '@ionic/core';


const Betting: React.FC = () => {
  menuController.enable(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Open Bets</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h2>
          Open Bets Page
        </h2>  
      </IonContent>
    </IonPage>
  );
};

export default Betting;
