import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DevicesIcon from "@material-ui/icons/Devices";
import DraftsIcon from "@material-ui/icons/Drafts";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";

const Drawer = (props) => {
    const useStyles = makeStyles(theme => ({
      card: {
        minWidth: 275,
        maxWidth: 345
      },
      media: {
        zIndex: -100,
        height: 140,
        backgroundImage:
          "https://media.licdn.com/dms/image/C4D0BAQFuzFF1SGgRsg/company-logo_200_200/0?e=2159024400&v=beta&t=lYspJ49z6gfIjFyLobSIHlx4-mkvWcbTXNgKATw3p94"
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
      },
      name: {
        fontWeight: "bold"
      },
      inviteCount: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        borderRadius: "50%",
        height: "36px",
        width: "36px",
        padding: "0px",
        textAlign: "center",
        margin: "0px"
      },
      pos: {
        marginBottom: 12
      },
      fullList: {
        width: "auto"
      },
      expand: {
        marginLeft: "auto"
      }
    }));
    const classes = useStyles();

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={props.drawerHandler}
        onKeyDown={props.drawerHandler}
      >
        <Card className={classes.card}>
          <CardContent>
            <Avatar
              alt="C/+/T"
              src="https://media.licdn.com/dms/image/C4D0BAQFuzFF1SGgRsg/company-logo_200_200/0?e=2159024400&v=beta&t=lYspJ49z6gfIjFyLobSIHlx4-mkvWcbTXNgKATw3p94"
              className={classes.bigAvatar}
            />
            <Typography className={classes.name} component="p" variant="body2">
              C/+/T
            </Typography>
            <Typography component="p" variant="body2">
              Charleston, SC
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton className={classes.expand}>
              <ArrowDropDownIcon />
            </IconButton>
          </CardActions>
        </Card>


        <List component="nav" aria-label="main mailbox folders">
          
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Paired Devices" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Invites" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                className={classes.inviteCount}
              >
                2
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Triggers" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  
  
    return (
      <div className="Drawer">
        <SwipeableDrawer
          open={props.open}
          onClose={props.drawerHandler}
          onOpen={props.drawerHandler}
        >
          {sideList("left")}
        </SwipeableDrawer>
      </div>
    );
}


export default Drawer;