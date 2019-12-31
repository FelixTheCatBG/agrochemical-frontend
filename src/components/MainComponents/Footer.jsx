import React, { Component } from 'react';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    root: {
        backgroundColor: "#37b44e",
        color: "white",
        marginBottom: 0
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
        // const { value } = this.state;

        return (
            <div className={classes.root}>
                <GridContainer>
                    <GridItem xs={12} sm={4}>
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <div className={classes.links}>
                            <h4 >Links</h4>
                            <ul>
                                <li>- <a href="#">Lorem ipsum</a></li>
                                <li>- <a href="#">Nam mauris velit</a></li>
                                <li>- <a href="#">Etiam vitae mauris</a></li>
                                <li>- <a href="#">Fusce scelerisque</a></li>
                                <li>- <a href="#">Sed faucibus</a></li>
                                <li>- <a href="#">Mauris efficitur nulla</a></li>
                            </ul>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <div className={classes.location}>
                            <h4 >Location</h4>
                            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p ><i ></i>(541) 754-3010</p>
                            <p><i ></i>info@hsdf.com</p>
                        </div>
                    </GridItem>
                    <GridItem xs={12} >
                        <div className={classes.copyright}>
                            <p ><small >© 2019. All Rights Reserved.</small></p>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(useStyles)(Footer);