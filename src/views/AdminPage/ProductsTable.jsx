import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import GridItem from '../../components/Grid/GridItem';
import { withStyles } from '@material-ui/core/styles';
import adminProductStyles from '../../styles/views/adminProductStyles';
import EditIcon from '@material-ui/icons/Edit';
import Table from "../../components/Shared/Table";
import bowser from "../../utils/bowserUtil";
import DeleteIcon from '@material-ui/icons/Delete';
import ActionsMenu from '../../components/Shared/ActionsMenu';
import ActionsMenuItem from '../../components/Shared/ActionsMenuItem';
import ProductsDeleteModal from "./ProductsDeleteModal";
import ProductsEditModal from "./ProductsEditModal";
import { Button } from "@material-ui/core";

class ProductsTable extends Component {
    constructor (props) {
        super(props);

        this.state = {
            openDeleteDialog: false,
            openEditDialog: false,
            actionMenuOpen: false,
            openActionMenuProduct: {}
        };

        this.isMobile = bowser.mobile || bowser.tablet;

        this.columnMobile = [{
            renderCell: (product, isExpanded) => {
                return (
                    <div className={this.props.classes.info}>
                        <p className={this.props.classes.mobileName}>Name: {product.name}</p>
                        <p className={this.props.classes.mobileName}>Category: <span>{product.category}</span></p>
                        <p className={this.props.classes.mobileName}>Description: <span>{product.description}</span></p>
                        <div className={this.props.classes.info}>
                            {isExpanded &&
                                <span className='expandedInfo'>
                                    <p>Products: {product.name}</p>
                                    <p>Date Created:</p>
                                </span>
                            }
                            {(this.state.actionMenuOpen && this.state.openActionMenuProduct._id === product.id) &&
                                <React.Fragment>
                                    <ActionsMenu parent="order">
                                        <ActionsMenuItem mouseOutEvent={() => this.setState({ actionMenuOpen: false })} action={this.redirectToEdit} actionName="Edit" />
                                        <ActionsMenuItem mouseOutEvent={() => this.setState({ actionMenuOpen: false })} action={this.handleDialogOpen} actionName="Delete" />
                                    </ActionsMenu>
                                </React.Fragment>
                            }
                            <div onClick={() => this.handleActionsMenu(product)} className={this.props.classes.ellipsisContainer}>
                                <i className='far fa-ellipsis-v actionEllipsis'></i>
                            </div>
                        </div>
                    </div>
                );
            },
            colSpan: 2,
            expansion: true
        }];

        this.columns = [
            {
                headerName: 'Name',
                renderCell: (product) => {
                    return (
                        <span className={product.name ?
                            `${this.props.classes.productStatusMobile} ${this.props.classes.productStatusMobileActive}` : undefined}>{product.name}</span>
                    );
                },
                colSpan: 4
            },
            {
                headerName: 'Category',
                renderCell: (product) => {
                    return (
                        <span>{product.category}</span>
                    );
                },
                colSpan: 1
            },
            {
                headerName: 'Manufacturer',
                renderCell: (product) => {
                    return (
                        <span
                        >
                            {product.manufacturer}
                        </span>
                    );
                },
                colSpan: 1
            },
            {
                headerName: 'Actions',
                renderCell: (product) => {
                    return (
                        <React.Fragment>
                            <Link to={`/welcome-note/${product._id}`}>
                                <button title="Edit" onClick={() => this.handleEdit(product.id)} className={`${this.props.classes.actionButton}  ${this.props.classes.actionDeleteButton} edit`}><i><EditIcon /></i></button>
                            </Link>
                            <button title="Delete" onClick={() => this.handleDelete(product.id)} className={`${this.props.classes.actionButton} ${this.props.classes.actionDeleteButton} `} >
                                <i className={`${this.props.classes.iconDeleteStyle} fa fa-trash-alt `}><DeleteIcon /></i>
                            </button>
                        </React.Fragment>
                    );
                },
                colSpan: 1
            }
        ];
    }

    handleActionsMenu = product => {
        document.addEventListener('click', this.handleDisableMenu, true);
        this.setState({
            actionMenuOpen: !this.state.actionMenuOpen,
            openActionMenuProduct: product
        });
    }

    handleDisableMenu = e => {
        const actionMenuIconClass = "editIconContainer";

        if (e.target.className !== actionMenuIconClass) {
            this.setState({
                actionMenuOpen: false
            });
        }
        window.removeEventListener('click', this.handleDisableMenu, true);
    }

    handleDialogOpen = () => {
        this.setState({ openDeleteDialog: true });
    };

    handleDialogClose = () => {
        this.setState({ openDeleteDialog: false });
    };

    handleEditDialogOpen = () => {
        this.setState({ openEditDialog: true });
    };

    handleEditDialogClose = () => {
        this.setState({ openEditDialog: false });
    };

    handleDelete = id => {
        this.setState({
            openDeleteDialog: true,
            openActionMenuProduct: this.props.productsList.find(e => e.id === id)
        });
    }

    handleAddProduct = id => {
        this.setState({
            openDeleteDialog: true,
            openActionMenuProduct: this.props.productsList.find(e => e.id === id)
        });
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <GridItem xs={12} >
                    <h2>Products list</h2>
                </GridItem>
                <GridItem xs={12} sm={6}>

                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Link className={classes.disableUnderline}>
                        <Button
                            onClick={this.handleEditDialogOpen}
                            variant="contained"
                            size="medium"
                            color="secondary"
                            className={classes.callToActionButton}
                        > Create Product</Button>
                    </Link>
                </GridItem>
                <br></br><br></br><br></br><br></br>
                <Table
                    hideHeader={this.isMobile}
                    expandable={this.isMobile}
                    items={this.props.productsList}
                    columns={this.isMobile ? this.columnMobile : this.columns}
                />
                {this.state.openDeleteDialog &&
                    <ProductsDeleteModal
                        product={this.state.openActionMenuProduct}
                        deleteProduct={this.props.deleteProduct}
                        handleDialogClose={this.handleDialogClose}
                    />
                }

                {
                    this.state.openEditDialog &&
                    <ProductsEditModal
                        addProduct={this.props.addProduct}
                        product={this.state.product}
                        handleEditDialogClose={this.handleEditDialogClose}
                        edit={false}
                    />
                }
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(adminProductStyles)(ProductsTable));