import React, { Component } from 'react';
import bowser from '../../utils/bowserUtil';
//Modal
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export class ProductsDeleteModal
    extends Component {
    constructor () {
        super();

        this.state = {
            product: ''
        };
    }

    componentDidMount () {
        this.setState({
            product: this.props.product
        });
    }

    handleDelete = () => {
        this.props.deleteProduct(this.props.product.id);
        this.props.handleDialogClose();
    };

    render () {
        const { product, handleDialogClose } = this.props;

        return (
            <Dialog
                className='editFeedModal'
                open
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogTitle id="alert-dialog-title" className="editModalTitle">
                    {bowser.mobile ? <div className="closeIconContainer"><i onClick={handleDialogClose} class="fal fa-times closeIconEditModal"></i></div> : ''}
                    Remove Product {product.name}
                </DialogTitle>
                <DialogContent className="comentTextAreaContainer">
                    <DialogContentText>
                        <label htmlFor="editComentTextArea" className="editCommentAreaLabel">Are you sure you want to remove Proudct {product.name}?</label>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="actionsPanelEditModal">
                    <Button onClick={handleDialogClose} className="badgeDeleteDialogButtons cancel">
                        Cancel
                    </Button>
                    <Button onClick={this.handleDelete} className="badgeDeleteDialogButtons">
                        I am sure
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default ProductsDeleteModal;
