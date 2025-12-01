// src/components/layout/Footer.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const COLOR_PALETTE = {
  primary: "#c0baa6ff",
  footerBg: "#e5e9daff",
  footerText: "#6C757D",
  linkHover: "#2C3E50",
};

const CONTACT_DATA = {
  address: "60 Nguyen Tri Phuong, Thanh Pho Hue",
  phone: "0813 756 868",
  zalo: "0813756868",
  fb: "https://www.facebook.com/profile.php?id=61573199499721",
  tiktok: "https://www.tiktok.com/@eleganthotel.hue",
  email: "elegant.hotelhue@gmail.com",
};

export default function Footer() {
  const footerStyle = {
    background: COLOR_PALETTE.footerBg,
    color: COLOR_PALETTE.footerText,
    padding: "60px 20px 20px",
    fontFamily: "'Georgia', serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const linkStyle = {
    color: COLOR_PALETTE.footerText,
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    transition: "color 0.3s ease",
    fontSize: "1rem",
    fontFamily: "'Georgia', serif",
  };

  const sectionTitleStyle = {
    color: COLOR_PALETTE.primary,
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "25px",
    borderBottom: `2px solid ${COLOR_PALETTE.primary}80`,
    paddingBottom: "10px",
    fontFamily: "'Georgia', serif",
  };

  const socialIconImage = {
    width: "28px",
    height: "28px",
    marginRight: "18px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Cột 1 */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/logo/logo.jpg"
                alt="Elegant Hotel Logo"
                style={{
                  height: "50px",
                  marginRight: "10px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              />
              <h3
                style={{
                  color: COLOR_PALETTE.primary,
                  fontSize: "1.8rem",
                  fontWeight: "600",
                }}
              >
                Elegant Hotel
              </h3>
            </div>

            <p style={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
              Khách sạn Elegant Hotel Hue là điểm dừng chân sang trọng giữa lòng
              Cố đô, mang đến trải nghiệm nghỉ dưỡng 3 sao với dịch vụ tận tâm
              và thiết kế tinh tế.
            </p>
          </div>

          {/* Cột 2 */}
          <div>
            <h4 style={sectionTitleStyle}>Quick Links</h4>

            <NavLink
              to="/"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = COLOR_PALETTE.primary)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = COLOR_PALETTE.footerText)
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/ve-chung-toi"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = COLOR_PALETTE.primary)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = COLOR_PALETTE.footerText)
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/lien-he"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = COLOR_PALETTE.primary)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = COLOR_PALETTE.footerText)
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Cột 3 */}
          <div>
            <h4 style={sectionTitleStyle}>Contact</h4>

            <p
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}
            >
              <i
                className="fa-solid fa-location-dot"
                style={{
                  marginRight: "10px",
                  marginTop: "3px",
                  color: COLOR_PALETTE.primary,
                }}
              ></i>
              {CONTACT_DATA.address}
            </p>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <i
                className="fa-solid fa-phone"
                style={{ marginRight: "10px", color: COLOR_PALETTE.primary }}
              ></i>
              Hotline: {CONTACT_DATA.phone}
            </p>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <i
                className="fa-solid fa-envelope"
                style={{ marginRight: "10px", color: COLOR_PALETTE.primary }}
              ></i>
              Email: {CONTACT_DATA.email}
            </p>

            {/* SOCIAL ICONS — dùng PNG/JPG */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                href={CONTACT_DATA.fb}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  style={socialIconImage}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.15)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </a>

              <a
                href={`https://zalo.me/${CONTACT_DATA.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/zalo.jpg"
                  alt="Zalo"
                  style={socialIconImage}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.15)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </a>

              <a
                href={CONTACT_DATA.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/tiktok.jpg"
                  alt="TikTok"
                  style={socialIconImage}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.15)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: `1px solid ${COLOR_PALETTE.primary}50`,
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Elegant Hotel Hue, All rights
            reserved.
          </p>
          <p style={{ color: COLOR_PALETTE.primary }}>
            Address: {CONTACT_DATA.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
