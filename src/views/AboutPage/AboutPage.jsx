import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import GridItem from '../../components/Grid/GridItem';
// import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import MainForm from "../../components/MultiStepForm/MainForm";

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

export class AboutPage extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render () {
        // const { classes } = this.props;
        // const { value } = this.state;

        return (
            <div>
                <MainForm />
            </div>
        );
    }
}

export default withStyles(useStyles)(AboutPage);