import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from "./components/MainComponents/AppBar";
import { history, Role } from './utils';
import { authenticationService } from './services';
import { PrivateRoute } from './components';
import Footer from './components/MainComponents/Footer';
import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/AboutPage/AboutPage';
import AdminPage from './views/AdminPage/AdminPage';
import LoginPage from './views/LoginPage/LoginPage';
import CataloguePage from './views/CataloguePage/CataloguePage';
import DiagnoserPage from './views/DiagnoserPage/DiagnoserPage';
import { ContactPage } from './views/ContactPage/ContactPage';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/Theme';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount () {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            // isAdmin: x && x.role === Role.Admin
            isAdmin: x && x.userRole === "Admin"
        }));
    }

    logout () {
        authenticationService.logout();
        history.push('/');
    }

    render () {
        const { currentUser, isAdmin } = this.state;

        return (
            <ThemeProvider theme={theme}>
                <Container style={{ padding: 0 }} maxWidth="lg" >
                    <Router history={history}>
                        <AppBar currentUser={currentUser} isAdmin={isAdmin} logout={this.logout} />
                        {/* {currentUser && */}
                        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/catalogue" className="nav-item nav-link">Catalogue</Link>
                            {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                            {currentUser && <a onClick={this.logout} className="nav-item nav-link">Logout</a>}
                        </div>
                    </nav> */}
                        {/* } */}
                        <Switch>
                            <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/about" component={AboutPage} />
                            <Route exact path="/catalogue" component={CataloguePage} />
                            <Route exact path="/diagnoser" component={DiagnoserPage} />
                            <Route exact path="/contacts" component={ContactPage} />
                        </Switch>
                    </Router>
                    <Footer />
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;