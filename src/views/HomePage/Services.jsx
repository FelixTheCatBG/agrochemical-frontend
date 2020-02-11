import React, { Component } from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Typography from "@material-ui/core/Typography";

import fertilizerIcon from "../../assets/img/fertilizer.png";
import productsIcon from "../../assets/img/products.png";
import truckIcon from "../../assets/img/truck.png";

export class Services extends Component {
    render () {
        return (
            <React.Fragment>
                <GridContainer style={{ marginTop: "30px" }}>
                    <GridItem xs={12} >
                        <Typography variant="h4" align="center" component="h2" gutterBottom>
                            Our services
                        </Typography>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} md={4}>
                        <div className="service-item">
                            <div className="icon-container">
                                <img className="servicesIcons truck" src={truckIcon} alt="truckIcon" />
                            </div>

                            <div className="media-container">
                                <span className="service-item-title">Plant protection</span>
                                <div className="service-item-description">Imports and Distribution of plant protection products in Bulgaria
                                </div>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs={12} md={4}>
                        <div className="service-item">

                            <div className="icon-container">
                                <img className="servicesIcons" src={fertilizerIcon} alt="fertilizer" />
                            </div>

                            <div className="media-container">
                                <span className="service-item-title">Fertilizers</span>
                                <div className="service-item-description">Imports of high-quality plant fertilizers that can improve your profit
                                </div>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs={12} md={4}>
                        <div className="service-item">
                            <div className="icon-container">
                                <img className="servicesIcons" src={productsIcon} alt="fertilizer" />
                            </div>

                            <div className="media-container">
                                <span className="service-item-title">Small Packaging</span>
                                <div className="service-item-description">Offer a variety of agricultural products into small packages also
                                </div>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
                <br></br>
                <br></br>
            </React.Fragment>
        );
    }
}

export default Services;
