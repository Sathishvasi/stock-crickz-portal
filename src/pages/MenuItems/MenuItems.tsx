import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Betting from '../Betting/Betting';

import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

const MenuItems: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      {/* <Route path="/betting" component={Betting}/>
      <Route path="/" render={() => <Redirect to="/menu" />} exact={true} /> */}
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule" href="/menu">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers" href="/menu/betting">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map" href="/menu/betting">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about" href="/menu/betting">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default MenuItems;
