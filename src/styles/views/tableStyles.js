import {
    agroWhite,
    agroBorderColorLight,
    agroTextColor
} from "../../assets/agrochemicalVariables";

const tableStyle = theme => ({
    tableContainer: {
        backgroundColor: agroWhite,
        width: "100%"
    },
    filtersContainer: {
        paddingTop: "30px",
        [theme.breakpoints.up("md")]: {
            paddingTop: "80px"
        }
    },
    tableStyle: {
        height: "auto"
    },
    tableRowStyle: {
        height: "80px"
    },
    tableHeaderCellSort: {
        color: agroBorderColorLight,
        cursor: "pointer",
        fontSize: "14px",
        "&:active": {
            color: agroTextColor
        },
        "&:hover": {
            color: agroTextColor
        },
        "&:hover .sorted": {
            color: agroTextColor
        },
        "&:hover .sortedDown": {
            color: agroTextColor
        },
        "&:active .sorted": {
            color: agroTextColor
        },
        "&:active .sortedDown": {
            color: agroTextColor
        }
    },
    buttonSortWrapper: {
        backgroundColor: agroWhite,
        border: "none",
        cursor: "pointer"
    },
    arrowStyle: {
        color: agroBorderColorLight
    },
    tableHeaderCell: {
        fontSize: "14px",
        color: agroBorderColorLight
    },
    tableCellStyle: {
        position: "relative"
    },
    filterLabel: {
        height: "100%",
        lineHeight: "38px",
        fontWeight: "600",
        marginLeft: "15px",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    expandableCell: {
        width: '25px',
        padding: '0 0 0 10px'
    },
    nextToExpandCell: {
        paddingLeft: '10px'
    },
    expandButton: {
        background: 'transparent',
        border: 'none'
    },
    downshiftSelect: {
        width: "100%",
        height: 38,
        padding: '0',
        overflow: "hidden"
    },
    formControl: {
        margin: "0 10px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            margin: "5px 10px"
        }
    },
    filterContainer: {
        width: "100%",
        display: "inline-block",
        verticalAlign: "top",
        "&.inputFilter": {
            padding: "0 10px"
        }
    },
    filterButton: {
        width: "100%",
        display: "inline-block",
        margin: "0 25px",
        [theme.breakpoints.down("sm")]: {
            margin: "5px 25px"
        }
    },
    noItem: {
        margin: "15px"
    }
});

export default tableStyle;
