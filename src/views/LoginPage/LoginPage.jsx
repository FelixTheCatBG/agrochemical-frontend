import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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

import { authenticationService } from "../../services";

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
            password: ""
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
            // console.log(user);s
            const { from } = this.props.location.state || {
                from: { pathname: "/" }
            };

            this.props.history.push(from);
        },
        error => {
            //console.log(error);
        });
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    };

    render () {
        const disabled = !this.state.username && !this.state.password;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{ marginTop: 50 }}>
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
                <Box mt={8}>{/* <Copyright /> */}</Box>
            </Container>
        );
    }
}

export default LoginPage;
