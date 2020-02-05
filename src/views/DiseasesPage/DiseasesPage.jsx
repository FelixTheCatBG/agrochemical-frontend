import React, { Component } from "react";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import backgroundImage from "../../assets/img/homeBackground.jpeg";
import ListItemText from '@material-ui/core/ListItemText';
import { List, ListItem } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import diseaseService from "../../services/DiseaseService";

const useStyles = theme => ({
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
    productsHeader: {
        paddingLeft: 10,
        paddingTop: 15,
        color: "white"
    },
    headerContainer: {
        backgroundColor: "#d88e16"
    },
    sideBarListItem: {
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#eee",
        '&:hover': {
            backgroundColor: "#d88e16",
            color: "white"
        }
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    active: {
        backgroundColor: "#d88e16 !important",
        color: "#fff !important"
    },
    collapseMenu: {
        marginBottom: 5
    }
});

export class DiseasesPage extends Component {
    state = {
        filterByCategory: "Garden Pests",
        diseases: [],
        selectedDiseaseId: 0,
        isLoading: true
    }

    changeCategory = (filterName) => {
        this.setState({
            filterByCategory: filterName
        });
    }

    componentDidMount () {
        diseaseService.getAllDiseases()
            .then((res) => {
                this.setState({
                    diseases: res
                });
            });
    }

    render () {
        const { classes } = this.props;
        const { filterByCategory, diseases } = this.state;

        return (
            <React.Fragment>
                <div className={classes.headerContainer}>
                    <GridContainer>
                        <GridItem xs={8}>
                            <h1 className={classes.productsHeader}>Diseases</h1>
                        </GridItem>
                    </GridContainer>
                </div>
                <GridContainer style={{ minHeight: 600 }}>
                    <GridItem xs={12} sm={3}>
                        <List style={{ marginTop: 10 }} className={classes.sidenav} component="nav" aria-label="sidenav">
                            <ListItem
                                className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Garden Pests" ? classes.active : null} ${classes.onHover}`}
                                button
                                onClick={() => this.changeCategory("Garden Pests")}
                            >
                                <ListItemText primary="Garden Pests" />
                                {filterByCategory === "Garden Pests" ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={filterByCategory === "Garden Pests"} className={classes.collapseMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        diseases && diseases
                                            .map(disease => (
                                                <ListItem button className={classes.nested}>
                                                    <ListItemText primary={disease.diseaseName} />
                                                </ListItem>
                                            ))
                                    }

                                </List>
                            </Collapse>
                            <ListItem
                                className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Plant Diseases" ? classes.active : null} ${classes.onHover}`}
                                button
                                onClick={() => this.changeCategory("Plant Diseases")}
                            >
                                <ListItemText primary="Plant Diseases" />
                                {filterByCategory === "Plant Diseases" ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={filterByCategory === "Plant Diseases"} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Plant Disease 1" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </GridItem>

                    <GridItem xs={12} sm={9}>
                        <GridContainer body>
                            {/* {this.state.products && this.state.products
                            .filter(product => product.category === this.state.filterByType)
                            .map(product => this.renderProductCard(product))
                        } */}

                            {/* {!this.state.isLoading ?
                                this.state.products && this.state.products
                                    .filter(product => product.category === this.state.filterByType)
                                    .map(product => <ProductCard product={product} />)
                                : <AgroLoader />
                            } */}
                            {/* <CurrentDisease /> */}
                        </GridContainer>
                    </GridItem>
                </GridContainer>

            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(DiseasesPage);
