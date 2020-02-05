import React, { Component } from 'react';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

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

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    };

    handleChangeInput = input => event => {
        this.setState({ [input]: event.target.value });
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <GridContainer style={{ marginTop: 60 }} body>
                    <GridItem xs={12} sm={6}>
                        <h1>Contact info</h1>
                        <h3>Location</h3>
                        <p>Plovdiv 4004, <br></br>Komatevska str. 73</p>
                        <h3>Phone number</h3>
                        <p ><i ></i>032/ 69 00 29</p>
                        <h3>E-mail</h3>
                        <p><i ></i>agrochemical2000@gmail.com</p>
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <h1 className="ui centered">E-mail form</h1>

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
                            onChange={this.handleChangeInput('email')}
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