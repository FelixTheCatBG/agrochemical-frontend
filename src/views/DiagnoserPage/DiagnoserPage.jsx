import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Introduction from "./MultiStepForm/Introduction";
import CropTypePicker from "./MultiStepForm/CropTypePicker";
import SymptomsPicker from "./MultiStepForm/SymptomsPicker";
import PossibleIllnesses from "./MultiStepForm/PossibleIllnesses";
import GridContainer from '../../components/Grid/GridContainer';

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
    },
    stepperBox: {
        maxWidth: "80%",
        margin: "0 auto",
        border: "1px solid #eee",
        borderRadius: 5,
        padding: 30
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

export class DiagnoserPage extends React.Component {
    constructor () {
        super();
        this.state = {
            activeStep: 0,
            chosenCategory: {},
            chosenSymptoms: [],
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

    handleNext = (e) => {
        // let newSkipped = skipped;

        // if (isStepSkipped(activeStep)) {
        //     newSkipped = new Set(newSkipped.values());
        //     newSkipped.delete(activeStep);
        // }
        e.preventDefault();

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

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
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
            return <Introduction handleChange={this.handleChange} values={this.state} />;
        case 1:
            return <CropTypePicker handleChange={this.handleChange} values={this.state} />;
        case 2:
            return <SymptomsPicker handleChange={this.handleChange} values={this.state} />;
        case 3:
            return <PossibleIllnesses handleChange={this.handleChange} values={this.state} />;
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
            <GridContainer body>
                <div className={classes.root} >
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
                            <div className={classes.stepperBox}>
                                <Stepper style={{ margin: 30, marginTop: 40 }} activeStep={activeStep}>
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
                </div>
            </GridContainer>
        );
    }
}

export default withStyles(useStyles)(DiagnoserPage);