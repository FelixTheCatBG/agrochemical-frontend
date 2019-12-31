import React, { Component } from 'react';
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import productService from "../../services/ProductService";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ProductCard from "./ProductCard";
import AgroLoader from "../../components/Shared/AgroLoader";
import withStyles from "@material-ui/core/styles/withStyles";

// const posts = [

//     {
//         title: "My first post",
//         excerpt: "This is my first post with more content inside",
//         image: "https://bit.ly/2WNi2Ml"
//     },

//     {
//         title: "My second post",
//         excerpt: "This is my second post with more content inside",
//         image: "https://bit.ly/2WNi2Ml"
//     },

//     {
//         title: "My third post",
//         excerpt: "This is my third post with more content inside",
//         image: "https://bit.ly/2WNi2Ml"
//     }
// ];

const useStyles = theme => ({
    // root: {
    //     flexGrow: 1
    // },
    active: {
        backgroundColor: "#37b44e",
        color: "#fff"
    }
});


class CataloguePage extends Component {
    state = {
        products: [],
        filterByType: "Pesticide",
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

        productService.getProduct(2)
            .then((res) => {
                this.setState({
                    product: res
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
            <GridContainer style={{ minHeight: 600 }}>

                <GridItem xs={12} sm={3}>
                    <List style={{ marginTop: 30 }} component="nav" aria-label="main mailbox folders">
                        <ListItem className={this.state.filterByType === "Pesticide" ? classes.active : null} button onClick={() => this.changeFilter("Pesticide")}>
                            {/* <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Pesticides" />
                        </ListItem>
                        <ListItem className={this.state.filterByType === "Insecticide" ? classes.active : null} button onClick={() => this.changeFilter("Insecticide")}>
                            {/* <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Insecticide" />
                        </ListItem>
                        <ListItem className={this.state.filterByType === "Fungicides" ? classes.active : null} button onClick={() => this.changeFilter("Fungicides")}>
                            {/* <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Third" />
                        </ListItem>
                    </List>
                    <Divider />
                </GridItem>

                <GridItem xs={12} sm={9}>
                    <GridContainer body>
                        {/* {this.state.products && this.state.products
                            .filter(product => product.category === this.state.filterByType)
                            .map(product => this.renderProductCard(product))
                        } */}
                        {!this.state.isLoading ?
                            this.state.products && this.state.products
                                .filter(product => product.category === this.state.filterByType)
                                .map(product => <ProductCard product={product} />)
                            : <AgroLoader />
                        }
                    </GridContainer>

                </GridItem>
                {/* {
                    posts.map(post => (
                        <GridItem key={post.title} xs={12} sm={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={post.image}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography noWrap component="p">{post.excerpt}</Typography>
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
                        </GridItem>
                    ))
                } */}


                {this.state.products && this.state.products.map(product => (
                    <GridItem style={{ marginTop: 20 }} key={product.id} xs={12} sm={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={product.name}
                                    height="140"

                                    title={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom >
                                        {product.name}
                                    </Typography>
                                    <Typography component="p">{product.description}</Typography>
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
                    </GridItem>
                ))}
            </GridContainer>

        );
    }
}

export default withStyles(useStyles)(CataloguePage);