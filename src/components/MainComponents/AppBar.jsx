import React, { Component } from 'react';
// import Navbar from "./components/MainComponents/Navbar";
import { MenuItem } from "@material-ui/core";
import ButtonAppBarCollapse from "./NavbarCollapse";
import { Link } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
// import { NavLink } from "react-router-dom";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    collapseMenu: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
        marginLeft: "auto"
    },
    bigIndicator: {
        height: 3
        //  marginBottom: 5
    },
    buttonsBar: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        marginLeft: "auto",
        marginRight: 100,
        color: "white"
    },
    hoverTab: {
        "&:hover": {
            backgroundColor: "#eeee"
        }
    }

});

export class AppBar extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
        console.log(this.props.isAdmin);
    };

    render () {

        const { currentUser, classes } = this.props;
        const { value } = this.state;

        return (
            <MuiAppBar color="primary" position="static" key="appbar">
                <Toolbar>
                    <TypoGraphy
                        color="inherit"
                    >
                        Agrochemical
                    </TypoGraphy>
                    <span className={classes.buttonsBar}>
                        <Tabs
                            value={value}
                            classes={{ indicator: classes.bigIndicator }}
                            onChange={this.handleChange}
                        >
                            <Tab className={classes.hoverTab} label="Home" component={Link} to="/" />
                            <Tab className={classes.hoverTab} label="About" component={Link} to="/about" />
                            <Tab className={classes.hoverTab} label="Catalogue" component={Link} to="/catalogue" />
                            <Tab className={classes.hoverTab} label="Diagnoser" component={Link} to="/diagnoser" />
                            <Tab className={classes.hoverTab} label="Diseases" component={Link} to="/diseases" />
                            <Tab className={classes.hoverTab} label="Contacts" component={Link} to="/contacts" />
                            {this.props.isAdmin && <Tab className={classes.hoverTab} label="Admin" component={Link} to="/admin" />}
                            {currentUser && <a onClick={this.props.logout} className="nav-item nav-link">Logout</a>}
                        </Tabs>
                    </span>
                    <span className={classes.collapseMenu}>
                        <ButtonAppBarCollapse>
                            <MenuItem>Login</MenuItem>
                            <MenuItem>Signup</MenuItem>
                        </ButtonAppBarCollapse>
                    </span>
                </Toolbar>
            </MuiAppBar>
        );
    }
}

export default withStyles(useStyles)(AppBar);
