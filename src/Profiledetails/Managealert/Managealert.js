import React, { useState } from 'react';
import './Managealert.css'; // Add your styles here
import Navbar from '../../Navbar/Navbar';
import { IoIosClose } from "react-icons/io";

const Managealert = () => {
    const [activeNotification, setActiveNotification] = useState(null); 
    const [subscribedItems, setSubscribedItems] = useState({});
  const subscriptionData = [
    {
      title: 'E-mailers/ SMS',
      items: [
        'Site information/ Feature usage',
        'Site information/ Feature usage Subscribe',
        'Promotional/ Special offers',
        'Investment Shastra Newsletter',
        'Smart Alerts',
      ],
    },
    {
      title: 'E-mailers/ SMS Alerts',
      items: [
        'Buy/Sell Price triggers',
        'Right Timing Buy/Sell signals',
        'Stop Loss alerts',
      ],
    },
  ];
  const handleSubscribe = (item) => {
    setSubscribedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item], // Toggle the subscription state
    }));
  };

  const handleNotificationClose = (item) => {
    setSubscribedItems((prevState) => ({
      ...prevState,
      [item]: undefined, // Clear the notification for the specific item
    }));
  };
  return (
    <div className="managealertalldata">
     <h1 className="profilepage-titleorder">Manage Alert</h1>
      <div className="profilepage-tabsorder">
        <span className="profilepage-tabb">My Account</span>
        <span className="profilepage-tabb">Orders</span>
        <span className="profilepage-tabb">Billing & Subscription</span>
        <span className="profilepage-tabb">Risk Profile Report</span>
        <span className="profilepage-tabbbactive">Manage Alert</span>

        <span className="profilepage-tabb">Password & Security</span>
        <span className="profilepage-tabb">Active Devices</span>
        <span className="profilepage-tabb">My referrals</span>
      </div>
      <p className="descriptionnalert">
        You may unsubscribe from any Email/SMS alerts' category by clicking on the <br/>respective links below. If you have any query, feel free to{' '}
        <a href="/contact" className="contact-link">contact us</a>.
      </p>
      {subscriptionData.map((category, index) => (
        <div key={index} className="subscription-category">
          <h2 className="category-title">{category.title}</h2>
          {category.items.map((item, idx) => (
            <div key={idx} className="subscription-item">
              <span className="item-name">{item}</span>
              {subscribedItems[item] !== undefined && (
                <div className="notification-alert"
                style={{
                    backgroundColor: subscribedItems[item] ? "#e0f7e0" : "#ffe6e6", // Green for subscribe, red for unsubscribe
                    border: subscribedItems[item] ? "1px solid #24b676" : "1px solid #ff4d4d", // Border color
                    color: subscribedItems[item] ? "#2e7d32" : "#d32f2f", // Text color
                  }}>
                  {subscribedItems[item] ? (
                   <div className='subscribersuccesful'>
                   You have successfully subscribed to "{item}"!
                 </div>
               ) : (
                <div className='subscribersuccesful'>
                   You have successfully unsubscribed from "{item}"!
                 </div>
               )}
               <span
                 style={{ marginLeft: '3px', cursor: 'pointer', color: 'black' }}
                 onClick={() => handleNotificationClose(item)}
               >
                 <IoIosClose />
               </span>
                 
                </div>
              )}
              <button
                className={
                  subscribedItems[item] ? 'unsubscribe-button' : 'subscribe-buttonmanage'
                }
                onClick={() => handleSubscribe(item)}
              >
                {subscribedItems[item] ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      ))}


      <div className="subscribe-footerrmanagealert">
      <h1 className="headingmanagealert">Subscribe Now!</h1>
        <h2>Choose a plan that aligns with your investment goals!</h2>
        <button className="footer-subscribe-buttonmanage">Subscribe</button>
      </div>
      <Navbar/>
    </div>
  );
};

export default Managealert;
