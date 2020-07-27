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
import { useEffect, useState, useRef } from "react";
import { menuController } from "@ionic/core";
import Navbar from "../../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";

//accordion
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Betting: React.FC = () => {

  const [state, setState] = useState({
    expand1: true,
    expand2: true,
  });

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonContent className="bg">
        <Container>
          <h4 className="page-header">Open Bets</h4>

          <div className="bettingWrapper">
            <Accordion expanded={state.expand1} onClick={() => setState({...state,expand1: !state.expand1})}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Unmatched Bets
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>You have no unmatched bets</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={state.expand2} onClick={() => setState({...state,expand2: !state.expand2})}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Matched Bets
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>You have no unmatched bets</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Betting;
