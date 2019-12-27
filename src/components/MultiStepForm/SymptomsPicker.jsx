import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
// import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import symptomService from "../../services/SymptomService";
import GridContainer from '../Grid/GridContainer';
import Chip from '@material-ui/core/Chip';


const useStyles = theme => ({
    bigIndicator: {
        height: 5
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20
    },
    selectedChips: {
        margin: 10
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
        symptoms: [],
        pickedSymptoms: []
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

    handleClick = (symptom) => {
        const newArray = this.state.symptoms.filter(s => s.id !== symptom.id).slice(0);


        this.setState({
            pickedSymptoms: [ ...this.state.pickedSymptoms, symptom ],
            symptoms: newArray
        });
    };

    handleDelete = (symptom) => {
        const newArray = this.state.pickedSymptoms.filter(s => s.id !== symptom.id).slice(0);

        this.setState({
            pickedSymptoms: newArray,
            symptoms: [ ...this.state.symptoms, symptom ]
        });
    };

    render () {
        const { classes } = this.props;

        return (
            <GridContainer>
                <GridItem xs={12}>
                    <h1>Symptoms Picker</h1>
                </GridItem>
                <GridItem xs={6}>
                    {
                        this.state.symptoms.map(symptom => (
                            <Chip
                                className={classes.selectedChips}
                                label={symptom.name}
                                clickable
                                color="primary"
                                onClick={() => this.handleClick(symptom)}
                                variant="outlined"
                            />
                        ))
                    }
                </GridItem>
                <GridItem xs={6}>
                    {
                        this.state.pickedSymptoms.map(symptom => (
                            <Chip
                                className={classes.selectedChips}
                                label={symptom.name}
                                onDelete={() => this.handleDelete(symptom)}
                                color="primary"
                                variant="outlined"
                            />
                        ))
                    }
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(useStyles)(SymptomsPicker);