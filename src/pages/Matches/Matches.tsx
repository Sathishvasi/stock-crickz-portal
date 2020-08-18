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
import { playCircleSharp, call } from "ionicons/icons";
import Container from "@material-ui/core/Container";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonLoading,
} from "@ionic/react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import noResults from "../../assets/no-results.svg";

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

const API_ROOT = state.getState().apiBase;

const Matches: React.FC = () => {
  menuController.enable(true);
  const [stateVal, setState] = useState({
    matchCount: 2,
    noMatch: false
  });
  const [liveMatches, setMatches] = useState([]);

  const [showLoading, setShowLoading] = useState(true);

  // Live Matches API call
  const getliveMatches = () => {
    return axios({
      url: API_ROOT + "/matches",
      method: "GET",
    }).then((response) => {
      // Filter teams
      let teamsArray = new Array();
      response.data.filter((val: any) => {
        val.teams.filter((val2: any) => {
          teamsArray.push(val2);
        });
      });
      return teamsArray;
    });
  };

  useEffect(() => {
    getliveMatches().then((data: any) => {
      setShowLoading(false);
      console.log(data)
      if(!data.length){
        setState({...stateVal,noMatch: true});
      }
      return setMatches(data);
    });
  }, []);

  // console.log(liveMatches);

  const setMatchDetail = (
    val: string,
    teamA: string,
    teamB: string,
    status: string
  ) => {
    // redux ref
    state.dispatch({ type: "SET_MATCHNAME", value: val });

    localStorage.setItem("matchHeader", val);
    localStorage.setItem("teamA", teamA);
    localStorage.setItem("teamB", teamB);
    localStorage.setItem("status", status);
    // console.log(val, teamA, teamB);
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
              {liveMatches &&
                liveMatches.map((team: any, index: any) => {
                  return (
                    <div key={index}>
                      {/* {league.matchStatus} */}
                      <IonCard
                        routerLink="/menu/details"
                        onClick={() =>
                          setMatchDetail(
                            team.teamA +
                              " vs " +
                              team.teamB +
                              " (" +
                              team.leagueName +
                              ")",
                            team.teamA,
                            team.teamB,
                            team.status
                          )
                        }
                      >
                        <IonCardContent>
                          <label className="matches-name">
                            {team.teamA} vs {team.teamB} ({team.leagueName})
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
                  );
                })}
                {stateVal.noMatch &&
                <div className="no-matches" >
                  <img src={noResults} alt="No results"/>
                  <p>No Matches Found</p>
                </div>
                }
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

        {/* Loader */}
        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          duration={5000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Matches;
