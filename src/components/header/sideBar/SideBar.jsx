import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import { useAccessToken } from "../../contextApi/AccessTokenContext";
import { toast } from "react-toastify";
import { ToasterMessage } from "../../../helper/toastHelper";

const SideBar = ({ handleMenuBarClick }) => {
  // const accessToken = localStorage.getItem("accessToken");
  const {accessToken, setAccessToken} = useAccessToken();
  const userName = localStorage.getItem("userName");

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    setAccessToken('');

    ToasterMessage('success','Logout successfull');
  };

  return (
    <div className="sidebar-container">
      <CancelTwoToneIcon onClick={handleMenuBarClick} className="cross-icon" />

      <div className="wlc-login">
        {accessToken ? (
          <h3 className="wlc">Welcome {userName}</h3>
        ) : (
          <>
            <h3 className="wlc">Welcome Guest</h3>
            <h4 className="login">Login / Sign Up</h4>
          </>
        )}
      </div>
      <div className="sidebar-links-conatiner">
        <h4 className="title">SHOP IN</h4>
        <div className="sidebar-links">
          <Link to="/Men" className="link">
            Men
          </Link>
          <Link to="/Women" className="link">
            Women
          </Link>
        </div>
        <h4 className="title">MY PROFILE</h4>
        <div className="sidebar-links">
          <Link to="/account" className="link">
            My Account
          </Link>
          <Link to="/account/orders" className="link">
            My Orders
          </Link>
          <Link to="/wishlist" className="link">
            My Wishlist
          </Link>
        </div>

        <h4 className="title">CONTACT US</h4>
        <div className="sidebar-links">
          <Link to="/HelpAndSupport" className="link">
            Help & Support
          </Link>
          <Link to="/FeedbackAndSuggestions" className="link">
            Feedback & Suggestions
          </Link>
        </div>

        <h4 className="title">ABOUT US</h4>
        <div className="sidebar-links">
          <Link to="/OurStory" className="link">
            Our Story
          </Link>
          <Link to="/Fanbook" className="link">
            Fanbook
          </Link>
          <Link to="/Blog" className="link">
            Blog
          </Link>
          {accessToken ? (
            <Link onClick={handleLogOut} className="link">Log out</Link>
          ) : (
            <Link to="/Login" className="link">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
