import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
    grid: {
        margin: 0,
        padding: 30
    },
    body: {
        minHeight: 600,
        paddingTop: 0
    }
};

function GridContainer (props) {
    const { body, classes, children, ...rest } = props;

    return (
        <Grid container {...rest} className={`${classes.grid} ${body ? classes.body : null}`}>
            {children}
        </Grid>
    );
}

export default withStyles(style)(GridContainer);
