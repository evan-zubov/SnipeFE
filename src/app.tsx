import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Body } from "./components/body/body";
import "./app.css";
import "@fortawesome/fontawesome-free/js/all";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router } from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// const classes = useStyles();

export const App: React.FunctionComponent = () => (
  <div className="App">
    <CssBaseline />
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            //className={classes.title}
          >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Body />
    </Router>
  </div>
);
