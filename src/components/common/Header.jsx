// src/components/layout/Header.jsx - FIXED VERSION
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const COLOR_PALETTE = {
  primary: "#D4AF37",
  headerBg: "#F8F9FA",
  headerText: "#2C3E50",
};

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // FIXED: Loại bỏ padding-bottom, giữ padding nhỏ gọn
  const headerStyle = {
    background: COLOR_PALETTE.headerBg,
    color: COLOR_PALETTE.headerText,
    padding: "10px 20px", // Chỉ padding trái/phải/trên, KHÔNG có padding-bottom
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "'Georgia', serif",
    position: "sticky",
    top: 0,
    zIndex: 999,
    margin: 0, // Đảm bảo không margin
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  const navLinkStyle = {
    color: COLOR_PALETTE.headerText,
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
    fontFamily: "'Georgia', serif",
  };

  const navActiveStyle = {
    color: COLOR_PALETTE.primary,
    fontWeight: "700",
    borderBottom: `2px solid ${COLOR_PALETTE.primary}`,
    paddingBottom: "3px",
  };

  // FIXED: Loại bỏ marginTop và paddingBottom khỏi mobile menu
  const mobileMenuStyle = {
    display: isMobileMenuOpen ? "flex" : "none",
    flexDirection: "column",
    width: "100%",
    marginTop: "5px", // Giảm margin xuống còn 5px
    gap: "10px",
    paddingBottom: "5px", // Giảm padding xuống còn 5px
    background: COLOR_PALETTE.headerBg,
  };

  const hamburgerStyle = {
    display: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: COLOR_PALETTE.headerText,
  };

  const mediaQuery = `
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .hamburger {
        display: block;
      }
      .header-container {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `;

  return (
    <header style={headerStyle} className="site-header">
      <style>{mediaQuery}</style>
      <div style={containerStyle} className="header-container">
        {/* Logo */}
        <NavLink to="/" style={logoStyle}>
          <img
            src="/logo/logo.jpg"
            alt="Elegant Hotel Logo"
            style={{
              height: "40px",
              marginRight: "10px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          />
          <h1
            style={{
              fontSize: "1.6rem",
              fontWeight: 600,
              color: COLOR_PALETTE.headerText,
              letterSpacing: "0.05em",
              fontFamily: "'Georgia', serif",
              margin: 0,
              padding: 0, // Đảm bảo h1 không có padding
            }}
          >
            Elegant Hotel
          </h1>
        </NavLink>

        {/* Hamburger (mobile) */}
        <div
          className="hamburger"
          style={hamburgerStyle}
          onClick={toggleMobileMenu}
        >
          &#9776;
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links" style={navStyle}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navActiveStyle : {}),
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/ve-chung-toi"
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navActiveStyle : {}),
            })}
          >
            About Us
          </NavLink>
          <NavLink
            to="/lien-he"
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navActiveStyle : {}),
            })}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div style={mobileMenuStyle}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navActiveStyle : {}),
            })}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/ve-chung-toi"
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navActiveStyle : {}),
            })}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/lien-he"
            style={({ isActive }) => ({
              ...navLinkStyle,
              ...(isActive ? navActiveStyle : {}),
            })}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
