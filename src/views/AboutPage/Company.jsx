import React, { Component } from "react";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import slide3 from "../../assets/img/agroslide3.jpg";

const useStyles = theme => ({

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
            <GridContainer style={{ paddingTop: 0 }}>
                <GridItem xs={12}>
                    <h2>The Company</h2>
                    <p>Agrochemical is company established in 1993 in Bulgaria. Main activity of the company is imports and distribution of plant protection products and imports of different fertilizers. The company is engaged in wholesale trade,
                             however last few years they are targeting small and medium farmers also.</p>
                    <img className={classes.image} src={slide3} alt="agrochemical" />
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(useStyles)(Company);