import React, { useState } from "react";
import { screenerStockListData } from "../Stockdatanew/Stockdatanew";
import { PiCaretUpDownFill } from "react-icons/pi"; // Import the icon
import { IoLockClosedOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Stockscreen.css"; // Make sure to create the necessary CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from "../../../Navbar/Navbar";

const ScreenerStockList = () => {
  const [stocks, setStocks] = useState(screenerStockListData);
  const [sortDirection, setSortDirection] = useState(true); // true for ascending, false for descending
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [dropdownVisibility, setDropdownVisibility] = useState(false); 
  const [minValue, setMinValue] = useState(-30);  // Default Min
  const [maxValue, setMaxValue] = useState(40);   // Default Max
  const [minPriceChange, setMinPriceChange] = useState(-30); // Default Min for price change
  const [maxPriceChange, setMaxPriceChange] = useState(40);   // Default Max for price change
  const [minChange, setMinChange] = useState(-30); // Default Min for change range
  const [maxChange, setMaxChange] = useState(40);   // Default Max for change range
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    index: "All",
    price: "All",
    change: "All",
    marketCap: "All",
    epsDilGrowth: "All",
    divYield: "All",
    sector: "All",
    performance: "All",
    revenueGrowth: "All",
    peg: "All",
    roe: "All",
  });
  const [showIndexDropdown, setShowIndexDropdown] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // For searching indexes
  const allIndexes = [
    "Nifty 50",
    "Nifty 500",
    "Nifty Midcap 100",
    "Nifty Smallcap 100",
    "Nifty Alpha 50",
    "Nifty Bank",
    "Nifty 100",
    "Nifty Next 50",
    "Nifty Midcap 150",
    "Nifty Smallcap 250",
    "Nifty50 Value 20",
    "Nifty Commodities",
    "Nifty 200",
    "Nifty LargeMidcap 250",
    "Nifty Midcap 50",
    "Nifty Smallcap 50",
    "Nifty Auto",
    "Nifty CPSE",
  ];
  
 
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleSort = (key) => {
    const sortedStocks = [...stocks].sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

      // Clean strings that are numeric and convert to number for comparison
      if (typeof valA === "string") {
        if (key === "price" || key === "marketCap") {
          valA = parseFloat(valA.replace(/[₹, T]/g, "")); // Remove ₹, T and convert to number
        } else if (key !== "sector") {
          valA = parseFloat(valA.replace(/[₹,%]/g, ""));
        }
      }

      if (typeof valB === "string") {
        if (key === "price" || key === "marketCap") {
          valB = parseFloat(valB.replace(/[₹, T]/g, "")); // Remove ₹, T and convert to number
        } else if (key !== "sector") {
          valB = parseFloat(valB.replace(/[₹,%]/g, ""));
        }
      }

      // For sector column, compare alphabetically
      if (key === "sector") {
        return sortDirection ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      // For other columns, compare numerically
      return sortDirection ? valA - valB : valB - valA;
    });

    setStocks(sortedStocks);
    setSortDirection(!sortDirection); // Toggle sort direction
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const filteredStocks = screenerStockListData.filter((stock) => {
      const matchesPrice =
        newFilters.price === "All" ||
        parseFloat(stock.price.replace("₹", "")) <= parseFloat(newFilters.price);

      const matchesMarketCap =
        newFilters.marketCap === "All" ||
        parseFloat(stock.marketCap.replace("T", "")) <= parseFloat(newFilters.marketCap);

      const matchesDivYield =
        newFilters.divYield === "All" ||
        parseFloat(stock.divYield.replace("%", "")) >= parseFloat(newFilters.divYield);

      const matchesSector =
        newFilters.sector === "All" || stock.sector === newFilters.sector;

      const matchesChange =
        newFilters.change === "All" ||
        (newFilters.change === "-5" && parseFloat(stock.change) <= -5) ||
        (newFilters.change === "0" && parseFloat(stock.change) >= 0) ||
        (newFilters.change === "5" && parseFloat(stock.change) >= 5) ||
        (newFilters.change === "10" && parseFloat(stock.change) >= 10);

      return matchesPrice && matchesMarketCap && matchesDivYield && matchesSector && matchesChange;
    });

    setStocks(filteredStocks);
  };



 

  const toggleDropdown = () => {
    setDropdownVisibility((prevState) => !prevState);
  };


  const handlePriceChangeRange = (e) => {
    const { name, value } = e.target;
    if (name === "min") setMinPriceChange(Number(value));
    if (name === "max") setMaxPriceChange(Number(value));
  };

  const handleReset = () => {
    setMinValue(-30); // Reset to default min
    setMaxValue(40);  // Reset to default max
  };

  const handleApply = () => {
    console.log(`Applied: Min Change: ${minChange}, Max Change: ${maxChange}`);
    console.log(`Price Range: Min: ${minPriceChange}, Max: ${maxPriceChange}`);
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    if (e.target.name === "min") {
      if (value < maxValue) setMinValue(value); // Ensure min doesn't exceed max
    } else {
      if (value > minValue) setMaxValue(value); // Ensure max doesn't go below min
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "min") setMinValue(Number(value));
    if (name === "max") setMaxValue(Number(value));
  };


  const toggleFilter = () => {
    setShowFilter((prevState) => !prevState);
  };


  return (
    <div className="screener-container">
      <h1 className="screener-header">Stocks Screener</h1>

      {/* Filters */}
      <div className="screener-filters">
        {/* Filter for each parameter */}
        <div className="filter-group" style={{ position: "relative" }}>
        <button
  className="dropdown-toggle"
  onClick={() => setShowIndexDropdown(!showIndexDropdown)}
>
  Index
  <RiArrowDropDownLine className="dropdown-icon" />
</button>
  {showIndexDropdown && (
    <div className="index-dropdown">
     <div className="index-search-container">
  <CiSearch className="index-search-icon" />
  <input
    type="text"
    className="index-search"
    placeholder="Find Index"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
      {/* List of Indexes */}
      <div className="index-list">
      {allIndexes
  .filter((index) =>
    index.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((index, idx) => (
    <label key={idx} className="index-item">
      <input
        type="checkbox"
        className="index-checkbox"  // Add class name for the checkbox
        value={index}
        checked={selectedIndexes.includes(index)}
        onChange={(e) => {
          const value = e.target.value;
          setSelectedIndexes((prev) =>
            prev.includes(value)
              ? prev.filter((item) => item !== value)
              : [...prev, value]
          );
        }}
      />
      <span className="index-value">{index}</span>  {/* Add class name for the value */}
    </label>
  ))}

</div>



      {/* Reset and Apply Buttons */}
      <div className="index-actions">
        <button
          className="reset-btn"
          onClick={() => {
            setSelectedIndexes([]);
            setSearchQuery("");
          }}
        >
          Reset
        </button>
        <button
          className="apply-btn"
          onClick={() => {
            handleFilterChange("index", selectedIndexes);
            setShowIndexDropdown(false);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  )}
</div>

        {/* Price Filter */}
        <div className="filter-group">
          <select value={filters.price} onChange={(e) => handleFilterChange("price", e.target.value)}>
            <option value="All" disabled hidden>Price</option>
            <option value="500">Up to ₹500</option>
            <option value="1000">Up to ₹1000</option>
            <option value="5000">Up to ₹5000</option>
          </select>
        </div>

      
      
        <div className="filter-group">
        <button onClick={toggleFilter}>
          Change %
        </button>

        {/* Show filter only when showFilter is true */}
        {showFilter && (
         <>
          

            {/* Range Slider */}
            <div className="slider-container">
              <input
                type="range"
                name="min"
                min="-100"
                max="100"
                value={minValue}
                onChange={handleSliderChange}
                className="slider"
              />
              <input
                type="range"
                name="max"
                min="-100"
                max="100"
                value={maxValue}
                onChange={handleSliderChange}
                className="slider"
              />
            </div>

            {/* Min and Max Input Fields */}
            <div className="range-inputs">
              <label>
                Min Change:
                <input
                  type="number"
                  name="min"
                  value={minValue}
                  onChange={handleInputChange}
                  min="-100"
                  max="100"
                />
              </label>
              <span className="to-label">To</span>
              <label>
                Max Change:
                <input
                  type="number"
                  name="max"
                  value={maxValue}
                  onChange={handleInputChange}
                  min="-100"
                  max="100"
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button className="reset-btn" onClick={handleReset}>Reset</button>
              <button className="apply-btn" onClick={handleApply}>Apply</button>
            </div>
          </>
        )}
      </div>
        <div className="filter-group">
          <select value={filters.marketCap} onChange={(e) => handleFilterChange("marketCap", e.target.value)}>
            <option value="All" disabled hidden>Market Cap</option>
            <option value="1">Up to 1T</option>
            <option value="10">Up to 10T</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.epsDilGrowth} onChange={(e) => handleFilterChange("epsDilGrowth", e.target.value)}>
            <option value="All" disabled hidden>EPS Dil Growth</option>
            <option value="10">Above 10%</option>
            <option value="20">Above 20%</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.divYield} onChange={(e) => handleFilterChange("divYield", e.target.value)}>
            <option value="All" disabled hidden>Div Yield %</option>
            <option value="1">1% or more</option>
            <option value="2">2% or more</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.sector} onChange={(e) => handleFilterChange("sector", e.target.value)}>
            <option value="All" disabled hidden>Sector</option>
            <option value="Finance">Finance</option>
            <option value="Technology services">Technology Services</option>
            <option value="Energy minerals">Energy Minerals</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.performance} onChange={(e) => handleFilterChange("performance", e.target.value)}>
            <option value="All" disabled hidden>Perf%</option>
            <option value="5">Up to 5%</option>
            <option value="10">Up to 10%</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.revenueGrowth} onChange={(e) => handleFilterChange("revenueGrowth", e.target.value)}>
            <option value="All" disabled hidden>Revenue Growth</option>
            <option value="5">Above 5%</option>
            <option value="10">Above 10%</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.peg} onChange={(e) => handleFilterChange("peg", e.target.value)}>
            <option value="All" disabled hidden>PEG</option>
            <option value="1">Up to 1</option>
            <option value="2">Up to 2</option>
          </select>
        </div>

        <div className="filter-group">
          <select value={filters.roe} onChange={(e) => handleFilterChange("roe", e.target.value)}>
            <option value="All" disabled hidden>ROE</option>
            <option value="10">Above 10%</option>
            <option value="20">Above 20%</option>
          </select>
        </div>
      </div>
      {/* Tabs */}
<div className="tab-container">
<button
          className={`tab-button ${activeTab === "Overview" ? "active" : ""}`}

          onClick={() => {
            setActiveTab("Overview");
            navigate('/StockScreenerList'); // Navigate to the StockScreenerList page
          }}
        >
          Overview
        </button>

        <button
        className={`tab-button ${activeTab === "Valuation" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("Valuation");
            navigate('/ScreenerStockvaluation'); // Navigate to the ScreenerStockvaluation page
          }}
        >
          Valuation
        </button>

        <button
          className={`tab-button ${activeTab === "Income Statement" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("Income Statement");
            navigate('/IncomeStatement'); // Add a route for Income Statement if needed
          }}
        >
          Income Statement
        </button>
</div>

{/* Conditional Rendering */}

<div className="screener-table-wrapper" style={{ overflowY: 'auto', height: '500px' }}>
  <table className="screener-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead style={{ position: 'sticky', top: 0, backgroundColor: '#f9f9f9', zIndex: 10, boxShadow: '0 4px 6px #24b676' }}>
            <tr>
              <th>Symbol</th>
              <th>
                Price 
                <button className="screenerbtnlist" onClick={() => handleSort("price")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                Change % 
                <button className="screenerbtnlist" onClick={() => handleSort("change")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                Volume
                <button className="screenerbtnlist" onClick={() => handleSort("volume")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                Market Cap 
                <button className="screenerbtnlist" onClick={() => handleSort("marketCap")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                P / E
                <button className="screenerbtnlist" onClick={() => handleSort("p/e")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                EPS (₹)
                <button className="screenerbtnlist" onClick={() => handleSort("eps")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                EPS Gr % 
                <button className="screenerbtnlist" onClick={() => handleSort("epsDilGrowth")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                Div Yield % 
                <button className="screenerbtnlist" onClick={() => handleSort("divYield")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                Sector
                <button className="screenerbtnlist" onClick={() => handleSort("sector")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
              <th>
                Analyst Rating
                <button className="screenerbtnlist" onClick={() => handleSort("analystrating")}>
                  <PiCaretUpDownFill />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
  {stocks.map((stock, index) => (
    <tr key={index} className="screener-row">
      <td className="symbol-cell">
      <img
  src={stock.icon || "path/to/default-image.png"}
  alt={`${stock.symbol} logo`}
  className="company-icon"
/>

        {stock.symbol}
      </td>
      <td>{stock.price}</td>
      <td
        style={{
          color: parseFloat(stock.change) > 0 ? "#24b676" : parseFloat(stock.change) < 0 ? "red" : "inherit",
        }}
      >
        {parseFloat(stock.change) > 0 ? `${stock.change}` : stock.change}

      </td>
                <td>{stock.volume}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.pToE}</td>
                <td>{stock.eps}</td>
                <td
        style={{
          color: parseFloat(stock.epsDilGrowth) > 0 ? "#24b676" : parseFloat(stock.epsDilGrowth) < 0 ? "red" : "inherit",
        }}
      >
        {parseFloat(stock.epsDilGrowth) > 0 ? stock.epsDilGrowth : stock.epsDilGrowth}

      </td>
                <td>{stock.divYield}</td>
                <td
  style={{
    color: "blue",
    
  }}
>
  {stock.sector}
</td>


<td>
  <button className="screener-unlock-btn" >
    <IoLockClosedOutline style={{ marginRight: '8px' }} /> {/* Adds lock icon with margin */}
    <span className="button-text">Unlock</span> {/* The text inside the button */}
  </button>
</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <Navbar/>
    </div>
  );
};

export default ScreenerStockList;