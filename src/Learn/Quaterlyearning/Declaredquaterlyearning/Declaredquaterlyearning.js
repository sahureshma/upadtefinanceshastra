import React, { useState } from "react";
import "./Declaredquaterlyearning.css"; // Ensure CSS file is included
import { CiSliderVertical } from "react-icons/ci";
const Declaredearning = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "BF Utilities Ltd.",
      sector: "Infrastructure",
      type: "Standalone",
      revenue: { Q2FY24: 10.47, Q2FY23: 223.64, growth: -95.32 },
      grossProfit: { Q2FY24: -0.97, Q2FY23: 42.45 },
      netProfit: { Q2FY24: 35, Q2FY23: 21, growth: 24 },
    },
    {
      id: 2,
      name: "Niva Bupa Health",
      sector: "Health",
      type: "Standalone",
      revenue: { Q2FY24: 1321, Q2FY23: 969, growth: 36 },
      grossProfit: { Q2FY24: -66, Q2FY23: -58 },
      netProfit: { Q2FY24: 13, Q2FY23: -8, growth: 262 },
    },
    {
      id: 3,
      name: "Waree Energies",
      sector: "Capital Goods",
      type: "Standalone",
      revenue: { Q2FY24: 3169, Q2FY23: 3369, growth: -5 },
      grossProfit: { Q2FY24: 400, Q2FY23: 416 },
      netProfit: { Q2FY24: 357, Q2FY23: 302, growth: 18 },
    },
    {
      id: 4,
      name: "ACME Solar",
      sector: "Infrastructure",
      type: "Standalone",
      revenue: { Q2FY24: 435, Q2FY23: 139, growth: 212 },
      grossProfit: { Q2FY24: 70, Q2FY23: -2 },
      netProfit: { Q2FY24: 46, Q2FY23: 30, growth: 53 },
    },
    {
      id: 5,
      name: "Innovana",
      sector: "IT",
      type: "Standalone",
      revenue: { Q2FY24: 23, Q2FY23: 25, growth: -8 },
      grossProfit: { Q2FY24: 10, Q2FY23: 10 },
      netProfit: { Q2FY24: 10, Q2FY23: 11, growth: -9 },
    },
    {
      id: 6,
      name: "BF Utilities Ltd.",
      sector: "Infrastructure",
      type: "Standalone",
      revenue: { Q2FY24: 10.47, Q2FY23: 223.64, growth: -95.32 },
      grossProfit: { Q2FY24: -0.97, Q2FY23: 42.45 },
      netProfit: { Q2FY24: 35, Q2FY23: 21, growth: 24 },
    },
    {
      id: 7,
      name: "GreenTech Solutions",
      sector: "Renewable Energy",
      type: "Standalone",
      revenue: { Q2FY24: 1450, Q2FY23: 800, growth: 81.25 },
      grossProfit: { Q2FY24: 500, Q2FY23: 300 },
      netProfit: { Q2FY24: 150, Q2FY23: 80, growth: 87.5 },
    },
    {
      id: 8,
      name: "Urban Rail Networks",
      sector: "Infrastructure",
      type: "Standalone",
      revenue: { Q2FY24: 2200, Q2FY23: 1500, growth: 46.67 },
      grossProfit: { Q2FY24: 600, Q2FY23: 450 },
      netProfit: { Q2FY24: 320, Q2FY23: 250, growth: 28 },
    },
    {
      id: 9,
      name: "Medico Health Services",
      sector: "Health",
      type: "Standalone",
      revenue: { Q2FY24: 890, Q2FY23: 600, growth: 48.33 },
      grossProfit: { Q2FY24: 120, Q2FY23: 90 },
      netProfit: { Q2FY24: 85, Q2FY23: 50, growth: 70 },
    },
    {
      id: 10,
      name: "TechNova Systems",
      sector: "IT",
      type: "Standalone",
      revenue: { Q2FY24: 2700, Q2FY23: 1800, growth: 50 },
      grossProfit: { Q2FY24: 850, Q2FY23: 500 },
      netProfit: { Q2FY24: 400, Q2FY23: 250, growth: 60 },
    },
  ]);

  const [filter, setFilter] = useState("Revenue Gainers");
  const CustomDropdown = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      onChange(option);
      setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
      <div className="customDropdown">
        <label className="dropdownLabel">{label}:</label>
        <div className="dropdownSelect" onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
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

  const getFilteredData = () => {
    switch (filter) {
      case "Revenue Gainers":
        return data.filter((item) => item.revenue.growth > 0);
      case "Revenue Losers":
        return data.filter((item) => item.revenue.growth < 0);
      case "Profit Gainers":
        return data.filter((item) => item.netProfit.growth > 0);
      case "Profit Losers":
        return data.filter((item) => item.netProfit.growth < 0);
      default:
        return data;
    }
  };

  // Function to get style based on growth value
  const getGrowthStyle = (growth) => {
    if (growth > 0) {
      return { color: "green" };
    } else if (growth < 0) {
      return { color: "red" };
    }
    return {}; // No style for zero growth
  };
  const options = [
    "Revenue Gainers",
    "Revenue Losers",
    "Profit Gainers",
    "Profit Losers",
  ];
  return (
  
    <div className="declaredquatralyearnging">
          <div className="headerdeclareearning"> 
    <h2 className="declaredheadertop">Declared Results</h2>
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {getFilteredData().map((item) => (
          <div key={item.id} className="result-card">
            <h4>{item.name}</h4>
            <p>
              <strong>Sector:</strong> {item.sector} | {item.type}
            </p>
            {/* Financial Data Table */}
            <table>
              <thead>
                <tr>
                  <th>Q2-FY24-25</th>
                  <th>Sep 24</th>
                  <th>Sep 23</th>
                  <th>Growth%</th>
                </tr>
              </thead>
              <tbody>
                {/* Revenue Row */}
                <tr>
                  <td><strong>Revenue (Cr.)</strong></td>
                  <td>{item.revenue.Q2FY24}</td>
                  <td>{item.revenue.Q2FY23}</td>
                  <td style={getGrowthStyle(item.revenue.growth)}>
                    {item.revenue.growth}%
                  </td>
                </tr>
                {/* Gross Profit Row */}
                <tr>
                  <td><strong>Gross Profit (Cr.)</strong></td>
                  <td>{item.grossProfit.Q2FY24}</td>
                  <td>{item.grossProfit.Q2FY23}</td>
                  <td>—</td>
                </tr>
                {/* Net Profit Row */}
                <tr>
                  <td><strong>Net Profit (Cr.)</strong></td>
                  <td>{item.netProfit.Q2FY24}</td>
                  <td>{item.netProfit.Q2FY23}</td>
                  <td style={getGrowthStyle(item.netProfit.growth)}>
                    {item.netProfit.growth}%
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

export default Declaredearning;
