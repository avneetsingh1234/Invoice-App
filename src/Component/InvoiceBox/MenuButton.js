import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function MenuButton({setStatus}) {

    const [anchorEl, setAnchorEl] =useState(null);
    const [title,setTitle]=useState('Status');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    const handleClose_1 = (event) => {
        setStatus('Paid');
        setTitle('Paid');
        setAnchorEl(null);
    };
    const handleClose_2 = (event) => {
        setStatus('Unpaid');
        setTitle('Unpaid');
        setAnchorEl(null);
    };
    const handleClose_3 = (event) => {
        setStatus('Under Process');
        setTitle('Under Process');
        setAnchorEl(null);
    };
    const handleClose_4 = (event) => {
        setStatus('Late');
        setTitle('Late');
        setAnchorEl(null);
    };

    return (
    <>
        <Button fullWidth aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color='primary' variant='contained'>
            <ExpandMoreIcon/>{title}
        </Button>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
            <MenuItem onClick={handleClose_1} value='Paid' j='kbsd'>Paid</MenuItem>
            <MenuItem onClick={handleClose_2} value='Unpaid'>Unpaid</MenuItem>
            <MenuItem onClick={handleClose_3} value='Under Process'>Under Process</MenuItem>
            <MenuItem onClick={handleClose_4} value='Under Process'>Late</MenuItem>
        </Menu>
    </>
    )
}
