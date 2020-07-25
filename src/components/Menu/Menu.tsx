import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  timeSharp,
  lockClosedSharp,
  bookSharp,
  cardSharp,
  informationCircleSharp,
  settingsSharp,
  logOutSharp,
  listCircleSharp,
} from "ionicons/icons";

import { menuController } from "@ionic/core";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Open Bets",
    url: "/menu",
    iosIcon: listCircleSharp,
    mdIcon: listCircleSharp,
  },
  {
    title: "Betting P&L",
    url: "/menu/betting",
    iosIcon: cardSharp,
    mdIcon: cardSharp,
  },
  {
    title: "Transfer Statement",
    url: "/menu/transfer",
    iosIcon: bookSharp,
    mdIcon: bookSharp,
  },
  {
    title: "Time Setting",
    url: "/menu/time",
    iosIcon: timeSharp,
    mdIcon: timeSharp,
  },
  {
    title: "Change Password",
    url: "/menu/password",
    iosIcon: lockClosedSharp,
    mdIcon: lockClosedSharp,
  },
];

const labels = [
  {
    title: "Available Credit:",
    value: "700.00",
  },
  {
    title: "Credit Limit:",
    value: "90,000.00",
  },
  {
    title: "Winnings:",
    value: "500.00",
  },
  {
    title: "Net Exposure:",
    value: "50.00",
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  menuController.close();

  return (
    <IonMenu contentId="main" type="overlay" id="myMenu">

      <IonContent>
        <IonList id="labels-list">
          <IonListHeader className="menu-header">Stock Crickz</IonListHeader>
          {/* <IonNote>Bet your fav team</IonNote> */}
          <IonListHeader>
            <IonIcon
              slot="start"
              ios={informationCircleSharp}
              md={informationCircleSharp}
            />
            <IonLabel>Balance Information</IonLabel>
          </IonListHeader>
          {labels.map((val, index) => (
            <IonItem lines="none" key={index}>
              <IonLabel>{val.title}</IonLabel>
              <IonLabel>{val.value}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem
              className="settings"
              routerLink="/menu/settings"
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" ios={settingsSharp} md={settingsSharp} />
              <IonLabel>Settings</IonLabel>
            </IonItem>
            <IonItem
              className="settings"
              routerLink="/login"
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" ios={logOutSharp} md={logOutSharp} />
              <IonLabel>Signout</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
