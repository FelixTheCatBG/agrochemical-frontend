import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from "./components/MainComponents/AppBar";
import { history, Role } from './utils';
import { authenticationService } from './services';
import { PrivateRoute } from './components';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/Theme';

import Footer from './components/MainComponents/Footer';
import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/AboutPage/AboutPage';
import AdminPage from './views/AdminPage/AdminPage';
import LoginPage from './views/LoginPage/LoginPage';
import CataloguePage from './views/CataloguePage/CataloguePage';
import DiagnoserPage from './views/DiagnoserPage/DiagnoserPage';
import ContactPage from './views/ContactPage/ContactPage';
import DiseasesPage from './views/DiseasesPage/DiseasesPage';

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
                <Container className="mainContainer" style={{ padding: 0, backgroundColor: "white", marginTop: "15px", marginBottom: "15px" }} maxWidth="lg" >
                    <Router history={history}>
                        <AppBar currentUser={currentUser} isAdmin={isAdmin} logout={this.logout} />
                        <Switch>
                            <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/about" component={AboutPage} />
                            <Route exact path="/catalogue" component={CataloguePage} />
                            <Route exact path="/diagnoser" component={DiagnoserPage} />
                            <Route exact path="/diseases" component={DiseasesPage} />
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