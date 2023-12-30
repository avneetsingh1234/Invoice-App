import React  from 'react';
import './App.css';
import LandingSection from './Component/LandingSection/LandingSection.js';
import InvoiceBox from './Component/InvoiceBox/InvoiceBox';
import { PdfTemplate } from './Component/PdfTemplate/PdfTemplate';

function App() {

  return (
    <>
      <LandingSection />
      <div className='heading' style={{textAlign:'center',marginTop:'40px' ,padding:'0.5rem'}}> Create Your Invoice Now </div>
      <InvoiceBox />
    </>  
  );
}

export default App;
