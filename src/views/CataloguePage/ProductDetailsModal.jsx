import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import '../../styles/SassStyles.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import backgroundImage from "../../assets/img/imagePlaceholder.png";
import ProductsModalTable from "./ProductModalTable.jsx";

class ProductDetailsModal extends Component {
    constructor () {
        super();
        this.state = {
            product: {},
            tableData: [],
            value: 0
        };
    }

    componentDidMount () {
        ProductService.getProduct(this.props.product.id)
            .then((res) => {
                this.setState({
                    product: res
                }, this.seedArray);
            });
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    seedArray = () => {
        const tableData = [];

        this.state.product.productCropDisease.map(x => tableData.push(x));

        this.setState({ tableData });

    }

    render () {
        const { product } = this.state;

        return (
            <Dialog
                maxWidth="800px"
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
                                    <img className="modalProductImage" alt="product" src={backgroundImage} />
                                </span>
                            </div>
                            <div className="productInfoSection">
                                <div className={"storeCardProductHeaderDiv"}>
                                    <h2 style={{ marginBottom: "10px", marginTop: "5px", color: "#EE7629" }} className={"storeCardProductHeader"}>{product.productName}</h2>
                                    <div className="productQuantity">{product.activeIngredient}</div>
                                </div>
                                <h5 style={{ marginBottom: "5px", marginTop: "15px" }}>Description:</h5>
                                <div className="productDescription">{product.description}</div>

                                <div className="productDescription">{product.productDescription}</div>
                                <div className="productDescription">{product.formula}</div>
                                <div className="productDescription">{product.type}</div>


                                <div className="productDescription">{product.productAdvantages}</div>
                            </div>
                            <br></br>
                            <hr></hr>
                            <h3>Application</h3>
                            <ProductsModalTable tableData={this.state.tableData} />

                            <h3>Mechanism of action</h3>
                            <div className="">{product.mechanism}</div>

                            <h3>How to use</h3>
                            <div className="">{product.howToRecommendation}</div>

                            <h3>Packages</h3>
                            {product.productName === "Diagonal" &&
                                <div><div>5 Litres</div>
                                    <div>10 Litres</div>
                                    <div>20 Litres</div></div>
                            }
                            {product.productName === "Domnik 250" &&

                                <div><div>1 Litres</div>
                                    <div>10 Litres</div></div>
                            }
                        </div>
                    </div>
                </DialogContent>
                {/* <DialogActions className="actionsPanelEditModal">
                    <Button onClick={this.props.handleDialogClose} className="badgeDeleteDialogButtons cancel">
                        Cancel
                    </Button>
                </DialogActions> */}
            </Dialog>
        );
    }
}
export default ProductDetailsModal;