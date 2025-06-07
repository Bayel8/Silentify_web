import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Silent Talk</h1>
      </div>
      <nav className="nav">
        <Link to="/Main">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Call">Call</Link>
        <Link to="/Azbuka">Study</Link>
        <Link to="/register" className="login-link" title="Войти">
          <LogIn size={24} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
