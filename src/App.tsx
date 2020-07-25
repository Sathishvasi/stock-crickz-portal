import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonSplitPane
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login/Login";

import Betting from "./pages/Betting/Betting";
import BettingPL from "./pages/BettingPL/BettingPL";

import Menu from "./components/Menu/Menu";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./styles/appStyles.scss";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/menu" component={Betting} exact />
          <Route path="/menu/betting" component={BettingPL} exact />
          <Route path="/login" component={Login} exact={true} />
          {/* <Route path="/menu" component={MenuItems} exact={true} /> */}
          <Route path="/" render={() => <Redirect to="/login" />}exact={true}/>
          {/* <Redirect from="/" to="/menu/page1" exact /> */}
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
