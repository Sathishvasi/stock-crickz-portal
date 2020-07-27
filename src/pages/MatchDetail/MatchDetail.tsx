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

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
  });

  const handleClickOpen = () => {
    setState({ ...stateVal, open: true });
  };

  const handleClose = () => {
    setState({ ...stateVal, open: false });
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
        <Navbar />
      </IonHeader>

      <IonContent className="match-detail-wrapper">
        {/* Modal */}
        <div>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={stateVal.open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Bet your point
            </DialogTitle>
            <DialogContent dividers>
              <p>Betting content goes here</p>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
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
                      onClick={handleClickOpen}
                    >
                      <p className="point">{row.back.point}</p>
                      <span>{row.back.amount}</span>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="lay-section"
                      onClick={handleClickOpen}
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
                      onClick={handleClickOpen}
                    >
                      <p className="point">{row.back.point}</p>
                      <span>{row.back.amount}</span>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="lay-section"
                      onClick={handleClickOpen}
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
