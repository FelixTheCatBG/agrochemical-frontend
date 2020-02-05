import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

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

export class Introduction extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {

        return (
            <div>
                <h1>Introduction</h1>
            </div>
        );
    }
}

export default withStyles(useStyles)(Introduction);