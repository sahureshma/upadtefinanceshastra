import React from 'react';
import { Container,Typography } from '@mui/material';

import Navbar from '../../../Navbar/Navbar';
import './Quaterlyearningoverview.css'
import { Link, Element } from 'react-scroll';

import QuarterlyEarningsReport from '../Quaterlyearningdetailreport/Quaterlyearningdetailreport';
import Earninginsightheader from '../Earninginsightdetailheader/Earninginsightdetailheader';
import Quaterlygraphtop from '../Quaterlygraphtop/Quaterlygraphtop';
import QuarterlyEarningdetailincome from '../Quaterlyearningincome/Quaterlyearningincome'

import Quarterlybalancesheet from '../Quaterlyearnbalancesheet/Quaterlyearnbalancesheet';
import QuarterlyCashflow from '../Quaterlycashflow/Quaterlycashflow';
import Quarterlyratio from '../Quaterlyratio/Quaterlyratio';
 import Quarterlypeer from '../Quaterlypeer/Quaterlypeer';
 import QuaterlynewsList from '../Quaterlynews/Quaterlynews';
 import Quaterlyabout from '../Quaterlyabout/Quaterlyabout'


function QuaterelyOverview() {
  return (
    <Container 
      sx={{
        maxWidth: '200%',
        overflowX: 'hidden', // Prevent horizontal scrolling
        padding: '0 16px', 
        marginTop:'270px'
        
      }}
    >
       <Earninginsightheader/>
      {/* Navbar with scroll links */}
      <Navbar />

      {/* Graph Header */}
  

    

      {/* Navigation Links */}
     
      <nav>
        <ul>
            <Link to="quaterlygraphtop" smooth={true} duration={500}></Link>
         
            <Link to="qquarterlyEarningsReport" smooth={true} duration={500}></Link>
          
            <Link to="quarterlyEarningdetailincome" smooth={true} duration={500}></Link>
          
            <Link to="quarterlybalancesheet" smooth={true} duration={500}></Link>
          
            <Link to="quarterlyCashflow" smooth={true} duration={500}></Link>
          
            <Link to="quarterlyratio" smooth={true} duration={500}></Link>
          
          
            <Link to="quarterlypeer" smooth={true} duration={500}></Link>
         
          
            <Link to="quaterlynewsList" smooth={true} duration={500}></Link>
          
          
            <Link to="quaterlyabout" smooth={true} duration={500}></Link>
        
         
        </ul>
      </nav>

      {/* Section: Overview */}
      <Element name="quaterlygraphtop">
      <Quaterlygraphtop/>
     
      </Element>
      {/* Section: Stock X-Ray */}
      <Element name="qquarterlyEarningsReport">
      <QuarterlyEarningsReport/>
      </Element>

      {/* Section: Quarterly Earnings Report */}
      <Element name="quarterlyEarningdetailincome">
      <QuarterlyEarningdetailincome/>
      </Element>

      {/* Section: Valuation */}
      <Element name="quarterlybalancesheet">
      <Quarterlybalancesheet/>
      </Element>

      {/* Section: Financial Dashboard */}
      <Element name="quarterlyCashflow">
      <QuarterlyCashflow/>
      </Element>

      {/* Section: Analysis Notes */}
      <Element name="quarterlyratio">
      <Quarterlyratio/>
      </Element>

      {/* Section: Peer Analysis */}
      <Element name="quarterlypeer">
      <Quarterlypeer/>
      </Element>

      {/* Section: Profit & Loss */}
      <Element name="quaterlynewsList">
      <QuaterlynewsList/>
      </Element>

      {/* Section: Balance Sheet */}
      <Element name="quaterlyabout">
      <Quaterlyabout/>
      </Element>

     
    </Container>
  );
}

export default QuaterelyOverview;








