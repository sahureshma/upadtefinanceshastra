import React from "react";
import { useNavigate } from 'react-router-dom';
import { fundsmallData } from "../Smallcapregulardata/Smallcapregulardata"; // Adjust the path if necessary
import { RiExpandUpDownLine } from "react-icons/ri"; // Import the icon
import { Link } from 'react-router-dom';

import Navbar from "../../Navbar/Navbar";

const Bestsmallcapregular = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
    <div className="funds-table-container">
      {/* Header Section */}
      <div className="funds-header">
        <h2 className="funds-table-title">Best Small cap Fund</h2>
        <div className="button-container">
          <button className="fund-button regular"style={{ backgroundColor: '#24b676', color: 'white' }}onClick={() => navigate("/bestsmallcapregular")}>Regular</button>
          <button 
  className="fund-button direct" 
  style={{ backgroundColor: 'white', color: 'black' }} 
  onClick={() => navigate("/bestsmallcapdirect")}
>
  Direct
</button>

        </div>
      </div>

      {/* Description */}
      <p className="funds-table-description">
        Looking for the best mutual funds to build your wealth? At Value
        Research, we’ve simplified the process for you. Our detailed guide to
        top-performing mutual funds across <br />different categories helps you
        identify options that suit your financial objectives.
      </p>

      {/* Table */}
      <table className="funds-table">
        <thead>
          <tr className="funds-table-header">
            <th>
              Funds 
            </th>
          
            <th>
              NAV (₹) <RiExpandUpDownLine />
            </th>
            <th>
              AUM (Cr) <RiExpandUpDownLine />
            </th>
            <th>
              SIP Amount <RiExpandUpDownLine />
            </th>
            <th>
              Exp. Ratio % <RiExpandUpDownLine />
            </th>
            <th>
              1Y (%) <RiExpandUpDownLine />
            </th>
            <th>
              3Y (%) <RiExpandUpDownLine />
            </th>
            <th>
              5Y (%) <RiExpandUpDownLine />
            </th>
          </tr>
        </thead>
        <tbody>
          {fundsmallData.map((fund, index) => (
            <tr className="funds-table-row" key={index}>
              <Link to="/mutualfund" className="fund-name-link">
          {fund.name}
        </Link>
             
              <td>{fund.nav}</td>
              <td>{fund.aum}</td>
              <td>{fund.sip}</td>
              <td>{fund.expRatio}</td>
              <td>{fund.returns["1Y"]}</td>
              <td>{fund.returns["3Y"]}</td>
              <td>{fund.returns["5Y"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Bestsmallcapregular;
