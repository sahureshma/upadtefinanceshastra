import React, { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward, IoIosCalendar } from 'react-icons/io';
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { IoMdSearch } from 'react-icons/io';
import Navbar from '../../../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import SectorAnalysis from '../Sectorquaterly/Sectorquaterly';

const Quarterlysector = () => {
  // Consolidate both date states into one
  const [selectedDate, setSelectedDate] = useState(new Date()); 
const navigate=useNavigate();
  // Handlers for navigating through months
  const handlePrev = () => {
    setSelectedDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1); // Go to the previous month
      return newDate;
    });
  };

  const handleNext = () => {
    setSelectedDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1); // Go to the next month
      return newDate;
    });
  };

  // Custom Input for DatePicker
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-field" onClick={onClick} ref={ref}>
      <span className="date-text">{value || 'Select a date'}</span>
      <IoIosCalendar className="calendar-icon" />
    </div>
  ));

  return (
    <div>
    <div className="quarterlyEarningLearncontainer">
      <h1 className="quarterlyEarningLearn-header">Quarterly Earning Results</h1>
      <p className="quarterlyEarningLearn-description">
        Quarterly results are periodic financial updates issued every three months, showcasing a company's performance metrics such as revenue, profits, and expenses. Explore detailed earnings reports, forthcoming announcements, and leading sectors to stay ahead of market trends.
      </p>

      {/* Navigation Tabs */}
      <div className="quarterlyEarningLearn-tabs">
      <button
        className="quarterlyEarningLearn-tab "
        onClick={() => navigate('/quarterlyEarningdashboard')}
      >
        Summary
      </button>
      <button className="quarterlyEarningLearn-tab">Upcoming Results</button>
      <button
        className="quarterlyEarningLearn-tab"
        onClick={() => navigate('/quarterlydeclaredpage')}
      >
        Declared Results
      </button>
      <button
        className="quarterlyEarningLearn-tab active"
        onClick={() => navigate('/quarterlysector')}
      >
        Sector Analysis
      </button>
    </div>

      {/* Summary Section */}
      <div className="quarterlyEarningLearn-summary">
        <div className="quarterlyEarningLearn-card">
          <h3>Results So Far - Q2 FY24-25 <IoIosArrowForward className='arrowearning' /></h3>
          <div className="dataquaterlyall">
            <div className="dataquaterlyall-metrics">
              <p><strong>4210/4568</strong></p>
            </div>
            <div className="dataquaterlyall-details">
              <p>Revenue YOY: <span className="quarterlyEarningLearn-positive">8.44%</span></p>
              <p>Net Profit YOY: <span className="quarterlyEarningLearn-positive">3.71%</span></p>
            </div>
          </div>
        </div>

        <div className="quarterlyEarningLearn-card">
          <h3>Positive Growth  <IoIosArrowForward className='arrowearning' /></h3>
          <p className="quarterlyEarningLearn-positive">2086</p>
        </div>

        <div className="quarterlyEarningLearn-card">
          <h3>Negative Growth  <IoIosArrowForward className='arrowearning' /></h3>
          <p className="quarterlyEarningLearn-negative">2108</p>
        </div>

        <div className="quarterlyEarningLearn-card">
          <h3>Top Performing Sector  <IoIosArrowForward className='arrowearning' /></h3>
          <p className='serviceeaingpara'>Services</p>
          <p className='serviceeaingpara'>Telecommunications</p>
        </div>

        <div className="quarterlyEarningLearn-card">
          <h3>Under Performing Sector  <IoIosArrowForward className='arrowearning' /></h3>
          <p className='serviceeaingparaa'>Airlines</p>
          <p className='serviceeaingparaa'>Gas & Petroleum</p>
        </div>
      </div>

      {/* Upcoming Results */}
      <div className="quarterlyEarningLearn-upcoming">
        <h2>Upcoming Results</h2>
        <div className="quarterlyEarningLearn-controls">
        {/* Date Selector */}
        <div className="quarterlyEarningLearn-dateSelector">
  {[22, 23, 24, 25, 26, 27, 28, 29].map((date) => (
    <button
      key={date}
      className={`quarterlyEarningLearn-dateButton ${selectedDate.getDate() === date ? 'selected' : ''}`}
      onClick={() => {
        const newDate = new Date(selectedDate);  // Create a new Date object
        newDate.setDate(date);  // Set the new day
        setSelectedDate(newDate);  // Update the state
      }}
   
    >
      {date} {selectedDate.toLocaleString('default', { month: 'short' })}  {/* Display month */}
     
    </button>
  ))}
</div>
         

        {/* Navigation Arrows */}
        <div className="quarterlyEarningLearns-controls">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <button onClick={handlePrev} aria-label="Previous Month">
              <IoIosArrowBack />
            </button>
           
            <button onClick={handleNext} aria-label="Next Month">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Calendar Field */}
        <div className="calendar-btnearning">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select a date"
            dateFormat="dd/MM/yyyy"
            customInput={<CustomInput />}
          />
        </div>

        {/* Search Field */}
        <div className="quaterlysearch">
          <IoMdSearch className="search-iconearning" />
          <input
            type="text"
            className="search-fieldearning"
            placeholder="Search for Stocks, Mutual..."
          />
        </div>
      </div>

      {/* No Updates Message */}
      <div className="quarterlyEarningLearn-resultsMessage">
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/026/432/original/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          className="noupdateicon"
          alt="No updates icon"
        />
        <p>No Updates Available Today</p>
      </div>
    </div>
    </div>
    <Navbar/>
    <SectorAnalysis/>
 
    </div>
  );
};

export default Quarterlysector;
