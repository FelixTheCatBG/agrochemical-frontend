import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { authenticationService } from "../../services";

import AgroLoader from "../../components/Shared/AgroLoader";
import AgroSnackbar from "../../components/Shared/AgroSnackbar";
import GridContainer from "../../components/Grid/GridContainer";
// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }


// const useStyles = makeStyles(theme => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main
//     },
//     form: {
//         width: "100%", // Fix IE 11 issue.
//         marginTop: theme.spacing(1)
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2)
//     }
// }));

class LoginPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: "",
            password: "",

            isLoading: false,
            success: false,
            action: '',
            errorMessage: false,
            successAction: "Login"
        };
    }

    handleKeyPress = e => {
        if (e.key === "Enter") {
            this.handleLogin();
        }
    };

    signIn = e => {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        authenticationService.login(username, password).then(user => {
            // console.log(user);
            const { from } = this.props.location.state || {
                from: { pathname: "/" }
            };

            this.props.history.push(from);
        }).catch(error => {
            return error;
        });
    };

    onSnackbarClose = () => {
        this.setState({
            successAction: ""
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
        const disabled = !this.state.username || !this.state.password;

        if (this.state.isLoading) {
            return <GridContainer body>
                <AgroLoader />
            </GridContainer>;
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{ marginTop: 50, marginBottom: 50 }}>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form >
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            disabled={disabled}
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.signIn}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {this.state.successAction && <AgroSnackbar type={'success'} message={`${this.state.successAction} Successful`} onClose={this.onSnackbarClose} />}

                {this.state.errorMessage && <AgroSnackbar type={'error'} message={`Delete Successful`} onSnackbarClose={this.onSnackbarClose} />}
            </Container>
        );
    }
}

export default LoginPage;
