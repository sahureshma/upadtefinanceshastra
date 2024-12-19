import React, { useState } from "react";
import { screenerStockListData } from "../Stockdatanew/Stockdatanew";
import { PiCaretUpDownFill } from "react-icons/pi"; // Import the icon
import { IoLockClosedOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri"
import "./Stockscreen.css"; // Make sure to create the necessary CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from "../../../Navbar/Navbar";

const ScreenerStock = () => {
  const [stocks, setStocks] = useState(screenerStockListData);
  const [sortDirection, setSortDirection] = useState(true); // true for ascending, false for descending
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [visibleStocks, setVisibleStocks] = useState(10);
  const [selectedFilters, setSelectedFilters] = useState({
    index: [],
    return: [],
    marketCap: [],
    sector: [],
    roe: [],
    evenueGrowth:[],
  });
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

 


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
const [isPegDropdownVisible, setPegDropdownVisible] = useState(false);
const togglePegDropdown = () => setPegDropdownVisible(!isPegDropdownVisible);
const [isRevenueGrowthDropdownVisible, setRevenueGrowthDropdownVisible] = useState(false);
const toggleRevenueGrowthDropdown = () => {
  setRevenueGrowthDropdownVisible((prevVisible) => !prevVisible);
};
const [isPerfDropdownVisible, setPerfDropdownVisible] = useState(false);

// Define the togglePerfDropdown function
const togglePerfDropdown = () => {
  setPerfDropdownVisible(prevVisible => !prevVisible);
};

const [performanceRange, setPerformanceRange] = useState({ min: -30, max: 40 });

const handlePerformanceRangeChange = (value) => {
  setPerformanceRange((prevRange) => ({
    ...prevRange,
    min: value,
    max: value, // Both min and max are the same, creating a single slider
  }));
};



  // Apply the selected filters to the stock list


const applyRange = () => {
  console.log("Performance Range Applied:", performanceRange);
  setPerfDropdownVisible(false); // Close dropdown after applying
};

const resetRange = () => {
  setPerformanceRange({ min: -30, max: 40 });
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


  const handleApplyFilters = () => {
    const filteredStocks = screenerStockListData.filter((stock) => {
      const matchesPrice = filters.price === "All" || parseFloat(stock.price.replace("₹", "")) <= parseFloat(filters.price);
      const matchesMarketCap = filters.marketCap === "All" || parseFloat(stock.marketCap.replace("T", "")) <= parseFloat(filters.marketCap);
      const matchesSector = filters.sector === "All" || stock.sector === filters.sector;
      const matchesChange = filters.change === "All" || (parseFloat(stock.change.replace("%", "")) >= parseFloat(filters.change));
      
      // ROE filter logic
      const matchesROE = filters.roe.length === 0 || filters.roe.some((roeValue) => {
        if (roeValue === "30" && stock.roe >= 30) return true;
        if (roeValue === "15" && stock.roe >= 15) return true;
        if (roeValue === "0-above" && stock.roe >= 0) return true;
        if (roeValue === "0-below" && stock.roe < 0) return true;
        if (roeValue === "15-below" && stock.roe < 15) return true;
        return false;
      });

      return matchesPrice && matchesMarketCap && matchesSector && matchesChange && matchesROE;
    });
    setStocks(filteredStocks); // Set filtered stocks based on the criteria
    setIsDropdownVisible(false); // Close the dropdown after applying filters
  };
  const handleResetFilters = (filterName) => {
    // Reset selected filters for a specific dropdown
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: [], // Clear the specific filter
    }));
  
    // Reset all filters to their default values
    const resetFilters = {
      price: "All",
      marketCap: "All",
      change: "All",
      sector: "All",
      roe: [], // Reset ROE as an empty array
    };
    setFilters(resetFilters);
  
    // Reset the stocks list to the original list
    setStocks(screenerStockListData);
  
    // Reset the number of visible stocks
    setVisibleStocks(10);
  
    // Close dropdowns
    setIsDropdownVisible(false);
  
    // Apply filters based on the reset values
    const filteredStocks = screenerStockListData.filter((stock) => {
      const matchesPrice =
        resetFilters.price === "All" || parseFloat(stock.price.replace("₹", "")) <= parseFloat(resetFilters.price);
  
      const matchesMarketCap =
        resetFilters.marketCap === "All" ||
        parseFloat(stock.marketCap.replace("T", "")) <= parseFloat(resetFilters.marketCap);
  
      const matchesSector = resetFilters.sector === "All" || stock.sector === resetFilters.sector;
  
      const matchesChange =
        resetFilters.change === "All" || parseFloat(stock.change.replace("%", "")) >= parseFloat(resetFilters.change);
  
      const matchesROE =
        resetFilters.roe.length === 0 ||
        resetFilters.roe.some((roeValue) => {
          if (roeValue === "30" && stock.roe >= 30) return true;
          if (roeValue === "15" && stock.roe >= 15) return true;
          if (roeValue === "0-above" && stock.roe >= 0) return true;
          if (roeValue === "0-below" && stock.roe < 0) return true;
          if (roeValue === "15-below" && stock.roe < 15) return true;
          return false;
        });
  
      return matchesPrice && matchesMarketCap && matchesSector && matchesChange && matchesROE;
    });
  
    // Set the filtered stocks to the state
    setStocks(filteredStocks);
  };
  

  // Update handleFilterChange to handle the ROE filter as an array
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters };

    if (key === 'roe') {
      const currentValues = newFilters[key];
      if (currentValues.includes(value)) {
        newFilters[key] = currentValues.filter((v) => v !== value);
      } else {
        newFilters[key] = [...currentValues, value];
      }
    } else {
      newFilters[key] = value;
    }

    setFilters(newFilters);
    // Apply the filters
    const filteredStocks = screenerStockListData.filter((stock) => {
      const matchesPrice =
        newFilters.price === "All" || parseFloat(stock.price.replace("₹", "")) <= parseFloat(newFilters.price);

      const matchesMarketCap =
        newFilters.marketCap === "All" || parseFloat(stock.marketCap.replace("T", "")) <= parseFloat(newFilters.marketCap);

      const matchesDivYield =
        newFilters.divYield === "All" || parseFloat(stock.divYield.replace("%", "")) >= parseFloat(newFilters.divYield);

      const matchesSector = newFilters.sector === "All" || stock.sector === newFilters.sector;

      const matchesChange =
        newFilters.change === "All" ||
        (newFilters.change === "-5" && parseFloat(stock.change) <= -5) ||
        (newFilters.change === "0" && parseFloat(stock.change) >= 0) ||
        (newFilters.change === "5" && parseFloat(stock.change) >= 5) ||
        (newFilters.change === "10" && parseFloat(stock.change) >= 10);

      const matchesROE =
        newFilters.roe.length === 0 ||
        newFilters.roe.some((roeValue) => {
          if (roeValue === "30" && parseFloat(stock.roe) >= 30) return true;
          if (roeValue === "15" && parseFloat(stock.roe) >= 15) return true;
          if (roeValue === "0-above" && parseFloat(stock.roe) >= 0) return true;
          if (roeValue === "0-below" && parseFloat(stock.roe) < 0) return true;
          if (roeValue === "15-below" && parseFloat(stock.roe) < 15) return true;
          return false;
        });

      return (
        matchesPrice &&
        matchesMarketCap &&
        matchesDivYield &&
        matchesSector &&
        matchesChange &&
        matchesROE
      );
    });

    setStocks(filteredStocks);
  };

  return (
    <div className="screener-container">
      <h1 className="screener-header">Stocks Screener</h1>

      {/* Filters */}
      <div className="screener-filters">
        {/* Filter for each parameter */}
        <div className="filter-group">
          <select value={filters.index} onChange={(e) => handleFilterChange("index", e.target.value)}>
            <option value="All" disabled hidden>Index</option>
            <option value="Nifty">Nifty</option>
            <option value="Sensex">Sensex</option>
          </select>
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
          <select value={filters.change} onChange={(e) => handleFilterChange("change", e.target.value)}>
            <option value="All" disabled hidden>Change%</option>
            <option value="-5">-5% or more</option>
            <option value="0">0% or more</option>
            <option value="5">+5% or more</option>
            <option value="10">+10% or more</option>
          </select>
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

        <div className="filter-group performance-filter">
  <div className="dropdown-performance-wrapper">
    <button
      className="dropdown-performance-toggle"
      onClick={togglePerfDropdown}
    >
      Perf% <RiArrowDropDownLine size={24} />
    </button>
    {isPerfDropdownVisible && (
      <div className="dropdown-performance-options">
        <div className="dropdown-performance-range">
          <label>
            <input
              type="number"
              value={performanceRange.min}
              onChange={(e) => handlePerformanceRangeChange(e.target.value)}
              className="performance-input"
            />
            %
          </label>
          <span>To</span>
          <label>
            <input
              type="number"
              value={performanceRange.max}
              onChange={(e) => handlePerformanceRangeChange(e.target.value)}
              className="performance-input"
            />
            %
          </label>
        </div>

        <div className="dropdown-performance-slider">
          <input
            type="range"
            min="-50"
            max="100"
            value={performanceRange.min}
            
            onChange={(e) => handlePerformanceRangeChange(e.target.value)}
            className="performance-slider"
            step="1"
            style={{
              backgroundSize: `${((performanceRange.min + 50) / 150) * 100}% 100%, ${((performanceRange.max + 50) / 150) * 100}% 100%`
            }}
            
          />
        </div>

        <div className="dropdown-performance-actions">
          <button className="reset-performance-button" onClick={resetRange}>
            Reset
          </button>
          <button className="apply-performance-button" onClick={applyRange}>
            Apply
          </button>
        </div>
      </div>
    )}
  </div>
</div>

{/* Revenue Growth Dropdown */}
<div className="filter-group revenue-growth-filter">
  <div className="dropdown-revenue-growth-wrapper">
    <button
      className="dropdown-revenue-growth-toggle"
      onClick={toggleRevenueGrowthDropdown}
    >
      Revenue Growth <RiArrowDropDownLine size={24} />
    </button>
    {isRevenueGrowthDropdownVisible && (
      <div className="dropdown-revenue-growth-options">
        <label className="dropdown-revenue-growth-label">
          <input
            type="checkbox"
            value="50-above"
            checked={filters.revenueGrowth.includes("50-above")}
            onChange={() => handleFilterChange("revenueGrowth", "50-above")}
            style={{ width: "40%" }}
            className="dropdown-revenue-growth-checkbox"
          />
          50% and above
        </label>
        <label className="dropdown-revenue-growth-label">
          <input
            type="checkbox"
            value="25-above"
            checked={filters.revenueGrowth.includes("25-above")}
            onChange={() => handleFilterChange("revenueGrowth", "25-above")}
            style={{ width: "40%" }}
            className="dropdown-revenue-growth-checkbox"
          />
          25% and above
        </label>
        <label className="dropdown-revenue-growth-label">
          <input
            type="checkbox"
            value="10-below"
            checked={filters.revenueGrowth.includes("10-below")}
            onChange={() => handleFilterChange("revenueGrowth", "10-below")}
            style={{ width: "40%" }}
            className="dropdown-revenue-growth-checkbox"
          />
          10% and below
        </label>
        <label className="dropdown-revenue-growth-label">
          <input
            type="checkbox"
            value="0-above"
            checked={filters.revenueGrowth.includes("0-above")}
            onChange={() => handleFilterChange("revenueGrowth", "0-above")}
            style={{ width: "40%" }}
            className="dropdown-revenue-growth-checkbox"
          
          />
          0% and above
        </label>
        <label className="dropdown-revenue-growth-label">
          <input
            type="checkbox"
            value="0-below"
            checked={filters.revenueGrowth.includes("0-below")}
            onChange={() => handleFilterChange("revenueGrowth", "0-below")}
            style={{ width: "40%" }}
            className="dropdown-revenue-growth-checkbox"
            
          />
          0% and below
        </label>
        <label className="dropdown-revenue-growth-label">
          <input
            type="checkbox"
            value="-25-below"
            checked={filters.revenueGrowth.includes("-25-below")}
            onChange={() => handleFilterChange("revenueGrowth", "-25-below")}
            style={{ width: "40%" }}
            className="dropdown-revenue-growth-checkbox"
           
          />
          -25% and below
        </label>
        <div className="dropdown-revenue-growth-actions">
          <button
            className="dropdown-revenue-growth-reset"
            onClick={handleResetFilters}
            
          >
            Reset
          </button>
          <button
            className="dropdown-revenue-growth-apply"
            onClick={handleApplyFilters}
          >
            Apply
          </button>
        </div>
      </div>
    )}
  </div>
</div>

         {/* PEG Dropdown */}
<div className="filter-group peg-filter-container">
  <div className="dropdown-peg-wrapper">
    <button className="dropdown-peg-toggle" onClick={togglePegDropdown}>
      PEG <RiArrowDropDownLine size={24} />
    </button>
    {isPegDropdownVisible && (
      <div className="dropdown-peg-options">
        <label>
          <input
            type="checkbox"
            value="2-above"
            checked={filters.peg.includes("2-above")}
            onChange={() => handleFilterChange("peg", "2-above")}
            style={{ width: "40%" }}
          />
          2 and above
        </label>
        <label>
          <input
            type="checkbox"
            value="2-below"
            checked={filters.peg.includes("2-below")}
            onChange={() => handleFilterChange("peg", "2-below")}
            style={{ width: "40%" }}
          />
          2 and below
        </label>
        <label>
          <input
            type="checkbox"
            value="1-above"
            checked={filters.peg.includes("1-above")}
            onChange={() => handleFilterChange("peg", "1-above")}
            style={{ width: "40%" }}
          />
          1 and above
        </label>
        <label>
          <input
            type="checkbox"
            value="1-below"
            checked={filters.peg.includes("1-below")}
            onChange={() => handleFilterChange("peg", "1-below")}
            style={{ width: "40%" }}
          />
          1 and below
        </label>
        <label>
          <input
            type="checkbox"
            value="0.9-1.1"
            checked={filters.peg.includes("0.9-1.1")}
            onChange={() => handleFilterChange("peg", "0.9-1.1")}
            style={{ width: "40%" }}
          />
          0.9 to 1.1
        </label>
        <label>
          <input
            type="checkbox"
            value="0.5-below"
            checked={filters.peg.includes("0.5-below")}
            onChange={() => handleFilterChange("peg", "0.5-below")}
            style={{ width: "40%" }}
          />
          0.5 and below
        </label>
        <div className="dropdown-peg-actions">
          <button
            className="dropdown-peg-reset"
            onClick={() => setFilters((prevFilters) => ({ ...prevFilters, peg: [] }))}
          >
            Reset
          </button>
          <button
            className="dropdown-peg-apply"
            onClick={() => console.log("PEG Filters Applied:", filters.peg)}
          >
            Apply
          </button>
        </div>
      </div>
    )}
  </div>
</div>

<div className="filter-group roe-filter">
<div className="dropdownscreenerstock">
        <button onClick={toggleDropdown}>
          ROE
        </button>
        {isDropdownVisible && (
          <div className="dropdownscreenerstock-content">
            <label>
              <input
                type="checkbox"
                value="30"
                checked={filters.roe.includes("30")}
                onChange={() => handleFilterChange("roe", "30")}
                style={{ width: "40%" }}
              />
              30% and above
            </label>
            <label>
              <input
                type="checkbox"
                value="15"
                checked={filters.roe.includes("15")}
                onChange={() => handleFilterChange("roe", "15")}
                style={{ width: "40%" }}
              />
              15% and above
            </label>
            <label>
              <input
                type="checkbox"
                value="0-above"
                checked={filters.roe.includes("0-above")}
                onChange={() => handleFilterChange("roe", "0-above")}
                style={{ width: "40%" }}
              />
              0% and above
            </label>
            <label>
              <input
                type="checkbox"
                value="0-below"
                checked={filters.roe.includes("0-below")}
                onChange={() => handleFilterChange("roe", "0-below")}
                style={{ width: "40%" }}
              />
              0% and below
            </label>
            <label>
              <input
                type="checkbox"
                value="15-below"
                checked={filters.roe.includes("15-below")}
                onChange={() => handleFilterChange("roe", "15-below")}
                style={{ width: "40%" }}
              />
              15% and below
            </label>
            <div className="dropdownscreenerstock-buttons">
              <button onClick={handleApplyFilters} className="applyscreener-button" >Apply</button>
              <button onClick={handleResetFilters}  className="resetscreener-button">Reset</button>
            </div>
              </div>
            )}
          </div>
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
      <img src={stock.icon} alt={`${stock.symbol} logo`} className="company-icon" />


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
    {parseFloat(stock.epsDilGrowth) > 0 ? stock.epsDilGrowth : `${stock.epsDilGrowth}`}

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

export default ScreenerStock;