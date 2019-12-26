import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import { MobileStepper } from '@material-ui/core';
// import GridContainer from '../../components/Grid/GridContainer';
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Introduction from "../../components/MultiStepForm/Introduction";
import CropTypePicker from "../../components/MultiStepForm/CropTypePicker";
import SymptomsPicker from "../../components/MultiStepForm/SymptomsPicker";
import PossibleIllnesses from "../../components/MultiStepForm/PossibleIllnesses";

const useStyles = theme => ({
    root: {
        width: "100%"
    },
    button: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    nextButton: {
        float: "right",
        color: "white"
    }
});

function getSteps () {
    return [
        "Introduction",
        "Crop Category",
        "Symptom Picker",
        "Results"
    ];
}

const handleChange = input => event => {
    this.setState({ [input]: event.target.value });
};

export class DiagnoserPage extends React.Component {
    constructor () {
        super();
        this.state = {
            activeStep: 0,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: ''
        };

    }

    // const[activeStep, setActiveStep] = React.useState(0);
    // const [ skipped, setSkipped ] = React.useState(new Set());


    // const isStepOptional = step => {
    //   return step === 1;
    // };

    // const isStepSkipped = step => {
    //     return skipped.has(step);
    // };

    handleNext = () => {
        // let newSkipped = skipped;

        // if (isStepSkipped(activeStep)) {
        //     newSkipped = new Set(newSkipped.values());
        //     newSkipped.delete(activeStep);
        // }

        this.setState({
            activeStep: this.state.activeStep + 1
        });
        // setSkipped(newSkipped);
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        });
    };

    // const handleSkip = () => {
    //   if (!isStepOptional(activeStep)) {
    //     // You probably want to guard against something like this,
    //     // it should never occur unless someone's actively trying to break something.
    //     throw new Error("You can't skip a step that isn't optional.");
    //   }

    //   setActiveStep(prevActiveStep => prevActiveStep + 1);
    //   setSkipped(prevSkipped => {
    //     const newSkipped = new Set(prevSkipped.values());
    //     newSkipped.add(activeStep);
    //     return newSkipped;
    //   });
    // };

    handleReset = () => {
        this.setState({
            activeStep: 0
        });
    };

    getStepContent = (step) => {
        switch (step) {
        case 0:
            return <Introduction handleChange={handleChange} values={this.state} />;
        case 1:
            return <CropTypePicker handleChange={handleChange} values={this.state} />;
        case 2:
            return <SymptomsPicker handleChange={handleChange} values={this.state} />;
        case 3:
            return <PossibleIllnesses handleChange={handleChange} values={this.state} />;
        default:
            return "Unknown step";
        }
    }

    render () {
        const steps = getSteps();
        const { activeStep } = this.state;
        const { classes } = this.props;
        // const { firstName, lastName, email, age, city, country } = this.state;

        return (
            <div className={classes.root} >
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>
                                {this.getStepContent(activeStep)}
                            </Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.button}
                                >
                                        Back
                                </Button>

                                {/* {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={`${classes.button} ${classes.nextButton}`}
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        );
    }
}

export default withStyles(useStyles)(DiagnoserPage);