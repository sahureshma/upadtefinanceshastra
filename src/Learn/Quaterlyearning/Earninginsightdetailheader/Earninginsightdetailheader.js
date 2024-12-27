import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';  // For scroll navigation
import './Earninginsightdetailheader.css'

import { Divider } from '@mui/material';

function Earninginsightheader() {
  const [change, setChange] = useState(0); // For storing dynamic change value in rupees
  const [lastUpdated, setLastUpdated] = useState('');
  const [currentPrice, setCurrentPrice] = useState(300); // Example initial stock price, replace with actual price

  // Function to simulate fetching data (replace with real API call)
  const fetchData = () => {
    const randomChange = (Math.random() * 20 - 10).toFixed(2); // Random value between -10 and +10 INR
    setChange(randomChange);

    const currentTime = new Date();
    setLastUpdated(currentTime.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }));

    // Update the current price after the change is applied, ensuring that the values are numbers
    setCurrentPrice(prevPrice => {
      const newPrice = parseFloat(prevPrice) + parseFloat(randomChange); // Ensure both values are numbers
      return newPrice.toFixed(1); // Now .toFixed works on a number
    });
  };

  // Fetch data initially and set an interval to update it
  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="graphcontainerer">
      <div className="graphheader">
        <div className="title-container">
          <h1 className="telephone">State Bank Of India</h1>
        </div>
        <div className="graph-price-update">
        <span className={`graphprice ${change >= 0 ? 'positive' : 'negative'}`}>

            ₹{parseFloat(currentPrice).toLocaleString()} {/* Format the price with ₹ symbol */}
          </span>
          <span className="graphupdate">Last updated: {lastUpdated}</span>
        </div>
      </div>

      <div className="graphstock-info">
        <span className="graphnse">NSE : ITI</span>
        <span className="graphsector">Services</span>
      </div>

      {/* Navigation Links */}
      <nav className="graphnavbarr">
        <Divider />
        <ScrollLink to="overview" smooth={true} duration={500}>
          Overview
        </ScrollLink>
        <ScrollLink to="stockxray" smooth={true} duration={500}>
        Financials
        </ScrollLink>
        <ScrollLink to="stockearning" smooth={true} duration={500}>
        Income Statement
        </ScrollLink>
        <ScrollLink to="valuation" smooth={true} duration={500}>
        Balance Sheet
        </ScrollLink>
        <ScrollLink to="stockanalysis" smooth={true} duration={500}>
        Cash Flow
        </ScrollLink>
        <ScrollLink to="analysis-notes" smooth={true} duration={500}>
        Ratios
        </ScrollLink>
        <ScrollLink to="stockpeer" smooth={true} duration={500}>
          Peers
        </ScrollLink>
       
        <ScrollLink to="news" smooth={true} duration={500}>
          News
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
        
        {/* Optional: For routing to other pages */}
        <Divider />
        
      </nav>

      <Divider sx={{ margin: '10px 0' }} />
    </div>
  );
}

export default Earninginsightheader;