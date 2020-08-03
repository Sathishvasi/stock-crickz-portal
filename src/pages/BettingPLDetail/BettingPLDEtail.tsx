import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import Container from "@material-ui/core/Container";
import { State } from "ionicons/dist/types/stencil-public-runtime";
import { useEffect, useState, useRef } from "react";

const BettingPL: React.FC = () => {
  const [state, setState] = useState({
    matchHeader: localStorage.getItem('teamName'),
  });
  const plData = [
    {
      selection: "MSK Frankfurt",
      betID: "3453423423423",
      placed: "18/4/2020 23:23:32",
      status: "LOST",
      pl: "-234.23",
      type: "Lay",
      odds: 2.333,
      stake: 3000,
    },
    {
      selection: "FDG Frankfurt",
      betID: "5673423423423",
      placed: "18/4/2020 23:23:32",
      status: "LOST",
      pl: "-234.23",
      type: "Lay",
      odds: 2.333,
      stake: 3000,
    },
    {
      selection: "PER Frankfurt",
      betID: "1243423423423",
      placed: "18/4/2020 23:23:32",
      status: "WON",
      pl: "233.23",
      type: "Back",
      odds: 2.333,
      stake: 6000,
    },
    {
      selection: "WGE Frankfurt",
      betID: "4443423423423",
      placed: "18/4/2020 23:23:32",
      status: "LOST",
      pl: "-234.23",
      type: "Lay",
      odds: 2.333,
      stake: 3000,
    },
    {
      selection: "PER Frankfurt",
      betID: "1243423423423",
      placed: "18/4/2020 23:23:32",
      status: "WON",
      pl: "233.23",
      type: "Back",
      odds: 2.333,
      stake: 6000,
    },
    {
      selection: "WGE Frankfurt",
      betID: "4443423423423",
      placed: "18/4/2020 23:23:32",
      status: "LOST",
      pl: "-234.23",
      type: "Lay",
      odds: 2.333,
      stake: 3000,
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <div className="inner-pages">
          <Navbar />
        </div>
      </IonHeader>

      <IonContent>
        <Container className="bettingpl-detail">
          <h4 className="page-header">Betting Profit & Loss</h4>
          <IonList>
            <IonItem class="list_header">
              <IonLabel>{state.matchHeader} - Match Odds</IonLabel>
            </IonItem>
            {plData.map((val, index) => (
              <IonItem lines="none" key={index}>
                <IonGrid>
                  <IonRow>
                    <IonCol size="7" className="bet-details">
                      <p>Selection: {val.selection}</p>
                      <span>
                        <b>Bet ID:</b> {val.betID}
                      </span>
                      <span>
                        <b>Placed:</b> {val.placed}
                      </span>
                    </IonCol>
                    <IonCol size="5" className="status">
                      <IonRow>
                        <IonCol size="7">Status:</IonCol>
                        <IonCol size="5" className={val.status}>
                          {val.status}
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="7">Profit/Loss:</IonCol>
                        <IonCol size="5" className={val.status}>
                          {val.pl}
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                  <IonRow className="additional">
                    <IonCol size="4">
                      <b>TYPE:</b> {val.type}
                    </IonCol>
                    <IonCol size="4">
                      <b>ODDS:</b> {val.odds}
                    </IonCol>
                    <IonCol size="4">
                      <b>STAKE:</b> {val.stake}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
          </IonList>
          <div className="total-tally">
            <div className="details">
              <div className="headers">
                <p>Bank subtotal:</p>
                <p>Lay subtotal:</p>
                <p>Market subtotal:</p>
                <p>Commission:</p>
              </div>
              <div className="values">
                <p>1000.00</p>
                <p>-500.00</p>
                <p>3000.00</p>
                <p>15.00</p>
              </div>
            </div>
            <div className="total">
              <span>Net Market Total:</span>
              <span>3515.00</span>
            </div>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default BettingPL;
