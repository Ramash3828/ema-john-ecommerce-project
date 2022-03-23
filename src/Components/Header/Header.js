import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo">
                <img src={logo} alt="" />
            </a>
            <div className="navbar">
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;
