import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

function Navbar() {
  return (
    <div id="main-box">
      {/* Child Navigation */}
      <div id="child-nav">
        {/* Logo */}
        <img
          id="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_G8n0cjDRm8Lp80kEv_N0_b9S59w4o_fjA&s"
          alt="Sephora-logo"
        />

        {/* Search Container */}
        <div id="search-container">
          <FaSearch id="search-icon" />
          <input id="search-input" type="text" placeholder="Search" />
        </div>

        {/* Store Container */}
        <div className="dropdown-container">
          <div className="trigger-content">
            <AiOutlineShop className="nav-icon" />
            <div className="nav-label">
              <p id="text-1">Stores and Services</p>
              <p id="text-2">Choose your services</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            <button id="dropdown-btn">Choose Your Store</button>

            <div className="dropdown-item">
              <IoLocationOutline className="dropdown-icon" />
              <p>Find a Sephora</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg" alt="makeup-logo" />
              <p>Makeup Services <br />One-on-one makeup application or beauty</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_skincare.svg" alt="makeup-logo-2" />
              <p>Skincare Services <br />Hydrating and exfoliating Perk treatments by Hydrafacial™</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_waxing.svg" alt="makeup-logo-3" />
              <p>Waxing Services <br />Expert grooming for brows, upper lip, or chin</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_events.svg" alt="makeup-logo-4" />
              <p>Events <br />Learn about brands, try new products, and more at our in-store events</p>
            </div>

            <div id="names">
            <p>My Reservations | Beauty Service FAQs</p>
            </div>
          </div>
        </div>


        {/* Community Container */}
        <div className="dropdown-container">
          <div className="trigger-content">
            <IoIosPeople className="nav-icon" />
            <div className="nav-label">
              <p id="text-1">Community</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <img id="community-logo" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="community-logo-1" />
              <div>
                <p>Community Profile
                <br /><p id="text-2">Sign in to see your profile</p></p>
              </div>
              <div id="icons-container">
              <GoBell />
              <AiOutlineMail />
              </div>
            </div>

            <div id="community-btn-holder" >
            <button id="dropdown-btn">Sign In</button>
            <button id="dropdown-btn">Create Account</button>
            </div>

            <div className="dropdown-item">
              <IoLocationOutline className="dropdown-icon" />
              <p>Find a Sephora</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg" alt="makeup-logo" />
              <p>Makeup Services <br />One-on-one makeup application or beauty</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_skincare.svg" alt="makeup-logo-2" />
              <p>Skincare Services <br />Hydrating and exfoliating Perk treatments by Hydrafacial™</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_waxing.svg" alt="makeup-logo-3" />
              <p>Waxing Services <br />Expert grooming for brows, upper lip, or chin</p>
            </div>

            <div id="dropdown-item-2">
              <img src="https://www.sephora.com/contentimages/happening/flyoutmenu_events.svg" alt="makeup-logo-4" />
              <p>Events <br />Learn about brands, try new products, and more at our in-store events</p>
            </div>

            <div id="names">
            <p>My Reservations | Beauty Service FAQs</p>
            </div>
          </div>
        </div>
      </div>
      

      {/* Navbar-2 */}
      <div id="nav-2">
        <div id="first-box">
          <div>
            {/* <p className="nav-text">New</p>
          <p className="nav-text">Brands</p>
          <p className="nav-text">Makeup</p>
          <p className="nav-text">SkinCare</p>
          <p className="nav-text">Hair</p>
          <p className="nav-text">fragrance</p>
          <p className="nav-text">Tools & Brush</p>
          <p className="nav-text">Bath & Body</p>
          <p className="nav-text">Mini Size</p>
          <p className="nav-text">Gifts & Cards</p>
          <p className="nav-text">Beauty under$20</p>
          <p className="nav-text">Sale&Offers</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
