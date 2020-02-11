const notesStyles = theme => ({
    welcomeNotesListWrapper: {
        width: "97%",
        height: "auto",
        // backgroundColor: scaleUpWhite,
        margin: "0 auto"
    },
    /* Welcome Notes Table */
    emptyState: {
        textAlign: "center"
        // color: scaleUpTextColor
    },
    tableStyle: {
        width: "100%",
        borderSpacing: "0",
        tableLayout: "fixed",
        '& td': {
            // borderBottom: `1px solid ${scaleUpBorderColorLight}`,
            // color: scaleUpTextColor,
            textAlign: "left",
            height: "50px",
            fontSize: "13px",
            padding: "20px 0"

        },
        '& th:first-child': {
            paddingLeft: "30px"
        },
        '& td:first-child': {
            paddingLeft: "30px",
            [theme.breakpoints.down("md")]: {
                paddingLeft: "15px"
            },
            [theme.breakpoints.down("sm")]: {
                paddingLeft: "0px"
            }
        }
    },
    tableHeadStyle: {
        '& th': {
            // borderTop: `1px solid ${scaleUpBorderColorLight}`,
            // borderBottom: `1px solid ${scaleUpBorderColorLight}`,
            // color: scaleUpBorderColorLight,
            textAlign: "left",
            height: "50px",
            fontSize: "13px",
            fontWeight: "500"
        }
    },
    /* Buttons */
    actionButton: {
        // backgroundColor: scaleUpWhite,
        border: "none",
        cursor: "pointer"
    },
    callToActionButton: {
        color: "white",
        float: "right"
    },
    callToActionBox: {
        width: "100%",
        backgroundColor: "#EE7629"
    },
    disableUnderline: {
        textDecoration: "none",
        margin: "0 auto"
    },
    iconDeleteStyle: {
        color: "red"
    },
    actionDeleteButton: {
        backgroundColor: "#fff"
    },
    /* ActionMenu */
    actionContainer: {
        width: "30px",
        textAlign: "center",
        float: "right",
        cursor: "pointer"
        // color: scaleUpProductListDetails,
        // '&:hover': {
        //     color: scaleUpActionHover
        // }
    },
    ActionsMenuPaper: {
        '& .products': {
            position: "absolute",
            top: "inherit",
            right: "33px"
        }
    },

    /* MobileVersion */
    productNameMobile: {
        fontWeight: "600px",
        fontSize: "14px",
        // color: scaleUpTextColor,
        margin: "0"
    },
    productPriceMobile: {
        // color: scaleUpProductListDetails,
        margin: "0",
        fontSize: "12px",
        fontWeight: "600px"
    },
    productStatusMobile: {
        // color: scaleUpProductListDetails,
        margin: "0",
        fontSize: "14px",
        fontWeight: "600"
        // '& .active': {
        //     color: `${scaleUpGreen} !important`
        // }
    },
    // productStatusMobileActive: {
    //     color: `${scaleUpGreen} !important`
    // },
    // noteStatusMobileActive: {
    //     color: scaleUpGreen
    // },

    /* Buttons */
    createNoteDiv: {
        overflow: "hidden",
        width: "97%",
        height: "auto",
        margin: "0 auto"
    },
    createNoteButton: {
        height: "40px",
        boxShadow: "none",
        marginBottom: "20px",
        float: "right",
        fontWeight: "600",
        // color: scaleUpWhite,
        // backgroundColor: scaleUpTurquoise,
        '&:active': {
            boxShadow: 'none'
        },
        '&:hover': {
            boxShadow: 'none'
            // backgroundColor: scaleUpHoverColor
        }
    },
    noteButton: {
        height: '40px',
        width: '100%',
        marginTop: '40px',
        boxShadow: 'none',
        fontWeight: '600'
    },
    backNoteButton: {
        // backgroundColor: scaleUpTextColor,
        // color: scaleUpWhite,
        '&:active': {
            boxShadow: 'none'
        },
        '&:hover': {
            boxShadow: 'none'
        }
    },
    editNoteButton: {
        // backgroundColor: scaleUpTurquoise,
        // borderColor: scaleUpTurquoise,
        // color: scaleUpWhite,
        '& .preview': {
            // backgroundColor: scaleUpTurquoise
        },
        '&:active': {
            boxShadow: 'none'
        },
        '&:hover': {
            boxShadow: 'none'
            // backgroundColor: scaleUpHoverColor
        }
    },
    previewNoteButton: {
        backgroundColor: 'transparent',
        // borderColor: scaleUpTurquoise,
        // color: scaleUpTurquoise,
        border: '2px solid',
        '&:active': {
            boxShadow: 'none'
        },
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'transparent'
            // color: scaleUpHoverColor
        }
    },
    slidesCard: {
        marginTop: '20px',
        marginBottom: '20px',
        minHeight: '500px',
        [theme.breakpoints.up("xl")]: {
            minHeight: '650px'
        }
    },
    slidesDeleteBtn: {
        marginLeft: 'auto !important'
    },
    cardImage: {
        height: '200px'
    },
    cardActions: {
        justifyContent: "center",
        marginTop: '10px'
    },
    dangerousDiv: {
        whiteSpace: "nowrap",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '300px',
        [theme.breakpoints.down("sm")]: {
            height: '450px'
        },
        [theme.breakpoints.up("xl")]: {
            height: '450px'
        },
        '& p': {
            '& img': {
                textAlign: 'center',
                width: '100%',
                display: 'block'
            }
        }
    },
    /* Add Slide Card */
    addSlideCard: {
        backgroundColor: '#eee'
    },
    goAddSlideBtn: {
        margin: '0 auto',
        position: 'relative',
        fontSize: '100',
        marginTop: '30%'
    },
    name: {
        marginLeft: "15px"
    },
    mobileName: {
        // color: scaleUpProductListDetails,
        margin: "0"
    },
    info: {
        display: "inline-block",
        width: "60%"
    },
    ellipsisContainer: {
        position: "absolute",
        top: "10px",
        right: "0",
        width: "30px",
        textAlign: "center",
        cursor: "pointer"
        // color: scaleUpProductListDetails
    }
});

export default notesStyles;