import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import GridItem from '../../components/Grid/GridItem';
// import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField } from "@material-ui/core";

const useStyles = theme => ({
    bigIndicator: {
        height: 5
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20
    }
});

export class CropTypePicker extends Component {

    // saveAndContinue = (e) => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }

    render () {
        const { values } = this.props;

        return (
            <React.Fragment>
                <h1>Crop Type Picker</h1>
                <h1 className="ui centered">Enter User Details</h1>

                <label>First Name</label>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="First Name"
                    name="firstName"
                    autoComplete="email"
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    autoFocus
                />

                <label>Last Name</label>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="lastName"
                    autoComplete="email"
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    autoFocus
                />

                <label>Email Address</label>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="username"
                    autoComplete="email"
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    autoFocus
                />

                {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={this.saveAndContinue}
                >
                    Next
                </Button> */}
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(CropTypePicker);