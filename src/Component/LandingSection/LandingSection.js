import React from 'react';
import LandingImg from '../../Images/landingimg.png';
import {Button} from '@material-ui/core';
import './LandingSection.css';

export default function LandingSection() {
    return (
        <div className='introSection'>
            
            <div className='introText'>
                <div className='heading'><b>Free Online Invoice Creator</b></div>
                <p style={{fontSize:'26px',marginTop:'20px'}}>Easy <b>Invoices</b> for Small Businesses . Create and Manage Unlimited Invoices for FREE. Developed By <b>Avneet Singh Chhabra </b>.</p>
                <Button variant='contained' color='secondary' size='large' style={{marginTop:'20px'}}>Create Your Invoice</Button>
            </div>

            <div id='imgContainer' style={{position:'relative',minWidth:'35rem'}}>
                <img src={LandingImg} className='landingImg'></img>
            </div>
            
        </div>
    )
}
