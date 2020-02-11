import { createMuiTheme } from '@material-ui/core/styles';
// import cyan from '@material-ui/core/colors/cyan';
// import green from '@material-ui/core/colors/green';
// import { scaleUpTextColor } from "assets/jss/scaleUpVariables.js";

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#EE7629'
        },
        secondary: {
            main: '#37b44e'
        }
    },
    MuiTab: {
        minHeight: 75
    },
    // status: {
    //     danger: 'orange'
    // },
    overrides: {
        // MuiPaper: {
        //     root: {
        //         color: scaleUpTextColor
        //     }
        // },
        MuiTab: {
            root: {
                minHeight: 75
            }

        },
        MuiListItem: {
            root: {
                // '& :hover': {
                //     backgroundColor: "#37b44e"
                // }
            }
        },
        MuiButton: {
            root: {
                '&:hover': {
                    backgroundColor: "#37b44e"
                }
            }
        }
        // MuiTableCell: {
        //     body: {
        //         color: scaleUpTextColor
        //     }
        // }
    }
});

export default theme;