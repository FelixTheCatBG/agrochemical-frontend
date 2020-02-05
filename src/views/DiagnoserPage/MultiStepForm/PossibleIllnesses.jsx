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

export class PossibleIllnesses extends Component {
    render () {

        return (
            <div>
                <h1>PossibleIllnesses</h1>
            </div>
        );
    }
}

export default withStyles(useStyles)(PossibleIllnesses);