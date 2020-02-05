import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    tableHead: {
        backgroundColor: "#eee"
    }
});

export default function SimpleTable (props) {
    const classes = useStyles();

    console.log(props);

    return (
        <Paper>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>Crop</TableCell>
                        <TableCell align="right">Disease</TableCell>
                        <TableCell align="right">Dose</TableCell>
                        <TableCell align="right">Q.Period</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tableData.map(row => (
                        <TableRow key={row.crop}>
                            <TableCell component="th" scope="row">
                                {row.crop}
                            </TableCell>
                            <TableCell align="right">{row.disease}</TableCell>
                            <TableCell align="right">{row.dosage}</TableCell>
                            <TableCell align="right">{row.period}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}