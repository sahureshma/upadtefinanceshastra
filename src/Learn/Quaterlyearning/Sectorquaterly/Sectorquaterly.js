import React, { useState } from 'react';
import './Sectorquaterly.css'
const sectorData = [
    {
      sector: 'Telecommunications',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: 7.93, growthYoY: 14.18 },
      grossProfit: { growthQoQ: 21.67, growthYoY: 29.66 },
      netProfit: { growthQoQ: -181.59, growthYoY: 66.88 },
      category: 'Top Performing',
    },
    {
      sector: 'Services',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: 7.14, growthYoY: 11.11 },
      grossProfit: { growthQoQ: 26.42, growthYoY: 345.01 },
      netProfit: { growthQoQ: 730.22, growthYoY: 72.38 },
      category: 'Top Performing',
    },
    {
      sector: 'Retailing',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: 106.38, growthYoY: 16.32 },
      grossProfit: { growthQoQ: 92.18, growthYoY: 15.23 },
      netProfit: { growthQoQ: 147.54, growthYoY: 33.40 },
      category: 'Top Performing',
    },
    {
      sector: 'Hospitality',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: 3.77, growthYoY: 14.75 },
      grossProfit: { growthQoQ: -4.14, growthYoY: 18.04 },
      netProfit: { growthQoQ: 5.72, growthYoY: 74.97 },
      category: 'Top Performing',
    },
    // New sectors added here
    {
      sector: 'Technology',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: 15.67, growthYoY: 40.12 },
      grossProfit: { growthQoQ: 32.45, growthYoY: 50.76 },
      netProfit: { growthQoQ: 25.34, growthYoY: 80.56 },
      category: 'Top Performing',
    },
    {
      sector: 'Pharmaceuticals',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: 12.22, growthYoY: 25.87 },
      grossProfit: { growthQoQ: 18.14, growthYoY: 33.45 },
      netProfit: { growthQoQ: 20.78, growthYoY: 60.12 },
      category: 'Top Performing',
    },
    {
      sector: 'Metals & Mining',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: -2.64, growthYoY: -2.13 },
      grossProfit: { growthQoQ: -15.21, growthYoY: -0.95 },
      netProfit: { growthQoQ: -15.12, growthYoY: 89.14 },
      category: 'Under Performing',
    },
    {
      sector: 'Consumer Durables',
      type: 'Standalone',
      period: 'Q2-FY24-25',
      revenue: { growthQoQ: -6.20, growthYoY: 38.27 },
      grossProfit: { growthQoQ: -33.27, growthYoY: 37.76 },
      netProfit: { growthQoQ: -23.37, growthYoY: 65.65 },
      category: 'Under Performing',
    },
  ];
  

const SectorAnalysis = () => {
  const [filter, setFilter] = useState('Top Performing');

  const CustomDropdown = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
      onChange(option);
      setIsOpen(false);
    };

    return (
      <div className="customDropdown">
        <label className="dropdownLabel">{label}:</label>
        <div className="dropdownSelect" onClick={() => setIsOpen(!isOpen)}>
          {value}
          <span className="dropdownArrow">&#9662;</span>
        </div>
        {isOpen && (
          <div className="dropdownOptions">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdownOption"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const getGrowthStyle = (value) => ({
    color: value >= 0 ? 'green' : 'red',
  });

  const filteredData = sectorData.filter((item) => item.category === filter);

  const options = ['Top Performing', 'Under Performing'];

  return (
   
    <div className="declaredquatralyearnging">
          <div className="headerdeclareearning"> 
          <h2 className="declaredheadertop">
        Sector Analysis</h2>
        <div className="filterdeclaredquaterly" style={{ position: "relative" }}>
        <label style={{display: "flex", alignItems: "center" }}>
        <CustomDropdown
          label="Filter"
          value={filter}
          onChange={(value) => setFilter(value)}
          options={options}
        />
         </label>
      </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} className='cardallquaterly'>
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="result-card"
          
          >
            <h3>{item.sector}</h3>
            <p>{item.type}</p>
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>QoQ Growth</th>
                  <th>YoY Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Revenue (Cr.)</strong></td>
                  <td style={getGrowthStyle(item.revenue.growthQoQ)}>
                    {item.revenue.growthQoQ}%
                  </td>
                  <td style={getGrowthStyle(item.revenue.growthYoY)}>
                    {item.revenue.growthYoY}%
                  </td>
                </tr>
                <tr>
                  <td><strong>Gross Profit (Cr.)</strong></td>
                  <td style={getGrowthStyle(item.grossProfit.growthQoQ)}>
                    {item.grossProfit.growthQoQ}%
                  </td>
                  <td style={getGrowthStyle(item.grossProfit.growthYoY)}>
                    {item.grossProfit.growthYoY}%
                  </td>
                </tr>
                <tr>
                  <td><strong>Net Profit (Cr.)</strong></td>
                  <td style={getGrowthStyle(item.netProfit.growthQoQ)}>
                    {item.netProfit.growthQoQ}%
                  </td>
                  <td style={getGrowthStyle(item.netProfit.growthYoY)}>
                    {item.netProfit.growthYoY}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorAnalysis;
