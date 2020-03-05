import React, { Component } from 'react';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import albaugh from "../../assets/img/Partners/albaugh.png";
import Arysta from "../../assets/img/Partners/Arysta.png";
import fmc from "../../assets/img/Partners/fmc.png";
import basf from "../../assets/img/Partners/basf.png";
import globachem from "../../assets/img/Partners/globachem.png";
import proplan from "../../assets/img/Partners/proplan.png";
import sc from "../../assets/img/Partners/sc.png";
// import isk from "../../assets/img/Partners/isk.png";
import sicit2000 from "../../assets/img/Partners/sicit2000.png";

const useStyles = theme => ({
    mainContainer: {
        paddingTop: 0
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#999",
        fontSize: "17px",
        marginBottom: 20
    },
    image: {
        width: "100%",
        maxWidth: 200,
        height: "auto",
        top: "50%"
    }
});


export class Partners extends Component {
    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <GridContainer>
                    <GridItem xs={12} >
                        <h3 style={{ textAlign: "center" }}>Partners</h3>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={albaugh} alt="albaugh" />
                    </GridItem>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={Arysta} alt="Arysta" />
                    </GridItem>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={fmc} alt="fmc" />
                    </GridItem>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={basf} alt="basf" />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={globachem} alt="globachem" />
                    </GridItem>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={proplan} alt="proplan" />
                    </GridItem>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={sc} alt="sc" />
                    </GridItem>
                    <GridItem xs={6} md={3}>
                        <img className={classes.image} src={sicit2000} alt="sicit2000" />
                    </GridItem>
                </GridContainer>
                <br></br>
                <br></br>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(Partners);
