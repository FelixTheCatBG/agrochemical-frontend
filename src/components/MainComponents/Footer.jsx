import React, { Component } from 'react';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, Typography } from '@material-ui/core';
import logo from "../../assets/img/AgrochemicalLogo.png";

const useStyles = theme => ({
    root: {
        backgroundColor: "#EE7629",
        color: "white",
        marginBottom: 0,
        paddingTop: 30
    },
    bigIndicator: {
        height: 5
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20
    },
    links: {
        "& ul": {
            paddingLeft: 0,
            listStyleType: "none"

        },
        "& li a": {
            color: "white",
            ":hover": {
                textDecoration: "none",
                color: "#4180CB"
            }
        }
    },
    logo: {
        width: "100%",
        maxWidth: 250,
        height: "auto"
    },
    title: {
        color: theme.palette.common.white
    },
    link: {
        paddingBottom: "5px"
    },
    copyright: {
        "& p": {
            borderTop: " 1px solid rgba(255,255,255,.1)"
        }
    }
});

export class Footer extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridContainer>
                    <GridItem xs={12} sm={4}>
                        <img src={logo} alt="logo" className={classes.logo} />
                        <p>Agrochemical is national leader in plant protection products.</p>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <div className={classes.links}>
                            <Typography variant="h4" className={classes.title} component="h4">
                                Links
                            </Typography>
                            <ul>
                                <li className={classes.link}><Link component="a"
                                    href="/">Home</Link></li>
                                <li className={classes.link}><Link component="a"
                                    href="/about">About Us</Link></li>
                                <li className={classes.link}><Link component="a"
                                    href="/catalogue">Products</Link></li>
                                <li className={classes.link}><Link component="a"
                                    href="/diagnoser">Diagnoser</Link></li>
                                <li className={classes.link}><Link component="a"
                                    href="/diseases">Diseases</Link></li>
                                <li className={classes.link}><Link component="a"
                                    href="/contacts">Contact Us</Link></li>
                            </ul>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <div className={classes.contacts}>
                            <Typography variant="h4" className={classes.title} component="h4">
                                Contacts
                            </Typography>
                            <p>Plovdiv 4004, <br></br>Komatevska str. 73</p>
                            <p ><i ></i>032/ 69 00 29</p>
                            <p><i ></i>agrochemical2000@gmail.com</p>
                        </div>
                    </GridItem>
                    <GridItem xs={12} >
                        <div className={classes.copyright}>
                            <p><small >Copyright © 2020 Agrochemical. All right reserved.</small></p>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(useStyles)(Footer);