import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../styles/Shared';

class AgroLoader extends React.Component {
    render () {
        const { classes } = this.props;

        return (
            <div className={classes.circularProgress}>
                <CircularProgress size={this.props.size || 100} />
            </div>
        );
    }
}

export default withStyles(styles)(AgroLoader);