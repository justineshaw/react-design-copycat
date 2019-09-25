import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from "@material-ui/core/InputAdornment";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import axios from "axios";

import { useAlert } from "react-alert";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "0px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bigAvatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: 10,
    width: 100,
    height: 100,
    fontWeight: "bold",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formFields: {
    paddingBottom: "20px",
    padding: "0px 40px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  button: {
    margin: theme.spacing(1)
  },
  pinButton: {
    color: "grey !important"
  },
  pairing: {
    color: theme.palette.primary.main,
    flexGrow: 1,
    justifyContent: "space-between",
    display: "flex",
    marginRight: "10px"
  },
  actionGrid: {
    backgroundColor: "#fff",
    padding: "10px 20px"
  }
}));

const SignUp = (props) => {
    const alert = useAlert();
    const classes = useStyles();

    const handleSubmit = () => {
      var bodyFormData = new FormData();
      bodyFormData.set("user_name", props.name);
      bodyFormData.set("user_email", props.email);
      bodyFormData.set("user_phone", props.phone);
      bodyFormData.set("pairing", props.pairing);
      
      axios({
        method: "post",
        url: "http://projects.codeandtrust.com/api/user/create",
        data: bodyFormData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(function(response) {
          console.log(response);
          if (response.data.error) {
            console.log(response.data.error);
            alert.show(response.data.msg, { type: "error" });
          } else if (response.data.msg === "no user") {
            alert.show(response.data.msg, { type: "error" });
          } else if (response.data.msg === "user created") {
            alert.show("New User Created!", { type: "success" });
          }
        })
        .catch(function(response) {
          console.log(response);
          if (response.data.msg) {
            alert.show(response.data.msg, { type: "error" });
          }
          else {
            alert.show("Error", { type: "error" });
          }
        });
    };

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            alt="C/+/T"
            src="https://media.licdn.com/dms/image/C4D0BAQFuzFF1SGgRsg/company-logo_200_200/0?e=2159024400&v=beta&t=lYspJ49z6gfIjFyLobSIHlx4-mkvWcbTXNgKATw3p94"
            className={classes.bigAvatar}
          />
          <AddPhotoAlternateIcon />
          <Typography component="h2" variant="h4">
            C/+/T
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2} className={classes.formFields}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoComplete="name"
                  name="name"
                  placeholder="C/+/T"
                  onChange={e => props.setName(e.target.value)}
                  id="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  type="phone"
                  id="phone"
                  placeholder="843.619.7834"
                  onChange={e => props.setPhone(e.target.value)}
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="hello@codeandtrust.com"
                  onChange={e => props.setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  placeholder="········"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button color="primary">Change_Password</Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="pin"
                  type="text"
                  id="pin"
                  placeholder="0123"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button className={classes.pinButton}>
                          Access_Pin
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  className={classes.pairing}
                  value="end"
                  control={
                    <Switch color="primary" className={classes.switch} />
                  }
                  label="ENABLE_PAIRING"
                  onChange={e => props.setPairing(e.target.checked)}
                  labelPlacement="end"
                />
              </Grid>
            </Grid>
            <Grid
              className={classes.actionGrid}
              container
              justify="flex-end"
              m={3}
            >
              <Grid item m={3}>
                <Button className={classes.button} color="primary">
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
}

export default SignUp;