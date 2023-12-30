import React ,{useState} from "react";
import { makeStyles} from "@material-ui/core/styles";
import {Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteItems} from '../../Reducers/Actions';
import { useSelector ,useDispatch } from "react-redux";
import './Table.css';

  const useStyles = makeStyles({
    table: {
      maxWidth: 1000,
    },
    tableHead:{
        backgroundColor:'#8000FF',
    },
    tableHeadItem:{
        color:'white'
    }
  });

export default function ItemTable() {

    const id=0;
    const classes = useStyles();
    const dispatch = useDispatch();
    const itemDetails=useSelector((state)=>state.itemReducers);

    return (
        
        <div className='Container'>
            <div className='tableContainer'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead>
                        <TableRow className={classes.tableHead}>
                            <TableCell className={classes.tableHeadItem}>Item</TableCell>
                            <TableCell className={classes.tableHeadItem} align="right">Quantity(₹)</TableCell>
                            <TableCell className={classes.tableHeadItem} align="right">Rate</TableCell>
                            <TableCell className={classes.tableHeadItem} align="right">Amount(₹)</TableCell>
                            <TableCell className={classes.tableHeadItem} align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {itemDetails.map((item) => (
                            <TableRow key={item.itemId}>
                                <TableCell>
                                    {item.itemName}
                                </TableCell>
                                <TableCell align="right">{item.itemQuant}</TableCell>
                                <TableCell align="right">{item.itemRate}</TableCell>
                                <TableCell align="right">{item.itemRate * item.itemQuant}</TableCell>
                                <TableCell align="right" style={{cursor:'pointer'}} onClick={(e) => dispatch(deleteItems(item.itemId))}> <DeleteIcon color='secondary'/> </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
