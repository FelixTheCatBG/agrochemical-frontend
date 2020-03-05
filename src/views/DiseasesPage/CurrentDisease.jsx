import React, { Component } from 'react';
// import { Typography } from "@material-ui/core";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import GridItem from '../../components/Grid/GridItem';
// import backgroundImage from "../../assets/img/imagePlaceholder.png";
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia";
import mildew from "../../assets/img/11.jpg";
import rot from "../../assets/img/22.jpg";
import ProductCard from "../CataloguePage/ProductCard";

import GridContainer from '../../components/Grid/GridContainer';
// import Chip from '@material-ui/core/Chip';
const useStyles = theme => ({
    cardBorder: {
        border: "1px dense #DCDCDC"
    },
    cardHeading: {
        marginTop: "0px"
    },
    tooltip: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: 30
    },
    selectedChips: {
        margin: 10
    }
});

export class CurrentDisease extends Component {
    constructor (props) {
        super(props);
        this.state = {
            openDetailsDialog: false
        };
    }

    handleDetailsDialogOpen = () => {
        this.setState({
            openDetailsDialog: true
        });
    };

    handleDetailsDialogClose = () => {
        this.setState({
            openDetailsDialog: false
        });
    };

    render () {
        const { disease } = this.props;

        return (
            <GridItem style={{ marginTop: 20 }} xs={12} >


                <h2> {disease.diseaseName}</h2>
                {disease.imgPath === "mildew" && <CardMedia
                    component="img"
                    image={mildew}
                    height="300px"
                    width="50px"
                />}
                {disease.imgPath === "rot" && <CardMedia
                    component="img"
                    image={rot}
                    height="300px"
                    width="50px"
                />}

                <h4>Description</h4>
                <p> {disease.diseaseDescription}</p>
                <h4>Symptoms</h4>
                <p>{disease.symptomsDescription}</p>
                <h4>Treatment</h4>
                <p>{disease.treatment}</p>
                <h4>Recommended products</h4>
                <GridContainer> {!this.state.isLoading ?
                    this.props.products && this.props.products
                        .map(product => <ProductCard key={product.id} product={product} />)
                    : "null"
                }</GridContainer>

            </GridItem>
        );
    }
}

export default withStyles(useStyles)(CurrentDisease);
