import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import { TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

// const useStyles = theme => ({
//     bigIndicator: {
//         height: 5
//     }

// });

export class ContactPage extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render () {
        const { value } = this.state;

        return (
            <GridContainer body>
                <GridItem xs={12}>
                    <div style={{ minHeight: 100 }}>
                        <AppBar position="static" style={{ marginTop: 20 }} key="appbar">
                            <Tabs
                                onChange={this.handleChange}
                                value={value}
                            >
                                <Tab
                                    label={
                                        <React.Fragment>
                                            T1 Label 1<br />
                                            <span style={{ fontSize: "smaller" }}>T1 Label2AAAAAAAAAa</span>
                                        </React.Fragment>
                                    }
                                />
                                <Tab label="T2 Label 1" />
                                <Tab label="T3 Label 1" />
                            </Tabs>
                        </AppBar>
                        <div>
                            {value === 0 && <Typography>Item Oneaaaaaa</Typography>}
                            {value === 1 && <Typography>Item Two</Typography>}
                            {value === 2 && <Typography>Item Three</Typography>}
                        </div>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <h2>Contacts</h2>
                    <p></p>
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <h2>E-mail form</h2>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="username"
                        autoComplete="email"
                        onChange={this.handleInputChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleInputChange}
                    />
                </GridItem>
            </GridContainer>
        );
    }
}

export default ContactPage;