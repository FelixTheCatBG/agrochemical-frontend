import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.secondary.light,
        paddingTop: 30,
        paddingBottom: 30

    },
    title: {
        margin: "0 auto"
    },
    button: {
        margin: "0 auto"
    }
});

export class OurServices extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render () {
        const { classes } = this.props;

        return (
            <section className={classes.root}>
                <GridContainer className={classes.container}>
                    <Typography variant="h4" align="center" className={classes.title} component="h2">
                        Our services
                    </Typography>
                    <div>
                        <GridContainer >
                            <GridItem xs={12} md={4}>
                                <div className={classes.item}>

                                    <img
                                        src="/static/themes/onepirate/productHowItWorks1.svg"
                                        alt="suitcase"
                                        className={classes.image}
                                    />
                                    <Typography align="center">
                                        Imports and distribution of plant protection products in Bulgaria.
                                    </Typography>
                                </div>
                            </GridItem>
                            <GridItem xs={12} md={4}>
                                <div className={classes.item}>
                                    <img
                                        src="/static/themes/onepirate/productHowItWorks2.svg"
                                        alt="graph"
                                        className={classes.image}
                                    />
                                    <Typography align="center">
                                        Import of various fertilizers.
                                    </Typography>
                                </div>
                            </GridItem>
                            <GridItem xs={12} md={4}>
                                <div className={classes.item}>
                                    <img
                                        src="/static/themes/onepirate/productHowItWorks3.svg"
                                        alt="clock"
                                        className={classes.image}
                                    />
                                    <Typography align="center">
                                        {'New offers every week. New experiences, new surprises. '}
                                        {'Your Sundays will no longer be alike.'}
                                    </Typography>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Button
                        color="secondary"
                        size="large"
                        variant="contained"
                        className={classes.button}
                        component="a"
                        href="/premium-themes/onepirate/sign-up/"
                    >
                        Get started
                    </Button>
                </GridContainer>
            </section>
        );
    }
}

export default withStyles(styles)(OurServices);