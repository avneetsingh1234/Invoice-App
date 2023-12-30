import React ,{useState,useEffect ,useRef}from 'react';
import { Paper , TextField , Button } from '@material-ui/core';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import { setInvoice , setDetails , setItems , deleteAll } from '../../Reducers/Actions';
import { useReactToPrint } from "react-to-print";
import { PdfTemplate } from '../PdfTemplate/PdfTemplate';
import {useSelector,useDispatch} from 'react-redux';
import { makeStyles} from "@material-ui/core/styles";
import MenuButton from './MenuButton';
import ItemTable from '../Table/Table';
import FileBase64 from 'react-file-base64'; 
import Logo from '../../Images/grp10.png'
import nextId from "react-id-generator";
import './InvoiceBox.css';


const useStyles=makeStyles({
    root:{
        color:'black'
    },
    paper:{
        boxShadow:'5px 10px #888888'
    }
});
var id='id0';
export default function InvoiceBox() {
    
    const classes=useStyles();
    

    const [invoiceData,setInvoiceData]=useState({invoiceTitle:'Invoice Title', invoiceNo:'',invoiceDate:'',invoiceDue:'',invoiceLogo:'',invoiceStatus:'',invoiceDesc:''});
    const [detailsData,setDetailsData]=useState({byName:'',byAddress:'',byEmail:'',toName:'',toAddress:'',toEmail:''});
    const [itemData,setItemData]=useState({itemId:id,itemName:'Pen',itemQuant:1, itemRate:1});
    const [status, setStatus] = useState(null);

    const invoiceDetails=useSelector((state)=>state.invoiceReducers);
    const detailsDetails=useSelector((state)=>state.detailsReducers);
    const itemDetails=useSelector((state)=>state.itemReducers);
    const dispatch=useDispatch();

    const templateRef=useRef();

    const handlePrint = useReactToPrint({
        content: () => templateRef.current
    });

    var today = new Date(),
    date = today.getFullYear() + '-01-01' ;

    useEffect(()=>{
        setInvoiceData({...invoiceData,invoiceStatus:status});
        console.log(status);
        console.log(invoiceDetails,itemDetails)
    },[status,invoiceDetails]);
    
    const saveItem= () => {
        id=nextId();
        console.log(id);
        setItemData({...itemData,itemId:id});
        dispatch(setItems(itemData));
    }

    const saveData= async ()=>{
        await dispatch(setInvoice(invoiceData));
        await dispatch(setDetails(detailsData));
        handlePrint();
    }

    const clearData = () => {
        setInvoiceData({invoiceTitle:'Invoice Title', invoiceNo:'',invoiceDate:'',invoiceDue:'',invoiceLogo:'',invoiceDesc:''});
        setDetailsData({byName:'',byAddress:'',byEmail:'',toName:'',toAddress:'',toEmail:''});
        setItemData({itemId:id,itemName:'Pen',itemQuant:1, itemRate:1});
        dispatch(deleteAll());
    }

    return (
        <div className='paperContainer'>
            <div className='invoiceBox'>
                <Paper className={classes.paper}>
                    <div style={{padding:'10px'}}>
                        
                        <div style={{textAlign:'center',marginTop:'32px'}}>
                            <TextField size='medium' variant='standard' value={invoiceData.invoiceTitle} onChange={(e) => setInvoiceData({...invoiceData,invoiceTitle:e.target.value})}/>
                        </div>

                        <div className='topSection' >
                            
                            <div className='topSection-1'>
                                <TextField label="Invoice Number" value={invoiceData.invoiceNo} size='medium' variant='outlined' style={{maxWidth:'20rem' ,marginTop:'1rem'}} onChange={(e) => setInvoiceData({...invoiceData,invoiceNo:e.target.value})}/>
                                <TextField label="Invoice Date" size='medium' type='date' defaultValue={date} variant='outlined' style={{maxWidth:'20rem',marginTop:'1rem'}} onChange={(e) => setInvoiceData({...invoiceData,invoiceDate:e.target.value})}/>
                                <TextField label="Due Date" size='medium' type='date' defaultValue={date} variant='outlined' style={{maxWidth:'20rem',marginTop:'1rem'}} onChange={(e) => setInvoiceData({...invoiceData,invoiceDue:e.target.value})}/>
                                <div style={{maxWidth:'20rem' ,marginTop:'1rem'}}><MenuButton setStatus={setStatus} /></div>
                            </div>
                            
                            <div className='topSection-2'>
                                <div className='logoContainer'>
                                    <img src={invoiceData.invoiceLogo ? invoiceData.invoiceLogo:Logo}   className='logo'/>
                                    <FileBase64 multiple={false} onDone={({ base64 }) => setInvoiceData({ ...invoiceData, invoiceLogo:base64 })}/>
                                </div>
                            </div>   

                        </div>

                        <div className='middleSection' >
                           
                            <div className='middleSection-1'>
                                <h2 style={{fontSize:'26px'}}>Billed By</h2>
                                <div className='infoContainer'>
                                    <div className='infoContainer-1'>
                                        <span style={{fontFamily:'Baloo Tammudu 2'}} >Bussiness Name</span>
                                        <TextField required value={detailsData.byName} style={{marginLeft:'20px'}} variant='outlined' size='small' fullWidth onChange={(e) => setDetailsData({...detailsData,byName:e.target.value})} />
                                    </div>
                                    <div className='infoContainer-1'>
                                        <span >Address</span>
                                        <TextField required value={detailsData.byAddress} style={{marginLeft:'20px'}} multiline rows={4} variant='outlined' size='small' fullWidth onChange={(e) => setDetailsData({...detailsData,byAddress:e.target.value})} />
                                    </div>
                                    <div className='infoContainer-1'>
                                        <span style={{fontFamily:'Baloo Tammudu 2'}}>E-mail</span>
                                        <TextField required value={detailsData.byEmail} style={{marginLeft:'20px'}} variant='outlined' size='small' type='email' fullWidth onChange={(e) => setDetailsData({...detailsData,byEmail:e.target.value})} />
                                    </div>
                                </div>
                            </div>

                            <div className='middleSection-2'>
                                <h2>Billed To</h2>
                                <div className='infoContainer'>
                                    <div className='infoContainer-1'>
                                        <span style={{fontFamily:'Baloo Tammudu 2'}}>Bussiness Name</span>
                                        <TextField value={detailsData.toName} required style={{marginLeft:'20px'}} variant='outlined' size='small' fullWidth onChange={(e) => setDetailsData({...detailsData,toName:e.target.value})}/>
                                    </div>
                                    <div className='infoContainer-1'>
                                        <span style={{fontFamily:'Baloo Tammudu 2'}}>Address</span>
                                        <TextField required value={detailsData.toAddress} style={{marginLeft:'20px'}} multiline rows={4} variant='outlined' size='small' fullWidth onChange={(e) => setDetailsData({...detailsData,toAddress:e.target.value})} />
                                    </div>
                                    <div className='infoContainer-1'>
                                        <span style={{fontFamily:'Baloo Tammudu 2'}}>E-mail</span>
                                        <TextField required value={detailsData.toEmail} style={{marginLeft:'20px'}} variant='outlined' size='small' type='email' fullWidth onChange={(e) => setDetailsData({...detailsData,toEmail:e.target.value})} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='addSection'>
                            <div className='addSection-1'>
                                <div className='items-style' style={{minWidth:'40%'}}>
                                    Items
                                </div>
                                <div className='items-style' style={{minWidth:'20%'}}>
                                    Quantity
                                </div>
                                <div className='items-style' style={{minWidth:'20%'}}>
                                    Rate
                                </div>
                                <div className='items-style' style={{minWidth:'20%'}}>
                                    Amount
                                </div>
                            </div>
                            <div className='addSection-2' >
                                <div className='items-style' style={{minWidth:'40%'}}>
                                    <TextField variant='standard' fullWidth label='Item Name' defaultValue='Pen' onChange={(e)=>setItemData({...itemData,itemName:e.target.value})} />
                                </div>
                                <div className='items-style' style={{minWidth:'20%'}}>
                                    <TextField variant='standard' fullWidth label='Quantity' type='number' onChange={(e)=>setItemData({...itemData,itemQuant:e.target.value})} />
                                </div>
                                <div className='items-style' style={{minWidth:'20%'}}>
                                    <TextField variant='standard' fullWidth label='Rate' type='number' onChange={(e)=>setItemData({...itemData,itemRate:e.target.value})} className={classes.root} />
                                </div>
                                <div className='items-style' style={{minWidth:'20%'}}>
                                    <TextField disabled variant='standard' fullWidth label='Total Amount' value={itemData.itemQuant*itemData.itemRate} className={classes.root} />
                                </div>
                            </div>
                            
                            <div className='buttonContainer'>
                                <Button variant='contained' size='small' color='secondary' fullWidth onClick={saveItem}><QueueOutlinedIcon style={{marginRight:'10px'}}/>Add Item</Button>
                            </div>
                        </div>
                    </div>
                    {itemDetails.length !=0 ? <ItemTable />:null}
                    <div className='DescCont' style={{width:'100%',marginTop:'40px'}}>
                        <div className='Desc'>
                            <TextField value={invoiceData.invoiceDesc} multiline fullWidth rows={6} size='small' variant='outlined' label='Descriptions' onChange={(e) => setInvoiceData({...invoiceData,invoiceDesc:e.target.value})}/>
                        </div>
                    </div>
                    <div style={{marginTop:'60px',maxWidth:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                        <div className='generateButtonContainer'>
                            <Button color='primary' variant='contained' fullWidth onClick={saveData}>Generate Invoice</Button>
                        </div>
                        <div className='generateButtonContainer'>
                            <Button color='primary' variant='contained' fullWidth onClick={clearData}>Clear All</Button>
                        </div>
                    </div>

                    <div style={{display:'none'}} >
                        <PdfTemplate ref={templateRef} invoiceDetails={invoiceDetails} detailsDetails={detailsDetails} itemDetails={itemDetails} />
                    </div>
                </Paper>
            </div> 
        </div>
    )
}
