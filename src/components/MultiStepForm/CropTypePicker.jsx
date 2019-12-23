import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import GridItem from '../../components/Grid/GridItem';
// import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from "@material-ui/core";

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

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render () {
        const { values } = this.props;

        return (
            <React.Fragment>
                <h1 className="ui centered">Enter User Details</h1>

                <label>First Name</label>
                <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                />

                <label>Last Name</label>
                <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                />

                <label>Email Address</label>
                <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                />

                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(CropTypePicker);