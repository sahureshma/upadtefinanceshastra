import React, { useState } from "react";
import { screenerStockListData } from "../screenerStockListData/screenerStockListData";
import "./ScreenerStockList.css";

const ScreenerStockList = () => {
  const [stocks, setStocks] = useState(screenerStockListData);
  const [sortDirection, setSortDirection] = useState(true);
  const [filters, setFilters] = useState({
    price: "All",
    marketCap: "All",
    divYield: "All",
    sector: "All",
  });

  const handleScreenerUnlock = () => {
    alert("Unlock feature is a premium service!");
  };

  const handleSort = (key) => {
    const sortedStocks = [...stocks].sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

      if (typeof valA === "string") valA = parseFloat(valA.replace(/[₹,%]/g, ""));
      if (typeof valB === "string") valB = parseFloat(valB.replace(/[₹,%]/g, ""));

      return sortDirection ? valA - valB : valB - valA;
    });

    setStocks(sortedStocks);
    setSortDirection(!sortDirection);
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

      return matchesPrice && matchesMarketCap && matchesDivYield && matchesSector;
    });

    setStocks(filteredStocks);
  };

  return (
    <div className="screener-container">
      <h1 className="screener-header">Stocks Screener</h1>

      {/* Filters */}
      <div className="screener-filters">
        {/* Price Filter */}
        <div className="filter-group">
          <select
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
          >
            <option value="All">Price</option>
            <option value="500">Up to ₹500</option>
            <option value="1000">Up to ₹1000</option>
            <option value="5000">Up to ₹5000</option>
          </select>
        </div>

        {/* Market Cap */}
        <div className="filter-group">
          <select
            value={filters.marketCap}
            onChange={(e) => handleFilterChange("marketCap", e.target.value)}
          >
            <option value="All">Market Cap</option>
            <option value="1">Up to 1T</option>
            <option value="10">Up to 10T</option>
          </select>
        </div>

        {/* Dividend Yield */}
        <div className="filter-group">
          <select
            value={filters.divYield}
            onChange={(e) => handleFilterChange("divYield", e.target.value)}
          >
            <option value="All">Div Yield %</option>
            <option value="1">1% or more</option>
            <option value="2">2% or more</option>
          </select>
        </div>

        {/* Sector */}
        <div className="filter-group">
          <select
            value={filters.sector}
            onChange={(e) => handleFilterChange("sector", e.target.value)}
          >
            <option value="All">Sector</option>
            <option value="Finance">Finance</option>
            <option value="Technology services">Technology Services</option>
            <option value="Energy minerals">Energy Minerals</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="screener-table-wrapper">
        <table className="screener-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price <button onClick={() => handleSort("price")}>↕</button></th>
              <th>Change %</th>
              <th>Volume</th>
              <th>Market Cap <button onClick={() => handleSort("marketCap")}>↕</button></th>
              <th>Div Yield % <button onClick={() => handleSort("divYield")}>↕</button></th>
              <th>Sector</th>
              <th>Unlock</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index} className="screener-row">
                <td className="symbol-cell">
                  <img
                    src={stock.icon}
                    alt={`${stock.symbol} logo`}
                    className="company-icon"
                  />
                  {stock.symbol}
                </td>
                <td>{stock.price}</td>
                <td>{stock.change}</td>
                <td>{stock.volume}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.divYield}</td>
                <td>{stock.sector}</td>
                <td>
                  <button
                    className="screener-unlock-btn"
                    onClick={handleScreenerUnlock}
                  >
                    Unlock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScreenerStockList;
