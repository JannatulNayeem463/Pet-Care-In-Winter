import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../../assets/logo.png";

const Header = () => {
  
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      displayName: "John Doe",
      avatarUrl: "https://i.pravatar.cc/40",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="Logo" className="w-15" />
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" activeClassName="text-primary" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="text-primary">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="text-primary">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.avatarUrl}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>
            <button onClick={handleLogout} className="btn btn-outline btn-primary">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={handleLogin} className="btn btn-primary">
              Login
            </button>
            <NavLink to="/register" className="btn btn-outline btn-primary">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
