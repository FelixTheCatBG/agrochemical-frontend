import React, { Component } from "react";
import productService from "../../services/ProductService";
import AgroSnackbar from "../../components/Shared/AgroSnackbar";
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import backgroundImage from "../../assets/img/adminBackground.jpg";
import ListItemText from '@material-ui/core/ListItemText';
import { List, ListItem } from '@material-ui/core';
import '../../styles/Feed.scss';
import '../../styles/ActionsMenu.scss';
import withStyles from "@material-ui/core/styles/withStyles";
import ProductsTable from "./ProductsTable";

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
        color: "#fff"
    },
    headerContainer: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgrounAttachment: "fixed",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
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
    },
    callToActionButton: {
        color: "white",
        float: "right"
    },
    callToActionBox: {
        width: "100%",
        backgroundColor: "#EE7629"
    },
    disableUnderline: {
        textDecoration: "none",
        margin: "0 auto"
    }
});

export class AdminPage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            products: [],
            successAction: false,
            deleteAction: false,
            createProductAction: false
        };
    }

    componentDidMount () {
        productService.getAllProducts()
            .then(products =>
                this.setState({ products }));
    }

    onSnackbarClose = () => {
        this.props.history.replace({
            pathname: '/admin',
            state: {}
        });
    };

    deleteProduct = productId => {
        this.setState({
            isLoading: true,
            deleteAction: true
        });

        productService.deleteProduct(productId)
            .then((res) => {
                const products = this.state.products.filter(note => note.id !== productId);

                this.setState({
                    products,
                    isLoading: false,
                    onDelete: true
                });
            });
    };

    addProduct = () => {
        this.setState({
            isLoading: true
        });
        this.setState({
            isLoading: false,
            createProductAction: true,
            products: [ ...this.state.products, { id: 55, name: "New product", description: "Description1", category: "Fungicide" }]
        });
    }

    render () {
        const { deleteAction, createProductAction } = this.state;
        const hasSuccessAction = this.props.location.state && this.props.location.state.success;
        const successAction = hasSuccessAction && this.props.location.state.action;
        const { classes } = this.props;

        return (
            <React.Fragment>
                <React.Fragment>
                    <div className={classes.headerContainer}>
                        <GridContainer>
                            <GridItem xs={8}>
                                <h1 className={classes.productsHeader}>Admin Page</h1>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <GridContainer style={{ minHeight: 600 }}>

                        <GridItem xs={12} sm={3} style={{ borderRight: "1px solid #ccc" }}>
                            <List style={{ marginTop: 10 }} className={classes.sidenav} component="nav" aria-label="sidenav">
                                <ListItem
                                    className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Products" ? classes.active : null} ${classes.onHover}`}
                                    button
                                    onClick={() => this.changeCategory("Products")}
                                >
                                    <ListItemText primary="Products" />
                                </ListItem>
                                <ListItem
                                    className={`${classes.sideBarListItem} ${this.state.filterByCategory === "Diseases" ? classes.active : null} ${classes.onHover}`}
                                    button
                                    onClick={() => this.changeCategory("Diseases")}
                                >
                                    <ListItemText primary="Diseases" />
                                </ListItem>

                            </List>
                        </GridItem>

                        <GridItem xs={12} sm={9}>
                            <GridContainer body>
                                <ProductsTable addProduct={this.addProduct} productsList={this.state.products} deleteProduct={this.deleteProduct} />
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                </React.Fragment>
                {deleteAction && <AgroSnackbar type={'success'} message={`Delete Successful`} onSnackbarClose={this.onSnackbarClose} />}
                {successAction && <AgroSnackbar type={'success'} message={`${successAction} Successful`} onSnackbarClose={this.onSnackbarClose} />}
                {createProductAction && <AgroSnackbar type={'success'} message={`Create Product Successful`} onSnackbarClose={this.onSnackbarClose} />}
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(AdminPage);
