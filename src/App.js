import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from "@material-ui/icons/MoreVert";

import NavBar from "./components/NavBar/NavBar";
import SignUp from './components/SignUp/SignUp';
import Drawer from './components/Drawer/Drawer';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; 

const useStyles = makeStyles(theme => ({
  "@global": {
    body: { 
      backgroundColor: "#14324c",
      color: "#fff"
    },
    '::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#fff !important'
    },
    input: {
      color: '#fff !important',
      underline: '#fff !important'
    },
    'textarea:focus': {
      color: '#fff !important'
    },
    'input:focus': {
      color: '#fff !important'
    }
  },
  app: {
    flexGrow: 1
  }
}));

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("testname");
  const [email, setEmail] = useState("test@test.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [pairing, setPairing] = useState(false);

  const drawerHandler = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#14D1FF",
        contrastText: "#fff"
      }
    },
    typography: {
    "fontFamily": "\"Play\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
    },
    overrides: {
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: "1px solid grey"
          },
          "&:after": {
            borderBottom: `1px solid #fff`
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: `1px solid #fff`
          }
        }
      }
    }
  });

  return (
    <div className={classes.app}>
      <MuiThemeProvider theme={theme}>
        <NavBar drawerHandler={drawerHandler} />
        <SignUp
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          pairing={pairing}
          setPairing={setPairing}
        />
        <Drawer open={open} drawerHandler={drawerHandler} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
