// src/pages/Home.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import roomsData from "../data/roomsData";
import { Banner } from "../components/common/Banner";
import { FAQ } from "../components/common/FAQ";
import { HotelServices } from "../components/common/HotelServices";
import { HotelPolicies } from "../components/common/HotelPolicies";

// Định nghĩa màu sắc chủ đạo
const COLOR_PALETTE = {
  primary: "#8B7355", // Màu Vàng/Nâu sang trọng
  secondary: "#f8f9fa", // Màu nền nhẹ
  dark: "#0f172a",
  borderRadius: "16px", // Bo góc chung
};

// Global styles for consistency (Đặt bên ngoài để dễ quản lý hơn)
const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: `${COLOR_PALETTE.primary}d0`,
  border: "none",
  width: "50px", // Giảm kích thước
  height: "50px", // Giảm kích thước
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 4px 15px ${COLOR_PALETTE.primary}50`,
  transition: "all 0.3s ease",
};

const arrowStyle = {
  color: "white",
  fontSize: "2rem", // Giảm kích thước mũi tên
  fontWeight: "300",
  lineHeight: "1",
};

const ctaButtonStyle = {
  display: "inline-block",
  padding: "15px 35px", // Giảm padding
  color: "white",
  textDecoration: "none",
  borderRadius: "10px",
  fontSize: "1.1rem", // Giảm kích thước font
  fontWeight: "600",
  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
};

// Component RoomCard riêng biệt để tối ưu hiệu ứng hover
const RoomCard = ({ room, groupIndex }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const dataAos = "fade-up";
  const aosDelay = groupIndex * 100 + 100;

  return (
    <NavLink
      to={`/phong/${room.folder}`}
      className="room-home-card"
      data-aos={dataAos}
      data-aos-delay={aosDelay}
      style={{
        flex: "1 1 30%",
        minWidth: "300px",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        borderRadius: COLOR_PALETTE.borderRadius,
        boxShadow: isHovered
          ? `0 20px 40px rgba(139, 115, 85, 0.5)`
          : "0 10px 30px rgba(0,0,0,0.15)",
        transition:
          "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`/rooms/${room.folder}/1.jpg`}
        onError={(e) => (e.target.src = `/rooms/${room.folder}/1.jpeg`)}
        alt={room.name}
        style={{
          width: "100%",
          height: "400px", // Giảm chiều cao một chút cho mobile/tablet
          objectFit: "cover",
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          filter: isHovered ? "brightness(1.05)" : "brightness(1)",
          borderRadius: COLOR_PALETTE.borderRadius,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
          color: "white",
          padding: "30px 20px 15px 20px", // Giảm padding
          transform: isHovered ? "translateY(0)" : "translateY(10px)",
          opacity: isHovered ? 1 : 0.9,
          transition: "transform 0.4s ease, opacity 0.4s ease",
          borderBottomLeftRadius: COLOR_PALETTE.borderRadius,
          borderBottomRightRadius: COLOR_PALETTE.borderRadius,
        }}
      >
        <h3
          style={{
            fontSize: "1.4rem", // Giảm kích thước font
            marginBottom: "8px",
            fontWeight: "700",
          }}
        >
          {room.name}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            opacity: 0.8,
            marginBottom: "10px",
          }}
        >
          {room.size} | {room.guests}
        </p>
        <span
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            color: COLOR_PALETTE.primary,
          }}
        >
          Đặt phòng ngay →
        </span>
      </div>
    </NavLink>
  );
};

export default function Home() {
  const buttons = (
    <>
      <NavLink
        to="/phong"
        className="btn zalo-btn"
        style={{ padding: "14px 30px", fontSize: "1.1rem" }} // Tinh chỉnh kích thước button
      >
        Khám phá phòng
      </NavLink>
      <NavLink
        to="/lien-he"
        className="btn fb-btn"
        style={{ padding: "14px 30px", fontSize: "1.1rem" }} // Tinh chỉnh kích thước button
      >
        Liên hệ ngay
      </NavLink>
    </>
  );

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideCount = Math.ceil(roomsData.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  return (
    <>
      {/* Banner */}
      <Banner
        title="ELEGANT HUẾ"
        subtitle="Sang trọng giữa lòng cố đô"
        showButtons={true}
        buttons={buttons}
      />

      {/* 🚀 Giới thiệu - Split Layout Nâng Cấp (Sử dụng CSS Class cho Responsive) */}
      <section className="section about-section-home">
        <div className="about-grid-container">
          {/* Left - Image Container Nâng Cấp */}
          <div
            className="about-image-column"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              // Inline styles cho desktop, sẽ được override bằng CSS Class cho mobile
              padding: "50px 80px",
              background: COLOR_PALETTE.secondary,
            }}
          >
            <div
              style={{
                width: "100%",
                position: "relative",
                paddingBottom: "70%",
                borderRadius: COLOR_PALETTE.borderRadius,
                boxShadow: `0 15px 40px rgba(0,0,0,0.2)`,
                border: `4px solid ${COLOR_PALETTE.primary}`,
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = `0 25px 60px ${COLOR_PALETTE.primary}70`;
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = `0 15px 40px rgba(0,0,0,0.2)`;
              }}
            >
              <img
                src="/logo/1.jpeg"
                alt="Elegant Hotel Hue Building"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                  filter: "brightness(0.95)",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className="about-content-column"
            data-aos="fade-left"
            data-aos-delay="300"
            style={{
              // Inline styles cho desktop, sẽ được override bằng CSS Class cho mobile
              padding: "100px 80px",
              background: COLOR_PALETTE.secondary,
            }}
          >
            <h2
              className="about-title"
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: COLOR_PALETTE.primary,
                marginBottom: "40px",
                letterSpacing: "0.02em",
                borderBottom: `3px solid ${COLOR_PALETTE.primary}50`,
                paddingBottom: "15px",
                alignSelf: "flex-start",
              }}
            >
              Về Elegant Hotel Hue
            </h2>

            <div
              className="about-text"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#444",
                marginBottom: "40px",
                letterSpacing: "0.01em",
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                <strong style={{ color: COLOR_PALETTE.primary }}>
                  Elegant Hotel Hue
                </strong>{" "}
                mang đến trải nghiệm lưu trú đẳng cấp với dịch vụ tận tâm, không
                gian tinh tế và cơ sở vật chất hiện đại. Chúng tôi cam kết đem
                đến cho quý khách một kỳ nghỉ thoải mái và đáng nhớ.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: 0,
                  marginBottom: "20px",
                }}
              >
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: COLOR_PALETTE.primary }}>✓</strong>{" "}
                  Dịch vụ hỗ trợ 24/7 với đội ngũ nhân viên chuyên nghiệp.
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: COLOR_PALETTE.primary }}>✓</strong> Ẩm
                  thực đặc sắc được chế biến bởi đầu bếp giàu kinh nghiệm.
                </li>
                <li>
                  <strong style={{ color: COLOR_PALETTE.primary }}>✓</strong>{" "}
                  WiFi tốc độ cao phủ sóng toàn bộ khách sạn.
                </li>
              </ul>

              <p>
                <em>
                  Elegant Hotel Hue – nơi sự sang trọng và tiện nghi hội tụ,
                  mang đến kỳ nghỉ hoàn hảo cho mọi du khách.
                </em>
              </p>
            </div>

            {/* Nút CTA Nâng Cấp */}
            <div>
              <NavLink
                to="/ve-chung-toi"
                style={{
                  ...ctaButtonStyle,
                  background: COLOR_PALETTE.primary,
                  boxShadow: `0 8px 25px ${COLOR_PALETTE.primary}50`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#6d5a43";
                  e.target.style.transform = "scale(1.03)";
                  e.target.style.boxShadow = `0 10px 30px ${COLOR_PALETTE.primary}70`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = COLOR_PALETTE.primary;
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = `0 8px 25px ${COLOR_PALETTE.primary}50`;
                }}
              >
                Khám phá câu chuyện của chúng tôi
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Các loại phòng - Carousel Slider Nâng Cấp */}
      <section
        className="section rooms-carousel-section"
        style={{ background: "#fcfcfc" }}
        data-aos="fade-up"
      >
        <div className="container">
          <h2
            className="section-title"
            style={{
              color: COLOR_PALETTE.dark,
              borderBottom: `2px solid ${COLOR_PALETTE.primary}30`,
              paddingBottom: "10px",
              marginBottom: "40px", // Giảm margin-bottom
            }}
          >
            Khám phá Không gian Nghỉ dưỡng
          </h2>
          <div style={{ position: "relative", padding: "20px 0" }}>
            {/* Slider Container */}
            <div
              style={{
                overflow: "hidden",
                borderRadius: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: slideCount }).map((_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="room-slide-group" // Thêm class để dễ dàng responsive
                    style={{
                      display: "flex",
                      gap: "20px", // Giảm gap
                      minWidth: "100%",
                      padding: "0 10px",
                      justifyContent: "center",
                    }}
                  >
                    {roomsData
                      .slice(groupIndex * 3, groupIndex * 3 + 3)
                      .map((room) => (
                        <RoomCard
                          key={room.id}
                          room={room}
                          groupIndex={groupIndex}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                ...navButtonStyle,
                left: "0", // Đặt sát mép
                visibility: currentSlide === 0 ? "hidden" : "visible",
              }}
              className="nav-button-prev"
            >
              <span style={arrowStyle}>&#8592;</span>
            </button>
            <button
              onClick={nextSlide}
              style={{
                ...navButtonStyle,
                right: "0", // Đặt sát mép
                visibility:
                  currentSlide === slideCount - 1 ? "hidden" : "visible",
              }}
              className="nav-button-next"
            >
              <span style={arrowStyle}>&#8594;</span>
            </button>

            {/* Dots Indicators */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px", // Đẩy lên một chút
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px",
                zIndex: 10,
              }}
            >
              {Array.from({ length: slideCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  style={{
                    width: currentSlide === i ? "30px" : "10px", // Giảm kích thước dot
                    height: "10px",
                    borderRadius: "5px",
                    background:
                      currentSlide === i ? COLOR_PALETTE.primary : "#ccc",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow:
                      currentSlide === i
                        ? `0 2px 8px ${COLOR_PALETTE.primary}50`
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: "40px" }} />

      {/* Dịch vụ khách sạn */}
      <HotelServices />

      {/* Chính sách khách sạn */}
      <HotelPolicies />

      {/* Đánh giá khách hàng Nâng Cấp (Sử dụng CSS Class cho Responsive) */}
      <section
        className="section review-section"
        style={{
          background: COLOR_PALETTE.dark,
          color: "white",
          padding: "80px 20px", // Giảm padding
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="section-title"
            style={{ color: "white" }}
            data-aos="fade-down"
          >
            Khách hàng nói về chúng tôi
          </h2>
          <div
            className="review-grid" // Thêm class để dễ dàng responsive
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px", // Giảm gap
              marginTop: "50px", // Giảm margin-top
            }}
          >
            {[
              {
                name: "Chị Lan Anh",
                from: "Hà Nội",
                text: "Phòng sạch sẽ, nhân viên cực kỳ thân thiện, buffet sáng ngon tuyệt vời! Một kỳ nghỉ không thể quên.",
                avatar:
                  "https://banobagi.vn/wp-content/uploads/2025/07/tai-anh-gai-xinh-viet-nam-18.jpeg",
              },
              {
                name: "Anh Minh",
                from: "Sài Gòn",
                text: "Vị trí trung tâm, đi bộ ra sông Hương chỉ 5 phút. Rất đáng giá! Chắc chắn sẽ quay lại.",
                avatar:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR3FCVYSRz3ExPU32agl9tES_Ybq3rG0cWg&s",
              },
              {
                name: "Gia đình cô Hương",
                from: "Đà Nẵng",
                text: "Phòng Family rộng rãi, có bữa sáng, lễ tân lễ phép. Dịch vụ chu đáo, vượt mong đợi.",
                avatar:
                  "https://i.pinimg.com/280x280_RS/17/59/19/175919db45874eb5416207ce4db69dbc.jpg",
              },
            ].map((r, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 200}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "30px 25px", // Giảm padding
                  borderRadius: "15px", // Giảm bo góc
                  border: `1px solid ${COLOR_PALETTE.primary}20`,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)", // Giảm shadow
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = "rgba(255,255,255,0.15)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "rgba(255,255,255,0.08)")
                }
              >
                <img
                  src={r.avatar}
                  alt={r.name}
                  style={{
                    width: "70px", // Giảm kích thước avatar
                    height: "70px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                    border: `3px solid ${COLOR_PALETTE.primary}`, // Giảm border
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    fontSize: "3rem", // Giảm kích thước quote
                    color: COLOR_PALETTE.primary,
                    lineHeight: "0.5",
                    margin: "5px 0 15px 0",
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    fontStyle: "italic",
                    margin: "15px 0 20px 0",
                    lineHeight: "1.7",
                    fontSize: "1rem",
                  }}
                >
                  {r.text}
                </p>
                <strong style={{ fontSize: "1.1rem", color: "white" }}>
                  — {r.name}
                </strong>
                <p
                  style={{
                    color: COLOR_PALETTE.primary,
                    marginTop: "5px",
                    fontSize: "0.95rem",
                  }}
                >
                  {r.from}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Câu hỏi thường gặp về Elegant Huế" />
    </>
  );
}
