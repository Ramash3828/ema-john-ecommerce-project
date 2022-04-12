import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import dummyImg from "../../images/dummy.png";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    const pic = user?.reloadUserInfo?.photoUrl;
    return (
        <div className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link>
            <div className="navbar">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                {user ? (
                    <NavLink onClick={() => signOut(auth)} to="/login">
                        Logout
                    </NavLink>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
                <div className="ms-3">
                    {user ? (
                        <img
                            src={pic || dummyImg}
                            alt=""
                            width={"40px"}
                            className="rounded-circle"
                        />
                    ) : (
                        <div className="user-img">user</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
