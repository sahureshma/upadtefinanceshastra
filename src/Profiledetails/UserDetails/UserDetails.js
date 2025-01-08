import React from "react";
import "./UserDetails.css";
import { BiSolidEdit } from "react-icons/bi";
import Navbar from "../../Navbar/Navbar";

const UserDetails = () => {
  const personalDetails = {
    name: "William Rober",
    username: "williamRober23",
    email: "williamRober23@gmail.com",
    gender: "Male",
    dob: "22-04-1997",
    ageGroup: "25 - 35",
    country: "India",
    state: "Maharashtra",
    city: "Pune",
    pin: "411012",
    address: "House no. 6, Mantri Lavendula, Mulshi Rd, Beside Barbacoa, Pranjali Patil Nagar, Bavdhan",
    mobile: "+91 9875864983",
  };

  const professionalDetails = {
    occupation: "Business",
    industry: "Banking and Financial Services",
    incomeRange: "15 lacs to 20 lacs",
  };

  const investmentDetails = {
    householdSavings: "₹1,00,000",
    termInsurance: "₹4,00,000",
    healthInsurance: "₹15,00,000",
    currentInvestments: "₹24,00,500",
    interestedToInvest: "-",
  };

  return (
    
    <div className="userDetails">
      <h1 className="profilepage-title">My profile</h1>
      <div className="profilepage-tabs">
        <span className="profilepage-tab active">Profile</span>
        <span className="profilepage-tab">Account and Billing</span>
        <span className="profilepage-tab">Password & Security</span>
        <span className="profilepage-tab">Active Devices</span>
      </div>
      {/* Personal Details Section */}
      <h2 className="sectionTitle">Personal Details</h2>
      <div className="allpersonal">
      <div className="personalDetailAll">
      {Object.entries(personalDetails).map(([key, value]) => (
  <p key={key} className="detailRow">
    <strong className="labelprofiledetail">
      {key
        .replace(/([A-Z])/g, " $1") // Add spaces before uppercase letters
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
        .toLowerCase() // Convert the rest of the string to lowercase
        .replace(/^\w/, (c) => c.toUpperCase()) // Ensure proper capitalization
      }
      :
    </strong>
    <span className="value">{value}</span>
  </p>
))}


           
      </div>
      <div className="editiconprofile"><BiSolidEdit /></div>
   </div>

      {/* Professional Details Section */}
      <h2 className="sectionTitle">Professional Details</h2>
      <div className="allpersonal">
      <div className="personalDetailAll">
       
      {Object.entries(professionalDetails).map(([key, value]) => (
  <p key={key} className="detailRow">
    <strong className="labelprofiledetail">
      {key
        .replace(/([A-Z])/g, " $1") // Add spaces before uppercase letters
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
        .toLowerCase() // Convert the rest of the string to lowercase
        .replace(/^\w/, (c) => c.toUpperCase()) // Ensure proper capitalization
      }
      :
    </strong>
    <span className="value">{value}</span>
  </p>
))}


           
      </div>
      <div className="editiconprofileee"><BiSolidEdit /></div>
   </div>
      {/* Investment Details Section */}
      <h2 className="sectionTitle">Investment Details</h2>
      <div className="allpersonal">
      <div className="personalDetailAll">
       
      {Object.entries(investmentDetails).map(([key, value]) => (
  <p key={key} className="detailRow">
    <strong className="labelprofiledetail">
      {key
        .replace(/([A-Z])/g, " $1") // Add spaces before uppercase letters
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
        .toLowerCase() // Convert the rest of the string to lowercase
        .replace(/^\w/, (c) => c.toUpperCase()) // Ensure proper capitalization
      }
      :
    </strong>
    <span className="value">{value}</span>
  </p>
))}


           
      </div>
      <div className="editiconprofilee"><BiSolidEdit /></div>
   </div>
   <Navbar/>
    </div>
  );
};

export default UserDetails;
