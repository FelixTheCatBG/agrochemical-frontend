import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history, Role } from './utils';
import { authenticationService } from './services';
import { PrivateRoute } from './components';
import HomePage from './views/HomePage';
import AdminPage from './views/AdminPage';
import LoginPage from './views/LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
      currentUser: x,
      // isAdmin: x && x.role === Role.Admin
      isAdmin: x && x.role === "Customer"
    }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <BrowserRouter history={history}>
        <div>
          {currentUser &&
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">Home</Link>
                {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
              </div>
            </nav>
          }
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route exact path="/" component={HomePage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App; 