import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import backgroundImage from "../../assets/img/homeBackground.jpeg";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import OurGoal from "./OurGoal";
import Partners from "./Partners";
import Services from "./Services";


const useStyles = theme => ({
    mainImage: {
        position: 'relative',
        backgroundColor: "#6c2814",
        color: theme.palette.common.white,
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: "520px",
        textAlign: "center"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    mainImageContent: {
        textAlign: "center",
        position: 'relative',
        padding: "30px 0px 30px 0px",
        color: theme.palette.common.white
    },
    callToActionHeader: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: "white",
        fontSize: "1.3rem",
        marginBottom: 20
    },
    callToActionButton: {
        color: "white"
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
        backgroundColor: "#EE7629"
    },
    section: {
        padding: "70px 0"
    },
    title: {
        color: theme.palette.common.white,
        marginBottom: "50px",
        marginTop: "20px",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "3.35em"
    },
    description: {
        // color: "#999",
        color: theme.palette.common.white,
        textAlign: "center",
        textDecoration: "none",
        fontSize: "1.35rem"
    },
    textCenter: {
        textAlign: "center"
    },
    textArea: {
        marginRight: "15px",
        marginLeft: "15px"
    },
    infoArea: {
        maxWidth: "360px",
        margin: "0 auto",
        padding: "0px"
    },
    iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px"
    },
    info: {
        color: "#333"
    },
    icon: {
        width: "36px",
        height: "36px"
    },
    descriptionWrapper: {

        overflow: "hidden"
    },
    description2: {
        overflow: "hidden",
        marginTop: "0px",
        fontSize: "14px"
    },
    iconWrapperVertical: {
        float: "none"
    },
    iconVertical: {
        width: "61px",
        height: "61px"
    },
    disableUnderline: {
        textDecoration: "none",
        margin: "0 auto"
    }
});

export class HomePage extends Component {
    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Paper className={classes.mainImage} style={{ backgroundImage: `url(${backgroundImage})` }}>
                    {<img style={{ display: 'none' }} src={backgroundImage} alt={"background"} />}
                    <div className={classes.overlay} />
                    <div className={`${classes.mainImageContent} ${classes.section}`}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h1 className={classes.title}>
                                    National leader in plant protection.
                                </h1>
                                <h3 className={classes.description}>
                                    Agrochemical's main activity is imports, distribution and direct sales of high-quality plant protection products in Bulgaria.
                                    Agrochemical takes over 35 percentage on the market of herbicides used to control broad-knit cereals.
                                </h3>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Paper>
                <div className={classes.callToActionBox}>
                    <GridContainer >
                        <GridItem xs={12} sm={8}>
                            <Typography className={classes.callToActionHeader}>Check out the catalogue with the products that we offer</Typography>
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                            <Link to="/catalogue" className={classes.disableUnderline}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className={classes.callToActionButton}
                                > Go to Catalogue</Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                </div>

                <Services />
                <OurGoal />
                <Partners />

            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(HomePage);
