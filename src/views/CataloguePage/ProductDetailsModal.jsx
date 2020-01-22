import React, { Component } from "react";

import ProductService from "../../services/ProductService";
import '../../styles/SassStyles.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import backgroundImage from "../../assets/img/11.jpg";

class ProductDetailsModal extends Component {
    constructor () {
        super();
        // ProductDetailsModal.__singletonRef = this;
        this.state = {
            product: {}
            // open: false,
            // openLightboxDialog: false,
            // lightboxImages: []
        };
    }

    // static show () {
    //     ProductDetailsModal.__singletonRef.show();
    // }

    // show = () => {
    //     this.setState({ open: true });
    //     this.getProduct();
    // };

    // hideModal = () => {
    //     this.setState({ open: false });
    // };

    // handleOpenLightbox = (event) => {
    //     this.setState({
    //         openLightboxDialog: true,
    //         currentImage: parseInt(event.currentTarget.dataset.index, 10)
    //     });
    // };

    // handleCloseLightbox = () => {
    //     this.setState({
    //         openLightboxDialog: false
    //     });
    // };


    componentDidMount () {
        ProductService.getProduct(this.props.product.id)
            .then((res) => {

                this.setState({
                    product: res
                }, () => console.log(res, "aaa"));
            });
        // ProductService.getProduct(this.props.product.productId).then(response => {
        //     this.setState({ productData: response.data });
        // });
    }

    // renderPhotos (photos) {
    //     const photosForRender = photos.slice(1);
    //     const renderContent = photosForRender.map((photo, i) => <div className={"thumbnailPicture"} key={photo._id} >
    //         <span className="thumbnailPaper"><img className={this.props.classes.cursorOnHover} src={photosUrl(photo.path, "200x200")} alt="" onClick={this.handleOpenLightbox} data-index={i + 1} /></span></div>);

    //     return renderContent;
    // }

    render () {
        const { product } = this.state;

        return (
            <Dialog
                className='productDetailsModal'
                open
                onClose={this.props.handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className="productDetailsModalTitle">
                    <span onClick={this.props.handleDialogClose} className="closeButtonWrapper"><i class="fa fa-times"></i></span>
                </DialogTitle>
                <DialogContent className="comentTextAreaContainer">
                    <div className="storeCardContainer">
                        <div className="storeCardPaper">
                            <div className="productPicturesSection">

                                <span className="thumbnailPaper">
                                    <img alt="" src={backgroundImage} />
                                </span>
                                {console.log(this.state.product)}
                            </div>
                            <div className="productInfoSection">
                                <div className="productName">{product.productName} </div>
                                <h2>Description:</h2>
                                <p>{product.description}</p>
                                <hr></hr>
                                <h2></h2>
                                <div className="productQuantity">{product.ProductName} in Stock</div>
                                <div className="productDescription">{product.description}</div>
                                <div className="productDescription">{product.productCrops && product.productCrops.map(il => (
                                    <div>{il.cropName} - {il.dose} {console.log(il)}</div>
                                ))
                                }
                                </div>
                                <div className="productPrice"> <label className="priceLabel">Price: </label><span className="productPriceNum">{product.category} <i class="fas fa-star starIcon"></i> </span></div>
                                {/* <div className="productButtonContainer">{this.props.employeeOrders.employeeId && <button className="productButton getNow">Get Now</button>}</div> */}
                            </div>
                        </div>
                    </div>
                </DialogContent>
                {/* {(this.state.openLightboxDialog && this.state.productData.photos) && <Lightbox photos={this.state.productData.photos} currentImage={this.state.currentImage} handleCloseLightbox={this.handleCloseLightbox} />} */}
            </Dialog>
        );
    }
}
export default ProductDetailsModal;