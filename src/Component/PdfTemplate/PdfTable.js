import React from 'react';
import {Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    table: {
      maxWidth: 1000,
    },
    tableHead:{
        backgroundColor:'#F80040',
    },
    tableHeadItem:{
        color:'white'
    }
  });

export default function PdfTable() {
    
    const classes=useStyles();
    const itemDetails=useSelector((state)=>state.itemReducers);
    
    return (
        <TableContainer component={Paper}>
                        <Table aria-label="simple table" >
                            <TableHead>
                            <TableRow className={classes.tableHead}>
                                <TableCell className={classes.tableHeadItem}>Item</TableCell>
                                <TableCell className={classes.tableHeadItem} align="right">Quantity(₹)</TableCell>
                                <TableCell className={classes.tableHeadItem} align="right">Rate</TableCell>
                                <TableCell className={classes.tableHeadItem} align="right">Amount(₹)</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {itemDetails.map((item) => {return (<TableRow key={item.itemId}>
                                    <TableCell>
                                        {item.itemName}
                                    </TableCell>
                                    <TableCell align="right">{item.itemQuant}</TableCell>
                                    <TableCell align="right">{item.itemRate}</TableCell>
                                    <TableCell align="right">{item.itemQuant*item.itemRate}</TableCell>
                                </TableRow>)})}
                            </TableBody>
                        </Table>
                    </TableContainer>
    )
}
