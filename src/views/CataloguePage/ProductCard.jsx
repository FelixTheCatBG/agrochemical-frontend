import React, { Component } from 'react';
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import GridItem from '../../components/Grid/GridItem';
import ProductDetailsModal from "./ProductDetailsModal";

export class ProductCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            product: this.props.product,
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
        const { product } = this.props;

        return (
            <GridItem style={{ marginTop: 20 }} key={product.id} xs={12} sm={4} >
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            /* { image={post.image} }*/
                            height="140"
                            title={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Typography noWrap component="p">{product.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={this.handleDetailsDialogOpen} size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                {this.state.openDetailsDialog && <ProductDetailsModal product={this.props.product} handleDialogClose={this.handleDetailsDialogClose} />}
            </GridItem>
        );
    }
}

export default ProductCard;
