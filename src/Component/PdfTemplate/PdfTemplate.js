import React from 'react';
import imge from '../../Images/backgrnd.png';
import PdfTable from './PdfTable';
import {useSelector} from 'react-redux';
import './PdfTemplate.css';


export class PdfTemplate extends React.PureComponent{


    render()
    {
        const invoiceDetails=this.props.invoiceDetails;
        const detailsDetails=this.props.detailsDetails;
        const itemDetails=this.props.itemDetails;
        var totalAmount=0;
        const totalSum = itemDetails.map((item) => {
            totalAmount+=item.itemQuant*item.itemRate;
            return(null)})
        
        return (
        <div className='pdfContainer'>
            <div className='pdfContainer-1'>
                <div className='pdfTop'>
                    <div className='pdfTop-1'>
                        <div style={{maxWidth:'20rem',fontFamily:'Righteous',fontSize:'52px',overflow:'hidden',color:'#F80040'}}>{invoiceDetails.invoiceTitle}</div>
                        <div style={{fontWeight:'bold',lineHeight:'1.5'}}>
                            <div>Invoice No : {invoiceDetails.invoiceNo}</div>
                            <div>Date : {invoiceDetails.invoiceDate}</div>
                            <div>Due Date : {invoiceDetails.invoiceDue}</div>
                        </div>
                    </div>
                    <div className='pdfTop-2'>
                        <img src={invoiceDetails.invoiceLogo} style={{maxWidth:'300px',maxHeight:'200px'}} />
                    </div>
                </div>
                <div className='pdfMiddle'>
                    <div className='pdfMiddle-1'>
                        <div style={{fontFamily:'Righteous',fontSize:'26px',color:'#F80040',lineHeight:'1.5'}}>Billed By</div>
                        <div style={{display:'flex',fontWeight:'bold',lineHeight:'1.5'}}>
                            <div style={{minWidth:'8.5rem'}}>
                                Bussiness Name :
                            </div>
                            <div>
                                {detailsDetails.byName}
                            </div>
                        </div>
                        <div style={{display:'flex',fontWeight:'bold',lineHeight:'1.5'}}>
                            <div style={{minWidth:'8.5rem'}}>
                                Address :
                            </div>
                            <div>
                                {detailsDetails.byAddress}
                            </div>
                        </div>
                        <div style={{display:'flex',fontWeight:'bold',lineHeight:'1.5'}}>
                            <div style={{minWidth:'8.5rem'}}>
                                Email :
                            </div>
                            <div>
                                {detailsDetails.byEmail}
                            </div>
                        </div>
                    </div>
                    <div className='pdfMiddle-2'>
                        <div style={{fontFamily:'Righteous',fontSize:'26px',color:'#F80040'}}>Billed To</div>
                        <div style={{display:'flex',fontWeight:'bold',lineHeight:'1.5'}}>
                                <div style={{minWidth:'8.5rem'}}>
                                    Bussiness Name :
                                </div>
                                <div>
                                    {detailsDetails.toName}
                                </div>
                        </div>
                        <div style={{display:'flex',fontWeight:'bold',lineHeight:'1.5'}}>
                                <div style={{minWidth:'8.5rem'}}>
                                    Address :
                                </div>
                                <div>
                                    {detailsDetails.toAddress}
                                </div>
                        </div>
                        <div style={{display:'flex',fontWeight:'bold',lineHeight:'1.5'}}>
                                <div style={{minWidth:'8.5rem'}}>
                                    Email :
                                </div>
                                <div>
                                    {detailsDetails.toEmail}
                                </div>
                        </div>
                    </div>
                </div>
                <div className='pdfTableContainer'>
                    <PdfTable/>
                    <div style={{marginTop:'26px',fontSize:'22px',fontWeight:'bold',display:'flex',minWidth:'100%'}}>
                        <div style={{minWidth:'50%',maxWidth:'50%'}}>
                            <div style={{fontSize:'22px',fontWeight:'bold',color:'#F80040'}}>
                                Descriptions
                            </div>
                            <div style={{marginTop:'20px'}}>
                                {invoiceDetails.invoiceDesc}
                            </div>
                        </div>
                        <div style={{minWidth:'50%'}}>
                            <div style={{textAlign:'right'}}>
                                <span style={{fontSize:'22px',fontWeight:'bold',color:'#F80040'}}>Total Amount (₹)</span> : {totalAmount}
                            </div>
                            <div style={{textAlign:'right'}}>
                                <span style={{fontSize:'22px',fontWeight:'bold',color:'#F80040'}}>Status</span> : {invoiceDetails.invoiceStatus}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );}
}
