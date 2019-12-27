import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import GridItem from '../../components/Grid/GridItem';
// import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import symptomService from "../../services/SymptomService";

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

export class SymptomsPicker extends Component {
    // saveAndContinue = (e) => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }

    // back = (e) => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }

    state = {
        symptoms: []
    }

    componentDidMount () {
        symptomService.getAllSymptoms()
            .then(res => {
                console.log(res);
                this.setState({
                    symptoms: res
                });
            });
    }

    render () {
        return (
            <div>
                <h1>Symptoms Picker</h1>
                {
                    this.state.symptoms.map(symptom => (
                        <div>{symptom.name}</div>
                    ))
                }
                {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={this.saveAndContinue}
                >
                    Next
                </Button> */}
                {/* {this.state.symptoms.map(symptom => (
                    <p>{symptom.name}</p>
                ))} */}
            </div>
        );
    }
}

export default withStyles(useStyles)(SymptomsPicker);