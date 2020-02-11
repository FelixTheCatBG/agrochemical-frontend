import React, { Component } from "react";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import slide1 from "../../assets/img/agroslide1.jpg";
import slide2 from "../../assets/img/agroslide2.jpg";

const useStyles = theme => ({
    mainContainer: {
        paddingTop: 0
    },
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
        height: "auto"
    }
});

export class Distributors extends Component {
    render () {
        const { classes } = this.props;

        return (
            <GridContainer style={{ paddingTop: 0 }}>
                <GridItem xs={12}>
                    <h2>Distributors</h2>
                    <p>The plant protection products are being distributed and sold in a few ways:</p>


                    <h3>Distributors in different regions of the country:</h3>

                    <GridItem xs={6}>
                        <p>F + S AGRO - Rousse<br></br>
                            Sempe - town of Razgrad <br></br>
                            Agrochemical Targovishte - Targovishte<br></br>
                            Terra Eco - Veliko Tarnovo</p><br></br>
                    </GridItem>
                    <GridItem xs={6}>
                        <p>
                            Boyana Agro - Dulovo <br></br>
                            Agroinvest - Burgas <br></br>
                            Agrarica - Yambol <br></br>
                            Farmer 21 - Plovdiv<br></br>
                            Agropal - Sofia<br></br>
                        </p>
                    </GridItem>

                    <h3>Own Farm Pharmacies </h3>
                    <p>Besides pesticides, they sell fertilizers, seeds and implements</p>
                    <GridContainer>
                        <GridItem xs={6}>
                            <img className={classes.image} src={slide1} alt="agrochemical" />
                        </GridItem>
                        <GridItem xs={6}>
                            <img className={classes.image} src={slide2} alt="agrochemical" />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12}>
                            <h3>Other agricultural stores</h3>
                            <p>More than 150 pharmacies are our customers </p>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(useStyles)(Distributors);