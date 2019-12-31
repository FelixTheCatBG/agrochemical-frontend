import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import backgroundImage from "../../assets/img/homeBackground.jpeg";
// import backgroundImage2 from "../../assets/img/homeBackground2.jpeg";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = theme => ({
    // root: {
    //     flexGrow: 1
    // },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20
    },
    firstHeader: {
        width: "100%",
        height: 500,
        maxHeight: 700,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgrounAttachment: "fixed"
    },
    callToActionBox: {
        width: "100%",
        backgroundColor: "#37b44e",
        padding: 30
    }
});

export class HomePage extends Component {
    render () {
        const { classes } = this.props;

        return (
            <GridContainer>
                <div className={classes.firstHeader}>
                    <GridContainer>
                        <GridItem xs={12}>
                            <div style={{ padding: 50 }}>
                                <h1>Agrochemical is company about... </h1>
                                <p>Some information about the company paragraph</p>
                            </div>
                        </GridItem>
                        {/* <GridItem xs={4}>
                            <Paper className={classes.paper}>Call to action</Paper>
                        </GridItem> */}
                    </GridContainer>
                </div>
                <div className={classes.callToActionBox}>
                    <GridContainer>
                        <GridItem xs={8}>
                            <Typography className={classes.paper}>Go and checkout our products</Typography>
                        </GridItem>
                        <GridItem xs={4}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={this.handleNext}
                                className={classes.button}
                            > Call To Action Box</Button>
                        </GridItem>
                    </GridContainer>
                </div>
                <GridItem xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </GridItem>
                <GridItem xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </GridItem>
                <GridItem xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </GridItem>
                <GridItem xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </GridItem>
                <GridItem xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </GridItem>
                <GridItem xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </GridItem>
                <GridItem xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </GridItem>
            </GridContainer >
        );
    }
}

export default withStyles(useStyles)(HomePage);
