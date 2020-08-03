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
import React from "react";
import { menuController } from "@ionic/core";
import Navbar from "../../components/Navbar/Navbar";
import { playCircleSharp } from "ionicons/icons";
import Container from "@material-ui/core/Container";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { useEffect, useState, useRef } from "react";

// Redux
import { connect } from "react-redux";
import state from "../../store";
import "../../styles/appStyles.scss";


function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return dispatch({ type: "", value: "" });
}

const Matches: React.FC = () => {
  // menuController.enable(true);
  const [stateVal, setState] = useState({
    matchCount: 2,
  });

  const setMatchDetail = (val: string, teamA: string, teamB: string) => {
    // redux
    state.dispatch({ type: "SET_MATCHNAME", value: val });
    localStorage.setItem("matchHeader", val);
    localStorage.setItem("teamA", teamA);
    localStorage.setItem("teamB", teamB);
    console.log(val, teamA, teamB);

    // state.dispatch({ type: "SET_BACKBTN", value: "/menu" });
  };

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent>
        <Container>
          {/* Live Matches */}
          <div className="match-wrapper">
            <div className="header live">
              <IonIcon
                slot="start"
                ios={playCircleSharp}
                md={playCircleSharp}
                className="play-icon"
              />
              <label>Live Matches ({stateVal.matchCount})</label>
            </div>
            <div className="matches">
              <IonCard
                routerLink="/menu/details"
                onClick={() =>
                  setMatchDetail(
                    "India vs Australia (1st T20)",
                    "India",
                    "Australia"
                  )
                }
              >
                <IonCardContent>
                  <label className="matches-name">
                    India vs Australia (1st T20)
                  </label>
                  <IonIcon
                    slot="start"
                    ios={playCircleSharp}
                    md={playCircleSharp}
                    className="play-icon-small"
                  />
                </IonCardContent>
              </IonCard>
              <IonCard
                routerLink="/menu/details"
                onClick={() =>
                  setMatchDetail(
                    "Pakistan vs SriLanka (2nd ODI)",
                    "Pakistan",
                    "SriLanka"
                  )
                }
              >
                <IonCardContent>
                  <label className="matches-name">
                    Pakistan vs SriLanka (2nd ODI)
                  </label>
                  <IonIcon
                    slot="start"
                    ios={playCircleSharp}
                    md={playCircleSharp}
                    className="play-icon-small"
                  />
                </IonCardContent>
              </IonCard>
            </div>
          </div>
          {/* Competitions */}
          <div className="match-wrapper">
            <div className="header">
              <label>Competitions</label>
            </div>
            <div className="matches">
              <IonCard>
                <IonCardContent>
                  <label className="matches-name">T20 IPL</label>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <label className="matches-name">One Day International</label>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <label className="matches-name">Test Matches</label>
                </IonCardContent>
              </IonCard>
            </div>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Matches;
