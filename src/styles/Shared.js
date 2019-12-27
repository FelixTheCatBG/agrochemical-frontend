const styles = theme => ({
    circularProgress: {
        // position: "fixed",
        // zIndex: "99999",
        // height: "2em",
        // width: "2em",
        // overflow: "show",
        margin: "auto",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        [theme.breakpoints.down("sm")]: {
            right: "50px"
        }
        // before: {
        //     content: "",
        //     display: "block",
        //     // position: "fixed",
        //     top: "0",
        //     left: "0",
        //     width: "100%",
        //     height: "100%",
        //     backgroundColor: "rgba(190, 190, 179, 0.3)",
        //     opacity: "0.8"
        // }
    },
    error: {
        backgroundColor: "red"
    },
    success: {
        backgroundColor: "green"
    }
});

export default styles;