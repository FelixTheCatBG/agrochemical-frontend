import React, { Component } from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Typography from "@material-ui/core/Typography";

import fertilizerIcon from "../../assets/img/fertilizerIcon.png";
import productsIcon from "../../assets/img/productsIcon.png";
import truckIcon from "../../assets/img/truckIcon.png";

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
                                <img src={truckIcon} style={{ width: "100px", height: "78px", marginTop: "10px" }} alt="truckIcon" />
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
                                <img src={fertilizerIcon} style={{ width: "70px" }} alt="fertilizer" />
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
                                <img src={productsIcon} style={{ width: "52px", height: "85px" }} alt="fertilizer" />
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
