import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    // root: {
    //     flexGrow: 1
    // },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20
    }
});

export class HomePage extends Component {
    render () {
        const { classes } = this.props;

        return (
            <GridContainer>
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
            </GridContainer>
        );
    }
}

export default withStyles(useStyles)(HomePage);
