import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/react";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import state from "../../store";

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return dispatch({ type: "", value: "" });
}

const BettingPL: React.FC = () => {
  const history = useHistory();

  const bettingPL_list = [
    {
      date: "31st July 2020",
      pl: "1500.00",
      status: "win",
      matches: [
        {
          teamName: "India vs Pakistan",
          startTime: "31/07/2020 08:00:00",
          settledTime: "31/07/2020 14:00:17",
          comm: "0.00",
          netWin: "-1300",
        },
        {
          teamName: "Australia vs India",
          startTime: "31/07/2020 12:00:00",
          settledTime: "31/07/2020 20:20:00",
          comm: "0.00",
          netWin: "-200",
        },
      ],
    },
    {
      date: "1st August 2020",
      pl: "1200.00",
      status: "Loss",
      matches: [
        {
          teamName: "Pakistan vs India",
          startTime: "01/08/2020 13:25:20",
          settledTime: "01/08/2020 20:18:15",
          comm: "0.00",
          netWin: "-200",
        },
        {
          teamName: "South Africa vs Australia",
          startTime: "01/08/2020 11:15:20",
          settledTime: "01/08/2020 16:01:30",
          comm: "0.00",
          netWin: "-1000",
        },
      ],
    },
    {
      date: "2nd August 2020",
      pl: "2600.00",
      status: "Loss",
      matches: [
        {
          teamName: "South Africa vs Pakistan",
          startTime: "02/08/2020 11:15:20",
          settledTime: "02/08/2020 16:01:30",
          comm: "0.00",
          netWin: "-2000",
        },
        {
          teamName: "Pakistan vs India",
          startTime: "02/08/2020 13:25:20",
          settledTime: "02/08/2020 20:18:15",
          comm: "0.00",
          netWin: "-600",
        },
      ],
    },
  ];

  const goToBettingdetail = (val1: string, val2: string, val3: string) => {
    // redux
    console.log(val1, val2, val3);
    localStorage.setItem('teamName',val1);
    // state.dispatch({ type: "SET_BACKBTN", value: "/menu" });

    history.push("/menu/bettingpl-detail");
  };

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent className="Bettingpl">
        <Container>
          <h4 className="page-header">Betting Profit & Loss</h4>

          {bettingPL_list.map((val, index) => (
            <IonList key={index}>
              <IonItem class="list_header">
                <IonGrid class="font">
                  <IonRow>
                    <IonCol size="8">
                      <IonLabel>{val.date}</IonLabel>
                    </IonCol>
                    <IonCol size="2">
                      <IonLabel>P&L :</IonLabel>
                    </IonCol>
                    <IonCol size="2" class="align">
                      {val.status == "win" && (
                        <IonLabel class="win_color">{val.pl}</IonLabel>
                      )}
                      {val.status != "win" && (
                        <IonLabel class="loss_color">{val.pl}</IonLabel>
                      )}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              {val.matches.map((val2, index2) => (
                <IonItem
                  key={index2}
                  lines="none"
                  className="match-details"
                >
                  <IonGrid class="font">
                    <IonRow>
                      <IonCol size="8">
                        <IonLabel class="team_Color">
                          <u onClick={(e: any)=>{ goToBettingdetail(val2.teamName, val2.comm, val.status)}}>{val2.teamName}</u>
                        </IonLabel>
                      </IonCol>
                      <IonCol size="4" class="right">
                        <IonLabel>Comm: {val2.comm}</IonLabel>
                      </IonCol>
                      <IonCol size="8">
                        <IonLabel>Start Time:{val2.startTime}</IonLabel>
                      </IonCol>
                      <IonCol size="4" class="right">
                        <IonLabel>
                          Net Win:{" "}
                          <span className="netwin_align">{val2.netWin}</span>
                        </IonLabel>
                      </IonCol>

                      <IonCol size="12">
                        <IonLabel>Settled Time:{val2.settledTime}</IonLabel>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              ))}
            </IonList>
          ))}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default BettingPL;
