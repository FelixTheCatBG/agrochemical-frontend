import React, { Component } from "react";
import { userService } from "../../services";
import AgroSnackbar from "../../components/Shared/AgroSnackbar";

export class AdminPage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            users: null,
            successAction: false
        };
    }

    componentDidMount () {
        userService.getAll().then(users => this.setState({ users }));
    }

    onSnackbarClose = () => {
        this.props.history.replace({
            pathname: '/admin',
            state: {}
        });
    };

    render () {
        const { users } = this.state;
        const hasSuccessAction = this.props.location.state && this.props.location.state.success;
        const successAction = hasSuccessAction && this.props.location.state.action;

        return (
            <React.Fragment>
                <h1>Admin</h1>
                <p>This page can only be accessed by administrators.</p>
                <div>
                    All users from secure (admin only) api end point:
                    {users && (
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>
                                    {user.firstName} {user.lastName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {successAction && <AgroSnackbar type={'success'} message={`${successAction} Successful`} onSnackbarClose={this.onSnackbarClose} />}
            </React.Fragment>
        );
    }
}

export default AdminPage;
