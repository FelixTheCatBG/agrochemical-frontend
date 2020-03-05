import React, { Component } from 'react';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import backgroundImage from "../../assets/img/homeBackground.jpeg";

const useStyles = theme => ({
    section: {
        padding: "70px 0"
    },
    title: {
        marginBottom: "50px",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: "center"
    },
    description: {
        color: "#999",
        textAlign: "center"
    },
    textCenter: {
        textAlign: "center"
    },
    textArea: {
        marginRight: "15px",
        marginLeft: "15px"
    },
    infoArea: {
        maxWidth: "360px",
        margin: "0 auto",
        padding: "0px"
    },
    iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px"
    },
    info: {
        color: "#333"
    },

    icon: {
        width: "36px",
        height: "36px"
    },
    descriptionWrapper: {
        color: "#333",
        overflow: "hidden"
    },
    description2: {
        color: "#333",
        overflow: "hidden",
        marginTop: "0px",
        fontSize: "14px"
    },
    iconWrapperVertical: {
        float: "none"
    },
    iconVertical: {
        width: "61px",
        height: "61px"
    },
    callToActionButton: {
        color: "white",
        marginTop: 10
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
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 30, 0.4)"
    }
});

export class ContactPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            description: ""
        };
    }


    handleChangeInput = input => event => {
        this.setState({ [input]: event.target.value });
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.headerContainer}>
                    <GridContainer>
                        <GridItem xs={12}>
                            <h1 className={classes.productsHeader}>Contacts page</h1>
                        </GridItem>
                    </GridContainer>
                </div>

                <GridContainer style={{ marginTop: 10 }} body>
                    <GridItem xs={12} sm={6}>
                        <h2>Contact info</h2>
                        <h4>Location</h4>
                        <p>Plovdiv 4004, <br></br>Komatevska str. 73</p>
                        <h4>Phone number</h4>
                        <p ><i ></i>032/ 69 00 29</p>
                        <h4>E-mail</h4>
                        <p><i ></i>agrochemical2000@gmail.com</p>
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <h2 className="ui centered">E-mail form</h2>
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

                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.callToActionButton}
                        > Send Email</Button>
                    </GridItem>

                </GridContainer>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(ContactPage);