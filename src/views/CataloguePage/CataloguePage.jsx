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

const posts = [

    {
        title: "My first post",
        excerpt: "This is my first post with more content inside",
        image: "https://bit.ly/2WNi2Ml"
    },

    {
        title: "My second post",
        excerpt: "This is my second post with more content inside",
        image: "https://bit.ly/2WNi2Ml"
    },

    {
        title: "My third post",
        excerpt: "This is my third post with more content inside",
        image: "https://bit.ly/2WNi2Ml"
    }
];

export default class CataloguePage extends Component {
    state = {
        products: []
    }

    componentDidMount () {
        productService.getAllProducts()
            .then((res) => {
                this.setState({
                    products: res
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
        return <GridItem style={{ marginTop: 20 }} key={product.id} xs={12} sm={4}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        height="140"
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
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
        </GridItem>;
    }

    render () {
        return (
            <GridContainer>

                <GridItem xs={12} sm={3}>Sidebar</GridItem>
                <GridItem xs={12} sm={9}>
                    <GridContainer>
                        {this.state.products && this.state.products.map(product => this.renderProductCard(product))}
                    </GridContainer>

                </GridItem>
                {
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
                                        <Typography component="p">{post.excerpt}</Typography>
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
                }


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
                                    <Typography gutterBottom variant="h5" component="h2">
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
