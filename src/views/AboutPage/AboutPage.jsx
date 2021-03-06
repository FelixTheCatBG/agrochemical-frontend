import React, { Component } from 'react';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";
import Company from "./Company";
import Distributors from "./Distributors";
import Partners from "./Partners";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import backgroundImage from "../../assets/img/aboutBackground.jpg";

const useStyles = theme => ({
    productsHeader: {
        paddingLeft: 10,
        paddingTop: 15,
        color: "#fff"
    },
    headerContainer: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgrounAttachment: "fixed",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 30, 0.4)"
    },
    formControl: {
        width: "80%"
    },
    input: {
        padding: "10px 14px"
    },
    containerPadding: {
        paddingTop: "0px"
    },
    sideBarListItem: {
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#eee",
        '&:hover': {
            backgroundColor: "#EE7629",
            color: "white"
        }
    },
    active: {
        backgroundColor: "#EE7629 !important",
        color: "#fff !important"
    }
});

class AboutPage extends Component {
    state = {
        filterByCategory: "Company",
        isLoading: true
    }

    changeCategory = (filterName) => {
        this.setState({
            filterByCategory: filterName
        });
    }

    renderCategoryContent = () => {
        switch (this.state.filterByCategory) {
        case 'Company':
            return <Company />;
        case 'Partners':
            return <Partners />;
        case 'Distributors':
            return <Distributors />;
        default:
            return <h1>Couldn't find such a page</h1>;
        }
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.headerContainer}>
                    <GridContainer>
                        <GridItem xs={12}>
                            <h1 className={classes.productsHeader}>About Page</h1>
                        </GridItem>
                    </GridContainer>
                </div>
                <GridContainer style={{ minHeight: 600 }}>
                    <GridItem xs={12} sm={3} style={{ borderRight: "1px solid #ccc" }} >
                        <List style={{ marginTop: 10 }} className={classes.sidenav} component="nav" aria-label="sidenav">
                            <ListItem className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Company" ? classes.active : null} ${classes.onHover}`} button onClick={() => this.changeCategory("Company")}>
                                <ListItemIcon>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText primary="Company" />
                            </ListItem>
                            <ListItem className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Partners" ? classes.active : null} ${classes.onHover}`} button onClick={() => this.changeCategory("Partners")}>
                                <ListItemIcon>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText primary="Partners" />
                            </ListItem>
                            <ListItem className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Distributors" ? classes.active : null} ${classes.onHover}`} button onClick={() => this.changeCategory("Distributors")}>
                                <ListItemIcon>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText primary="Distributors" />
                            </ListItem>
                        </List>
                    </GridItem>

                    <GridItem xs={12} sm={9}>
                        {this.renderCategoryContent()}
                    </GridItem>
                </GridContainer>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(AboutPage);