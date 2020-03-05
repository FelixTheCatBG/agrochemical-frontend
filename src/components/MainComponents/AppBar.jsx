import React, { Component } from 'react';
import { MenuItem } from "@material-ui/core";
import ButtonAppBarCollapse from "./NavbarCollapse";
import { Link } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import logo from "../../assets/img/AgrochemicalLogo.png";

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
        color: "white"
    },
    hoverTab: {
        minWidth: "120px !important",
        "&:hover": {
            backgroundColor: "#eeee"
        }
    },
    logo: {
        maxWidth: "200px",
        position: "absolute",
        zIndex: "100"
    }
});

export class AppBar extends Component {
    state = {
        value: 0,
        activeTab: ''
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render () {
        const { location } = this.props;
        const { classes } = this.props;

        return (
            <div>
                {/* {currentUser && <a onClick={this.props.logout} style={{ float: "right" }}>Logout</a>} */}

                <MuiAppBar color="primary" position="static" key="appbar">
                    <Toolbar>
                        <img src={logo} alt="logo" className={classes.logo} />
                        <span className={classes.buttonsBar}>
                            <Tabs
                                value={location.pathname}
                                classes={{ indicator: classes.bigIndicator }}
                                onChange={this.handleChange}
                                aria-label="tabs"
                            >
                                <Tab className={classes.hoverTab} label="Home" component={Link} to="/" value={"/"} />
                                <Tab className={classes.hoverTab} label="About" component={Link} to="/about" value={"/about"} />
                                <Tab className={classes.hoverTab} label="Catalogue" component={Link} to="/catalogue" value={"/catalogue"} />
                                <Tab className={classes.hoverTab} label="Diagnoser" component={Link} to="/diagnoser" value={"/diagnoser"} />
                                <Tab className={classes.hoverTab} label="Plant Diseases" component={Link} to="/diseases" value={"/diseases"} />
                                <Tab className={classes.hoverTab} label="Contacts" component={Link} to="/contacts" value={"/contacts"} />
                                {this.props.isAdmin && <Tab className={classes.hoverTab} label="Admin" component={Link} to="/admin" value={"/admin"} />}

                            </Tabs>
                        </span>
                        <span className={classes.collapseMenu}>
                            <ButtonAppBarCollapse>
                                <Link to='/' style={{ textDecoration: 'none', color: "#333" }}>
                                    <MenuItem >Home</MenuItem>
                                </Link>
                                <Link to='/about' style={{ textDecoration: 'none', color: "#333" }}>
                                    <MenuItem >About</MenuItem>
                                </Link>
                                <Link to='/catalogue' style={{ textDecoration: 'none', color: "#333" }}>
                                    <MenuItem >Catalogue</MenuItem>
                                </Link>
                                <Link to='/Diagnose' style={{ textDecoration: 'none', color: "#333" }}>
                                    <MenuItem >Diagnose</MenuItem>
                                </Link>
                                <Link to='/Diseases' style={{ textDecoration: 'none', color: "#333" }}>
                                    <MenuItem >Diseases</MenuItem>
                                </Link>
                                <Link to='/Contacts' style={{ textDecoration: 'none', color: "#333" }}>
                                    <MenuItem >Contacts</MenuItem>
                                </Link>
                            </ButtonAppBarCollapse>
                        </span>
                    </Toolbar>
                </MuiAppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(useStyles)(AppBar));
