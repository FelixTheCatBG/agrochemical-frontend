import React, { Component } from 'react';
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import GridItem from '../../components/Grid/GridItem';
import ProductDetailsModal from "./ProductDetailsModal";
import backgroundImage from "../../assets/img/imagePlaceholder.png";
import withStyles from "@material-ui/core/styles/withStyles";

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
    }
});

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
        const { product, classes } = this.props;

        return (
            <GridItem style={{ marginTop: 20 }} key={product.id} xs={12} sm={4} >
                <Card className={classes.cardBorder}>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        image={backgroundImage}
                        height="auto"
                        width="100%"
                        title={product.name}
                    />
                    <CardContent>
                        <h5 noWrap className={classes.cardHeading}>{product.name}</h5>
                        <Typography className={classes.tooltip} noWrap component="p">{product.description}</Typography>
                    </CardContent>

                    <CardActions>
                        <Button onClick={this.handleDetailsDialogOpen} size="small" color="secondary">
                            Read More
                        </Button>
                    </CardActions>
                </Card>
                {this.state.openDetailsDialog && <ProductDetailsModal product={this.props.product} handleDialogClose={this.handleDetailsDialogClose} />}
            </GridItem>
        );
    }
}

export default withStyles(useStyles)(ProductCard);
