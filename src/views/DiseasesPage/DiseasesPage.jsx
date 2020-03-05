import React, { Component } from "react";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import backgroundImage from "../../assets/img/diseasesBackground.jpg";
import ListItemText from '@material-ui/core/ListItemText';
import { List, ListItem } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import diseaseService from "../../services/DiseaseService";
import productService from "../../services/ProductService";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CurrentDisease from './CurrentDisease';
import Divider from '@material-ui/core/Divider';

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
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgrounAttachment: "fixed",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 30, 0.4)"
    },
    sideBarListItem: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "#eee",
        '&:hover': {
            backgroundColor: "#EE7629",
            color: "white"
        }
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    active: {
        backgroundColor: "#EE7629 !important",
        color: "#fff !important"
    },
    collapseMenu: {
        marginBottom: 5
    },
    collapseList: {
        backgroundColor: "#e8971478 !important"
    }
});

export class DiseasesPage extends Component {
    state = {
        filterByCategory: "",
        diseases: [],
        selectedDiseaseId: 0,
        isLoading: true,
        tags: [],
        currentDisease: "",
        products: []
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
        productService.getCategory(1)
            .then((res) => {
                console.log(res);
                this.setState({
                    products: res.products
                }, () => console.log(this.state.products, "res"));
            });
    }

    changeCurrentDisease = disease => {
        this.setState({
            currentDisease: disease
        }, () => console.log(disease));
    }

    onTagsChange = (event, values) => {
        this.setState({
            currentDisease: values
        }, () => console.log(values));
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
                    <GridItem xs={12} sm={3} style={{ borderRight: "1px solid #ccc" }} >
                        <List style={{ marginTop: 10 }} className={classes.sidenav} component="nav" aria-label="sidenav">
                            <ListItem
                                className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Garden Pests" ? classes.active : null} ${classes.onHover}`}
                                button
                                onClick={() => this.changeCategory("Garden Pests")}
                            >
                                <ListItemText primary="Bacterial Diseases" />
                                {filterByCategory === "Garden Pests" ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={filterByCategory === "Garden Pests"} className={classes.collapseMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        diseases && diseases
                                            .map(disease => (
                                                <ListItem key={disease.name} button className={classes.nested}>
                                                    <ListItemText primary={disease.diseaseName} onClick={() => this.changeCurrentDisease(disease)} />
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
                                <ListItemText primary="Fungal Diseases" />
                                {filterByCategory === "Plant Diseases" ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={filterByCategory === "Plant Diseases"} timeout="auto" unmountOnExit>
                                <List component="div" className={classes.collapseList} disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemText primary="Plant Disease 1" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                        <br></br>
                        <Divider />
                        <br></br>
                        <h5 style={{ marginBottom: "5px" }}>Search:</h5>
                        <Autocomplete
                            options={this.state.diseases}
                            getOptionLabel={option => option.diseaseName}
                            onChange={this.onTagsChange}
                            defaultValue={""}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Search"
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={9}>
                        <GridContainer body>
                            {!this.state.currentDisease &&
                                <div>
                                    <h2>Plant diseases</h2>
                                    <p>Plant disease, an impairment of the normal state of a plant that interrupts or modifies its vital functions. All species of plants, wild and cultivated alike, are subject to disease. Although each species is susceptible to characteristic diseases, these are, in each case, relatively few in number. The occurrence and prevalence of plant diseases vary from season to season, depending on the presence of the pathogen, environmental conditions, and the crops and varieties grown. Some plant varieties are particularly subject to outbreaks of diseases while others are more resistant to them. </p>
                                    <h4>Signs and symptoms of plant disease: Is it fungal, viral or bacterial?</h4>
                                    <p>Familiarity with the way plant diseases are visually identified can help you diagnose problems.</p>
                                    <p>Most plant diseases – around 85 percent – are caused by fungal or fungal-like organisms. However, other serious diseases of food and feed crops are caused by viral and bacterial organisms. Certain nematodes also cause plant disease. Some plant diseases are classified as “abiotic,” or diseases that are non-infectious and include damage from air pollution, nutritional deficiencies or toxicities, and grow under less than optimal conditions. For now, we’ll look at diseases caused by the three main pathogenic microbes: fungus, bacteria and virus. If plant disease is suspected, careful attention to plant appearance can give a good clue regarding the type of pathogen involved.</p>
                                    <p>A sign of plant disease is physical evidence of the pathogen. For example, fungal fruiting bodies are a sign of disease. When you look at powdery mildew on a lilac leaf, you’re actually looking at the parasitic fungal disease organism itself (Microsphaera alni). Bacterial canker of stone fruits causes gummosis, a bacterial exudate emerging from the cankers. The thick, liquid exudate is primarily composed of bacteria and is a sign of the disease, although the canker itself is composed of plant tissue and is a symptom.</p>
                                </div>
                            }
                            {this.state.currentDisease && <CurrentDisease products={this.state.products} disease={this.state.currentDisease} />}
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(DiseasesPage);
