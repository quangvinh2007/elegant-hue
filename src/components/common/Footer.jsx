// src/components/layout/Footer.jsx

import React from "react";
import { NavLink } from "react-router-dom";

// Định nghĩa màu sắc chủ đạo mới: sáng hơn, hài hòa với tông be nhạt và xám sáng
const COLOR_PALETTE = {
  primary: "#c0baa6ff", // Vàng nhạt sang trọng, hài hòa
  footerBg: "#e5e9daff", // Xám nhạt sáng, tươi mới (sáng hơn header nếu cần phân biệt)
  footerText: "#6C757D", // Xám trung bình cho chữ, dễ đọc hơn
  linkHover: "#2C3E50", // Xám đậm nhạt cho hover
};

// Data chi tiết bạn cung cấp
const CONTACT_DATA = {
  address: "60 Nguyễn Tri Phương, Thành phố Huế",
  phone: "0813 756 868",
  zalo: "0813 756 868",
  fb: "https://www.facebook.com/profile.php?id=61573199499721",
  tiktok: "https://www.tiktok.com/@eleganthotel.hue",
  email: "elegant.hotelhue@gmail.com", // Giả định email
};

export default function Footer() {
  const footerStyle = {
    background: COLOR_PALETTE.footerBg,
    color: COLOR_PALETTE.footerText,
    padding: "60px 20px 20px 20px",
    fontFamily: "'Georgia', serif", // Font chữ serif sang trọng, đẹp hơn
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
    fontWeight: "600", // Giảm bold cho hài hòa
    marginBottom: "25px",
    borderBottom: `2px solid ${COLOR_PALETTE.primary}80`, // Tăng opacity cho rõ hơn
    paddingBottom: "10px",
    fontFamily: "'Georgia', serif",
  };

  // Style cho icon mạng xã hội
  const socialIconStyle = {
    color: COLOR_PALETTE.footerText,
    fontSize: "1.5rem",
    marginRight: "20px",
    transition: "color 0.3s ease",
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
          {/* Cột 1: Giới thiệu và Logo */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {/* Giữ logo nhưng giảm độ tròn để hiển thị rõ hơn */}
              <img
                src="/logo/logo.jpg"
                alt="Elegant Hotel Logo"
                style={{
                  height: "50px",
                  marginRight: "10px",
                  borderRadius: "10px", // Giảm từ 50% xuống 10px để rõ nét hơn
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // Thêm shadow nhẹ
                }}
              />
              <h3
                style={{
                  color: COLOR_PALETTE.primary,
                  fontSize: "1.8rem",
                  fontWeight: "600", // Giảm bold
                  fontFamily: "'Georgia', serif",
                }}
              >
                Elegant Hotel
              </h3>
            </div>
            <p
              style={{
                lineHeight: 1.7,
                fontSize: "0.95rem",
                fontFamily: "'Georgia', serif",
              }}
            >
              Khách sạn Elegant Hotel Hue là điểm dừng chân sang trọng giữa lòng
              Cố đô, mang đến trải nghiệm nghỉ dưỡng 3 sao với dịch vụ tận tâm
              và thiết kế tinh tế.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h4 style={sectionTitleStyle}>Liên kết nhanh</h4>
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
              Trang chủ
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
              Về chúng tôi
            </NavLink>
            <NavLink
              to="/chinh-sach"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = COLOR_PALETTE.primary)
              }
              onMouseLeave={(e) =>
                (e.target.style.color = COLOR_PALETTE.footerText)
              }
            >
              Chính sách
            </NavLink>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div>
            <h4 style={sectionTitleStyle}>Liên hệ</h4>
            <p
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
                fontFamily: "'Georgia', serif",
              }}
            >
              {/* Giả sử icon địa chỉ */}
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
                fontFamily: "'Georgia', serif",
              }}
            >
              {/* Giả sử icon điện thoại */}
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
                fontFamily: "'Georgia', serif",
              }}
            >
              {/* Giả sử icon email */}
              <i
                className="fa-solid fa-envelope"
                style={{ marginRight: "10px", color: COLOR_PALETTE.primary }}
              ></i>
              Email: {CONTACT_DATA.email}
            </p>

            {/* Social Media */}
            <div style={{ marginTop: "20px" }}>
              <a
                href={CONTACT_DATA.fb}
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => (e.target.style.color = "#3b5998")}
                onMouseLeave={(e) =>
                  (e.target.style.color = COLOR_PALETTE.footerText)
                }
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href={`https://zalo.me/${CONTACT_DATA.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => (e.target.style.color = "#0068ff")}
                onMouseLeave={(e) =>
                  (e.target.style.color = COLOR_PALETTE.footerText)
                }
              >
                <i className="fa-brands fa-zalo"></i>
              </a>
              <a
                href={CONTACT_DATA.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => (e.target.style.color = "#000000")}
                onMouseLeave={(e) =>
                  (e.target.style.color = COLOR_PALETTE.footerText)
                }
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div
          style={{
            borderTop: `1px solid ${COLOR_PALETTE.primary}50`,
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "0.9rem",
            fontFamily: "'Georgia', serif",
          }}
        >
          <p style={{ marginBottom: "5px" }}>
            &copy; {new Date().getFullYear()} Elegant Hotel Hue, All rights
            reserved.
          </p>
          <p style={{ color: COLOR_PALETTE.primary }}>
            Địa chỉ: {CONTACT_DATA.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
