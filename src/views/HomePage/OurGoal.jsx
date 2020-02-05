import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        // backgroundColor: theme.palette.primary.light,
        backgroundColor: "#eee",
        paddingTop: 30,
        paddingBottom: 30,
        color: "black"
    },
    title: {
        margin: "0 auto"
    },
    button: {
        margin: "0 auto",
        color: "white"
    },
    disableUnderline: {
        textDecoration: "none",
        textAlign: "center",
        margin: "0 auto"
    }
});

export class OurGoal extends Component {
    render () {
        const { classes } = this.props;

        return (
            <section className={classes.root}>
                <GridContainer className={classes.container}>
                    <Typography variant="h4" align="center" className={classes.title} component="h2">
                        What is our goal?
                    </Typography>
                    <div>
                        <GridContainer >
                            <GridItem xs={12} md={4}>
                                <div className={classes.item}>
                                    <Typography align="center">
                                        Expand the market of our trademark
                                    </Typography>
                                </div>
                            </GridItem>
                            <GridItem xs={12} md={4}>
                                <div className={classes.item}>
                                    <Typography align="center">
                                        Fast access of new products to manufacturers
                                    </Typography>
                                </div>
                            </GridItem>
                            <GridItem xs={12} md={4}>
                                <div className={classes.item}>
                                    <Typography align="center">
                                        Offering optimal balance between quality and product price
                                    </Typography>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Link to="/about" className={classes.disableUnderline}>
                        <Button
                            color="primary"
                            size="large"
                            variant="contained"
                            className={classes.button}
                        >
                            Read more
                        </Button>
                    </Link>
                </GridContainer>
            </section>
        );
    }
}

export default withStyles(styles)(OurGoal);