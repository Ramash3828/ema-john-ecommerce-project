import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link>
            <div className="navbar">
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
            </div>
        </div>
    );
};

export default Header;
