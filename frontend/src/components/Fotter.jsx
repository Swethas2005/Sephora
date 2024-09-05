import React from 'react';
import './Fotter.css';

const Footer = () => {
  return (
    <footer className="fotter">
      <div id="first-fotter">
        <div className='fotter-text'>
          <img className='fotter-logo' src="https://www.sephora.com/img/ufe/icons/find-store.svg" alt="logo-1" />
          <p>Find a Store</p>
        </div>

        <div className='fotter-text'>
          <img className='fotter-logo' src="https://thumbs.dreamstime.com/b/white-customer-support-customer-service-icon-logo-dark-background-customer-support-customer-service-icon-logo-dark-133611514.jpg" alt="logo-2" />
          <p>Customer Service</p>
        </div>

        <div className='fotter-text'>
          <img className='fotter-logo' src="https://www.sephora.com/img/ufe/icons/app.svg" alt="logo-3" />
          <p>Get the App</p>
        </div>

        <div className='fotter-text'>
          <img className='fotter-logo' src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" alt="logo-4" />
          <p>Get Sephora Text</p>
        </div>

        <div className='fotter-text'>
          <img className='fotter-logo' src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" alt="logo-5" />
          <p>Sephora Credit</p>
        </div>
      </div>

      {/* Add the horizontal line here */}
      <hr className="footer-line" />

      {/* fotter-2 */}
      <div id='fotter-2'>
        <div className='fotter-div-1'>
          <p>About Sephora</p>
          <p>About Sephora</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Sephora Values</p>
          <p>Supply Chain Transparency</p>
          <p>Affiliates</p>
          <p>Sephora Events</p>
          <p>Gift Cards</p>
          <p>Sephora Global Sites</p>
          <p>Diversity, Equity & Inclusion</p>
          <p>Sephora Accelerate</p>
          <p>Beauty (Re)Purposed</p>
          <p>Report a Vulnerability</p>
        </div>

        <div className='fotter-div-1'>
          <p>My Sephora</p>
          <p>Beauty Insider</p>
          <p>Sephora Credit Card</p>
          <p>Community Profile</p>
          <p>Order Status</p>
          <p>Purchase History</p>
          <p>Account Settings</p>
          <p>Beauty Advisor Recommendations</p>
          <p>Auto-Replenishment</p>
          <p>Beauty Offers</p>
          <p>Buying Guides</p>
          <p>Rewards Bazaar</p>
          <p>Loves</p>
          <p>Book a Reservation</p>
        </div>

        <div className='fotter-div-1'>
          <p>Help</p>
          <p>Customer Service</p>
          <p>Returns & Exchanges</p>
          <p>Delivery and Pickup Options</p>
          <p>Shipping</p>
          <p>Billing</p>
          <p>International Shipments</p>
          <p>Beauty Services FAQ</p>
          <p>Sephora at Kohl's</p>
          <p>Sephora at Hearst</p>
          <p>Store Locations</p>
          <p>Online Ordering</p>
          <p>Flexible Payments</p>
          <p>Accessibility</p>
        </div>

        <div className='fotter-div-2'>
          {/* Add similar text content or other items as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
