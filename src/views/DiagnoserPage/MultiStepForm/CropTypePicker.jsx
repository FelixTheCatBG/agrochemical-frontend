import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import cropService from "../../../services/CropService";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from "@material-ui/core";

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
        crops: [],
        chosenCategory: {},
        age: ""
    }

    componentDidMount () {
        cropService.getAllCrops()
            .then((res) => {
                this.setState({
                    crops: res
                });
            });
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    };

    render () {
        const { values, classes } = this.props;

        return (
            <React.Fragment>
                <h1>Crop Type Picker</h1>
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
                            this.state.crops.map(category => (
                                <MenuItem value={category}>{category.cropName}</MenuItem>
                            ))
                        }
                    </Select>
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

                </FormControl>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(CropTypePicker);