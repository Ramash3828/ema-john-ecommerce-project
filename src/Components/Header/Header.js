import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link>
            <div className="navbar">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;
