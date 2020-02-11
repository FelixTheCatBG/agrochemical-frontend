import React, { Component } from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import CropTypePicker from "../MultiStepForm/CropTypePicker";
import SymptomsPicker from "../MultiStepForm/SymptomsPicker";
import PossibleIllnesses from "../MultiStepForm/PossibleIllnesses";

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

export class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    }

    render () {
        const { step } = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };

        switch (step) {
        case 1:
            return <CropTypePicker
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />;
        case 2:
            return <SymptomsPicker
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />;
        case 3:
            return <PossibleIllnesses
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />;
        default:
            return null;
        }
    }
}

export default withStyles(useStyles)(MainForm);