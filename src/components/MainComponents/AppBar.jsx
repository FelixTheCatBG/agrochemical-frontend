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
    },
    buttonsBar: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        marginLeft: "auto",
        marginRight: 100
    }
});

export class AppBar extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render () {

        const { currentUser, isAdmin, classes } = this.props;
        const { value } = this.state;

        return (
            <MuiAppBar color="primary" position="static" key="appbar">
                <Toolbar>
                    <TypoGraphy variant="title"
                        color="inherit"
                    >
                        Agrochemical
                    </TypoGraphy>
                    {/* /U can find list here */}
                    <div>
                        {/* <List component="nav">
                        <ListItem component="div">
                            <ListItemText className="itemBox" inset>
                                <TypoGraphy className={classes.itemBox} color="inherit" variant="title">
                                    <Link to="/" className="nav-item nav-link">Home</Link>
                                </TypoGraphy>
                            </ListItemText>

                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    <NavLink to="/catalogue" className="nav-item nav-link">Catalogue</NavLink>
                                </TypoGraphy>
                            </ListItemText>

                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    <NavLink to="/diagnoser" className="nav-item nav-link">Diagnoser</NavLink>
                                </TypoGraphy>
                            </ListItemText>

                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                                    {currentUser && <a onClick={this.logout} className="nav-item nav-link">Logout</a>}
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                    </List> */}
                    </div>

                    <span className={classes.buttonsBar}>
                        <Tabs
                            value={value}
                            classes={{ indicator: classes.bigIndicator }}
                            onChange={this.handleChange}
                        >
                            <Tab label="Home" component={Link} to="/" />
                            <Tab label="Catalogue" component={Link} to="/catalogue" />
                            <Tab label="Diagnoser" component={Link} to="/diagnoser" />
                            <Tab label="Contacts" component={Link} to="/contacts" />
                            {isAdmin && <Tab label="Admin" component={Link} to="/admin" />}
                            {currentUser && <a onClick={this.logout} className="nav-item nav-link">Logout</a>}
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
