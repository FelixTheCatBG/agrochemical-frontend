import React, { Component } from "react";

//Modal
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import bowser from '../../utils/bowserUtil';


export class ProductsEditModal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            products: [],
            successAction: false,
            deleteAction: false,
            productName: "",
            activeIngredient: "",
            description: '',
            manufacturer: '',
            howToUse: ''
        };
    }

    // componentDidMount () {
    //     productService.getAllProducts()
    //         .then(products =>
    //             this.setState({ products }));
    // }

    handleAddProduct = () => {
        this.setState({
            isLoading: true,
            deleteAction: true
        });
        this.props.addProduct();
        this.props.handleEditDialogClose();
    };

    handleChangeInput = input => event => {
        this.setState({ [input]: event.target.value });
    }

    render () {
        const { product, handleEditDialogClose, edit } = this.props;

        return (
            <Dialog
                className='editFeedModal'
                open
                onClose={handleEditDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className="editModalTitle">
                    {bowser.mobile ? <div className="closeIconContainer"><i onClick={handleEditDialogClose} class="fal fa-times closeIconEditModal"></i></div> : ''}
                    {edit ? `Edit Product ${product.name}` : "Add Product"}
                </DialogTitle>
                <DialogContent className="comentTextAreaContainer">

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        autoComplete="email"
                        onChange={this.handleChangeInput('firstName')}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lastname"
                        onChange={this.handleChangeInput('lastName')}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={this.handleChangeInput('email')}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        autoComplete="email"
                        onChange={this.handleChangeInput('phoneNumber')}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoComplete="description"
                        multiline
                        rows="6"
                        onChange={this.handleChangeInput('description')}
                    />

                </DialogContent>
                <DialogActions className="actionsPanelEditModal">
                    <Button onClick={handleEditDialogClose} className="badgeDeleteDialogButtons cancel">
                        Cancel
                    </Button>

                    {edit ?
                        <Button onClick={this.handleEditProduct} className="badgeDeleteDialogButtons">
                            Edit product
                        </Button> :
                        <Button onClick={this.handleAddProduct} className="badgeDeleteDialogButtons">
                            Create
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        );
    }
}

export default ProductsEditModal;
