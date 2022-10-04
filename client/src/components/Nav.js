import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";

function Navibar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor, true);

  return (
    <div className={color ? "nav nav-bg" : "nav"}>
      <div className="nav__content">
        <div className="nav__left">
          <div className="nav__logo">
            <Link to="/">Harbord</Link>
          </div>
          <div className="nav__links">
            <Link to="/whyus">Why Us?</Link>
            <div className="dropdown">
              <button className="dropbtn">Provinces We Serve</button>
              <div className="nav-link">
                <div className="dropdown-content">
                  <Link to="/britishcolumbia">British Columbia</Link>
                  <Link to="/alberta">Alberta</Link>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Policy Types</button>
              <div className="nav-link">
                <div className="dropdown-content">
                  <Link to="/homeinsurance">Home Insurance</Link>
                  <Link to="/condoinsurance">Condo Insurance</Link>
                  <Link to="/highvalueinsurance">High Value Insurance</Link>
                  <Link to="/tenantinsurance">Tenant Insurance</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav__right">
          <Link id="nav__phonenumber">1-844-544-4663</Link>
          <div className="dropdown right">
            <button className="dropbtn right">
              More <BsCaretDownFill id="nav__morearrow" />
            </button>
            <div className="dropdown-content">
              <Link to="/howtofileaclaim">How to File an Insurance Claim</Link>
              <Link to="/discounts">Discounts</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navibar;
