import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonGrid,
  IonRow,
  IonInput,
  IonCol,
  IonButton,
} from "@ionic/react";
import React from "react";
import { menuController } from "@ionic/core";
import Navbar from "../../components/Navbar/Navbar";
import { closeSharp } from "ionicons/icons";

//material UI
import { useState } from "react";
import Container from "@material-ui/core/Container";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Modal
import { createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";

// Redux
import { connect } from "react-redux";
import state from "../../store";

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return dispatch({ type: "", value: "" });
}

//Modal
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <IonIcon
            slot="start"
            ios={closeSharp}
            md={closeSharp}
            className="play-icon"
          />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// Table
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#22478a",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function createData(header: any, back: any, lay: any) {
  return { header, back, lay };
}

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const MatchDetail: React.FC = () => {
  menuController.enable(true);

  const [stateVal, setState] = useState({
    matchHeading: localStorage.getItem("matchHeader"),
    teamA: localStorage.getItem("teamA"),
    teamB: localStorage.getItem("teamB"),
    open: false,
    odds: "",
    finalBet: "",
    stakeVal: "",
  });

  const handleClickOpen = (pointVal: any) => {
    let pointValue;
    if (pointVal.classList.value === "point") {
      pointValue = pointVal.innerText;
    } else if (
      pointVal.classList &&
      pointVal.classList[0] === "MuiTableCell-root"
    ) {
      pointValue = pointVal.childNodes[0].innerText;
    } else {
      pointValue = pointVal.previousSibling.innerText;
    }

    setState({
      ...stateVal,
      odds: pointValue,
      open: true,
      finalBet: pointValue,
      stakeVal: "",
    });
  };

  const handleClose = () => {
    setState({ ...stateVal, open: false });
  };

  const incrementOdds = () => {
    const incrementedVal = parseInt(stateVal.odds) + 10;
    setState({
      ...stateVal,
      odds: incrementedVal.toString(),
      finalBet: (
        incrementedVal +
        (stateVal.stakeVal.length > 0 ? parseInt(stateVal.stakeVal) : 0)
      ).toString(),
    });
  };

  const decrementOdds = () => {
    let decrementedVal = parseInt(stateVal.odds);
    if (decrementedVal - 10 > 0) {
      decrementedVal -= 10;
    }
    setState({
      ...stateVal,
      odds: decrementedVal.toString(),
      finalBet: (
        decrementedVal +
        (stateVal.stakeVal.length > 0 ? parseInt(stateVal.stakeVal) : 0)
      ).toString(),
    });
  };

  const addProfit = (val: any) => {
    let btnVal = val.target.innerText;
    let finalBtnVal = parseInt(btnVal.substring(1, btnVal.length));
    let finalStakeVal =
      finalBtnVal +
      (stateVal.stakeVal.length > 0 ? parseInt(stateVal.stakeVal) : 0);

    setState({
      ...stateVal,
      stakeVal: finalStakeVal.toString(),
      finalBet: (finalStakeVal + parseInt(stateVal.odds)).toString(),
    });
  };

  const updateStake = (e: any) => {
    let updatedVal = e.target.value;
    setState({
      ...stateVal,
      stakeVal: updatedVal,
      finalBet: (
        (updatedVal.length > 0 ? parseInt(updatedVal) : 0) +
        parseInt(stateVal.odds)
      ).toString(),
    });
  };

  const rows = [
    createData(
      stateVal.teamA,
      { point: 543, amount: "20,000" },
      { point: 123, amount: "20,000" }
    ),
    createData(
      stateVal.teamB,
      { point: 542, amount: "20,000" },
      { point: 123, amount: "20,000" }
    ),
    createData(
      "The Draw",
      { point: 665, amount: "20,000" },
      { point: 112, amount: "20,000" }
    ),
  ];

  const row2 = [
    createData(
      stateVal.teamA,
      { point: 123, amount: "20,000" },
      { point: 123, amount: "20,000" }
    ),
    createData(
      stateVal.teamB,
      { point: 324, amount: "20,000" },
      { point: 234, amount: "20,000" }
    ),
    createData(
      "Draw",
      { point: 234, amount: "20,000" },
      { point: 234, amount: "20,000" }
    ),
  ];

  const classes = useStyles();

  return (
    <IonPage>
      <IonHeader>
        <div className="inner-pages">
          <Navbar />
        </div>
      </IonHeader>

      <IonContent className="match-detail-wrapper">
        {/* Modal */}
        <div>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={stateVal.open}
            className="betting-section"
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Bet your point
            </DialogTitle>
            <DialogContent dividers>
              <IonGrid>
                <IonRow>
                  <IonCol size="6">
                    <IonRow className="header">
                      <IonCol size="12">ODDS</IonCol>
                    </IonRow>
                    <IonRow className="max-input adjust">
                      <IonCol size="3">
                        <button className="decrement" onClick={decrementOdds}>
                          -
                        </button>
                      </IonCol>
                      <IonCol size="6">
                        <IonInput
                          type="number"
                          value={stateVal.odds}
                          disabled
                        />
                      </IonCol>
                      <IonCol size="3">
                        <button className="increment" onClick={incrementOdds}>
                          +
                        </button>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                  <IonCol size="6">
                    <IonRow className="header">
                      <IonCol size="6">STAKE</IonCol>
                      <IonCol size="6">Max: 500,0000</IonCol>
                    </IonRow>
                    <IonRow className="max-input">
                      <IonInput
                        type="number"
                        placeholder="Max: 50,0000"
                        value={stateVal.stakeVal}
                        onIonInput={(e: any) => {
                          updateStake(e);
                        }}
                      />
                    </IonRow>
                  </IonCol>
                </IonRow>
                <IonRow className="amount-selection">
                  <IonCol size="4">
                    <button onClick={(e: any) => addProfit(e)}>+500</button>
                  </IonCol>
                  <IonCol size="4">
                    <button onClick={(e: any) => addProfit(e)}>+1000</button>
                  </IonCol>
                  <IonCol size="4">
                    <button onClick={(e: any) => addProfit(e)}>+1500</button>
                  </IonCol>
                </IonRow>
                <IonRow className="profit">
                  <p>Profit:</p>
                  <h5>{stateVal.finalBet}</h5>
                </IonRow>
                <IonRow className="confirm-selection">
                  <IonCol size="6" onClick={handleClose}>
                    <button className="cancel">Cancel</button>
                  </IonCol>
                  <IonCol size="6">
                    <button className="submit">Place Bet</button>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </DialogContent>
          </Dialog>
        </div>

        {/* Top Header */}
        <div className="match-header">
          <p>{stateVal.matchHeading}</p>
          <span>21/04/2020 06:30</span>
        </div>
        <div className="match-detail">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Match Odds</StyledTableCell>
                  <StyledTableCell align="center">BACK</StyledTableCell>
                  <StyledTableCell align="center">LAY</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <StyledTableCell
                      className="team"
                      component="th"
                      scope="row"
                    >
                      {row.header}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="back-section"
                      onClick={(e: any) => handleClickOpen(e.target)}
                    >
                      <p className="point">{row.back.point}</p>
                      <span>{row.back.amount}</span>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="lay-section"
                      onClick={(e: any) => handleClickOpen(e.target)}
                    >
                      <p className="point">{row.lay.point}</p>
                      <span>{row.lay.amount}</span>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Bookmaker</StyledTableCell>
                  <StyledTableCell align="center">BACK</StyledTableCell>
                  <StyledTableCell align="center">LAY</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row2.map((row, index) => (
                  <TableRow key={index}>
                    <StyledTableCell
                      className="team"
                      component="th"
                      scope="row"
                    >
                      {row.header}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="back-section"
                      onClick={(e: any) => handleClickOpen(e.target)}
                    >
                      <p className="point">{row.back.point}</p>
                      <span>{row.back.amount}</span>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="lay-section"
                      onClick={(e: any) => handleClickOpen(e.target)}
                    >
                      <p className="point">{row.lay.point}</p>
                      <span>{row.lay.amount}</span>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MatchDetail;
