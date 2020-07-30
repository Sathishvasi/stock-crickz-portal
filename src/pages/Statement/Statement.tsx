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
    IonLabel,
    IonGrid,
    IonRow,
    IonCol
  } from "@ionic/react";
  import React from "react";
  import { menuController } from "@ionic/core";
  import Navbar from "../../components/Navbar/Navbar";
  import Container from "@material-ui/core/Container";
  import { makeStyles } from "@material-ui/core/styles";

  const useStyles = makeStyles((theme) => ({
    color: {
        color: 'red',
    },
  }));
  
  const Statement: React.FC = () => {
    menuController.enable(true);
    const list_array = [
      {
        Date: '27th July 2020',
        Time:'01.42',
        Description:'Transfer Out',
        Amount:'10,000.00'
      },
      {
        Date: '29th July 2020',
        Time:'01.53',
        Description:'Transfer Out',
        Amount:'20,000.00'
      },
      {
        Date: '29th July 2020',
        Time:'02.00',
        Description:'Transfer Out',
        Amount:'30,000.00'
      },
      {
        Date: '30th July 2020',
        Time:'02.15',
        Description:'Transfer Out',
        Amount:'40,000.00'
      },
    ];
    return (
      <IonPage>
        <IonHeader>
          <Navbar />
        </IonHeader>
  
        <IonContent className="Transferstatement">
          <Container>
            <h4 className="page-header">Transfer Statement</h4>
            <IonList>
              <IonItem class = "list_header">
              <IonLabel>Date</IonLabel>
              <IonLabel>Description</IonLabel>
              <IonLabel class = "amount_align">Amount</IonLabel>
              </IonItem>
            
               {list_array.map((val, index) => (
                  <IonItem lines="none" key={index} class = "font_size">
                  <IonGrid>
                    <IonRow>
                      <IonCol col-4>
                       <IonLabel>{val.Date}</IonLabel><IonLabel>{val.Time}</IonLabel>
                      </IonCol>
                      <IonCol col-4>
                        <IonLabel>{val.Description}</IonLabel>
                      </IonCol>
                      <IonCol col-4 class = "amount_align">
                        <IonLabel class = "font_color">{val.Amount}</IonLabel>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                  
                  </IonItem>
                ))}
              </IonList>
          </Container>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Statement;
  