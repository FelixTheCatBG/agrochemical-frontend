import React, { Component } from 'react';
import { Typography } from "@material-ui/core";
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import productService from "../../services/ProductService";
import cropService from "../../services/CropService";
import diseaseService from "../../services/DiseaseService";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ProductCard from "./ProductCard";
import AgroLoader from "../../components/Shared/AgroLoader";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = theme => ({
    productsHeader: {
        paddingLeft: 10,
        paddingTop: 15,
        color: "#fff"
    },
    headerContainer: {
        backgroundColor: "#d88e16"
    },
    formControl: {
        width: "100%"
    },
    input: {
        padding: "10px 14px"
    },
    containerPadding: {
        paddingTop: "0px"
    },
    sideBarListItem: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#eee",
        '&:hover': {
            backgroundColor: "#d88e16",
            color: "white"
        }
    },
    active: {
        backgroundColor: "#d88e16 !important",
        color: "#fff !important"
    }
});

class CataloguePage extends Component {
    state = {
        products: [],
        diseasesList: [],
        cropsList: [],
        filterByType: "Fungicide",
        filterBy: '',
        productDetailsModal: false,
        isLoading: true
    }

    changeFilter = (filterName) => {
        this.setState({
            filterByType: filterName
        });
    }

    componentDidMount () {
        productService.getAllProducts()
            .then((res) => {
                this.setState({
                    products: res,
                    isLoading: false
                });
            });
        cropService.getAllCrops()
            .then((res) => {
                this.setState({
                    crops: res
                });
            });
        diseaseService.getAllDiseases()
            .then((res) => {
                this.setState({
                    diseases: res
                });
            });
    }

    renderProductCard = product => {
        return <GridItem style={{ marginTop: 20 }} key={product.id} xs={12} sm={4} >
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        height="140"
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom component="h2">
                            {product.name}
                        </Typography>
                        <Typography noWrap component="p">{product.description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </GridItem>;
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.headerContainer}>
                    <GridContainer>
                        <GridItem xs={8}>
                            <h1 className={classes.productsHeader}>Products</h1>
                        </GridItem>
                    </GridContainer>
                </div>

                <GridContainer style={{ minHeight: 600 }}>
                    <GridItem xs={12} sm={3}>
                        <h3>Categories:</h3>
                        <List style={{ marginTop: 10 }} className={classes.sidenav} component="nav" aria-label="sidenav">
                            <ListItem className={`${classes.sideBarListItem} ${this.state.filterByType === "Fungicide" ? classes.active : null} ${classes.onHover}`} button onClick={() => this.changeFilter("Fungicide")}>
                                <ListItemIcon>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText primary="Fungicides" />
                            </ListItem>
                            <ListItem className={`${classes.sideBarListItem} ${this.state.filterByType === "Herbecide" ? classes.active : null} ${classes.onHover}`} button onClick={() => this.changeFilter("Herbecide")}>
                                <ListItemIcon>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText primary="Herbecides" />
                            </ListItem>
                            <ListItem className={`${classes.sideBarListItem} ${this.state.filterByType === "Insecticide" ? classes.active : null} ${classes.onHover}`} button onClick={() => this.changeFilter("Insecticide")}>
                                <ListItemIcon>
                                    <ChevronRightIcon />
                                </ListItemIcon>
                                <ListItemText primary="Insecticides" />
                            </ListItem>
                        </List>
                        <br></br>
                        <Divider />
                        <br></br>
                        <h3>Filters:</h3>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-chosenDisease-simple">
                                Disease
                            </InputLabel>
                            <Select
                                /* { value={this.state.chosenCategory}
                                 onChange={this.handleInputChange} }*/
                                labelWidth={100}
                                inputProps={{
                                    name: 'chosenDisease',
                                    id: 'outlined-chosenDisease-simple'
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    this.state.diseases && this.state.diseases.map(disease => (
                                        <MenuItem value={disease}>{disease.diseaseName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br></br>   <br></br>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-chosenCrop-simple">
                                Crop
                            </InputLabel>
                            <Select
                                /* { value={this.state.chosenCategory}
                                 onChange={this.handleInputChange} }*/
                                height="25%"
                                labelWidth={100}
                                inputProps={{
                                    name: 'chosenCrop',
                                    id: 'outlined-chosenCrop-simple'
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    this.state.crops && this.state.crops.map(crop => (
                                        <MenuItem value={crop}>{crop.cropName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={9}>
                        <GridContainer body>
                            {!this.state.isLoading ?
                                this.state.products && this.state.products
                                    .filter(product => product.category === this.state.filterByType)
                                    .map(product => <ProductCard key={product.id} product={product} />)
                                : <AgroLoader />
                            }
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(CataloguePage);