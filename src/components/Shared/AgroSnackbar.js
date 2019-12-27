import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from '../../styles/Shared';
class AgroSnackbar extends React.Component {
    state = {
        open: true
    };

    handleClose = () => {
        this.setState({ open: false });

        if (this.props.onSnackbarClose) {
            this.props.onSnackbarClose();
        }
    };

    render () {
        const { message, classes, type } = this.props;

        return (
            <Snackbar
                variant="error"
                data-qe="pop-up-error-message-box"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                    className: classes[type]
                }}
                message={<span id="message-id">{message}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        );
    }
}

AgroSnackbar.propTypes = {
    message: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,

    // must match the class style property from material classes e.g. 'error', 'success'
    type: PropTypes.string.isRequired
};

export default withStyles(styles)(AgroSnackbar);