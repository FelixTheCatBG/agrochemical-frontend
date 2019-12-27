import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import GridItem from '../../components/Grid/GridItem';
// import GridContainer from '../../components/Grid/GridContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField } from "@material-ui/core";
import cropService from "../../services/CropService";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
    formControl: {
        width: "100%",
        minWidth: 120
    }
});

export class CropTypePicker extends Component {
    state = {
        categories: [],
        chosenCategory: {},
        age: ""
    }

    // saveAndContinue = (e) => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }
    componentDidMount () {
        cropService.getAllCategories()
            .then((res) => {
                this.setState({
                    categories: res
                });
            });

    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        }, () => console.log(this.state.chosenCategory));
    };

    render () {
        const { values, classes } = this.props;

        return (
            <React.Fragment>
                <h1>Crop Type Picker</h1>
                {/* {
                    this.state.categories.map(category => (
                        <div>{category.name}</div>
                    ))
                } */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-chosenCategory-simple">
                        Category
                    </InputLabel>
                    <Select
                        value={this.state.chosenCategory}
                        onChange={this.handleInputChange}
                        labelWidth={100}
                        inputProps={{
                            name: 'chosenCategory',
                            id: 'outlined-chosenCategory-simple'
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            this.state.categories.map(category => (
                                <MenuItem value={category}>{category.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <h1 className="ui centered">Enter User Details</h1>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
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
                    id="lastName"
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