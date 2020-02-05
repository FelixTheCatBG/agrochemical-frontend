import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import slide3 from "../../assets/img/agroslide3.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: "#999",
        fontSize: "17px",
        marginBottom: 20
    },
    image: {
        width: "100%",
        margin: "0 auto",
        height: "auto"
    },
    mainContainer: {
        paddingTop: 0
    }
});

export class Company extends Component {
    render () {
        const { classes } = this.props;

        return (
            <GridContainer className={classes.mainContainer}>
                <GridItem xs={12}>

                    <Paper className={classes.paper}>
                        <Typography variant="h3" align="center" className={classes.title} component="h2">
                            The company
                        </Typography>
                        <p>Agrochemical is company established in 1993 in Bulgaria. Main activity of the company is imports and distribution of plant protection products and imports of different fertilizers. The company is engaged in wholesale trade,
                             however last few years they are targeting small and medium farmers also.</p>
                        <img className={classes.image} src={slide3} alt="agrochemical" />
                    </Paper>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(useStyles)(Company);