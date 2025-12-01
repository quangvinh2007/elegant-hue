import React, { useState, useEffect } from "react";

// --- HOOK GIẢ ĐỊNH (Simulated useMediaQuery Hook) ---
// Trong dự án thực tế, bạn sẽ dùng 'react-responsive' hoặc Hook tự tạo.
// Ở đây, mình dùng một hook đơn giản để minh họa Responsive Logic.
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Giả định màn hình nhỏ hơn hoặc bằng 768px là mobile
      setIsMobile(window.innerWidth <= 768);
    };

    // Chạy lần đầu
    checkMobile();

    // Lắng nghe sự kiện resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};
// ----------------------------------------------------

// Định nghĩa màu chủ đạo
const COLOR_PALETTE = {
  primary: "#8B7355", // Màu Vàng/Nâu sang trọng
  secondary: "#f8f9fa",
  dark: "#333",
  lightGrey: "#e9ecef",
  borderRadius: "16px",
};

// =======================================================
//                   1. HOTEL SERVICES
// =======================================================
export const HotelServices = () => {
  const isMobile = useIsMobile();

  // Dữ liệu dịch vụ (giữ nguyên)
  const services = [
    {
      iconClass: "fa-solid fa-bell-concierge",
      title: "Dịch vụ Concierge",
      description:
        "Đội ngũ hỗ trợ chuyên nghiệp 24/7, luôn sẵn lòng đáp ứng mọi yêu cầu.",
    },
    {
      iconClass: "fa-solid fa-door-open",
      title: "Check-in cấp tốc",
      description:
        "Nhận phòng nhanh chóng chỉ trong 5 phút, tiết kiệm thời gian quý báu của bạn.",
    },
    {
      iconClass: "fa-solid fa-handshake",
      title: "Check-out linh hoạt",
      description:
        "Hoàn tất thủ tục trả phòng dễ dàng qua ứng dụng hoặc quầy ưu tiên.",
    },
    {
      iconClass: "fa-solid fa-clock",
      title: "Lễ tân 24h",
      description:
        "Hỗ trợ và phục vụ mọi nhu cầu của khách hàng, mọi lúc, mọi nơi.",
    },
    {
      iconClass: "fa-solid fa-shield-halved",
      title: "Hệ thống An ninh tuyệt đối",
      description:
        "An ninh 24 giờ cùng hệ thống giám sát hiện đại, đảm bảo an toàn tuyệt đối.",
    },
    {
      iconClass: "fa-solid fa-shirt",
      title: "Dịch vụ Giặt ủi cao cấp",
      description:
        "Giặt ủi nhanh chóng, sạch sẽ với dịch vụ giao nhận tận phòng chuyên nghiệp.",
    },
    {
      iconClass: "fa-solid fa-suitcase-rolling",
      title: "Lưu trữ Hành lý",
      description:
        "Bảo quản hành lý an toàn và miễn phí trước và sau khi nhận/trả phòng.",
    },
    {
      iconClass: "fa-solid fa-car",
      title: "Thuê xe & Đưa đón",
      description:
        "Dịch vụ thuê xe chuyên nghiệp hoặc đưa đón sân bay với ưu đãi đặc biệt.",
    },
  ];

  // Tối ưu hóa Style cho Mobile
  const mobileStyles = isMobile
    ? {
        sectionPadding: "60px 20px",
        headingFontSize: "2rem",
        subHeadingFontSize: "1rem",
        gridMinSize: "100%", // Đảm bảo chỉ có 1 cột trên mobile rất nhỏ
        cardPadding: "30px 20px",
        iconFontSize: "3rem",
        iconContainerSize: "60px",
        cardTitleFontSize: "1.1rem",
        cardDescFontSize: "0.9rem",
      }
    : {};

  return (
    <section
      style={{
        padding: mobileStyles.sectionPadding || "100px 20px",
        background: `linear-gradient(135deg, ${COLOR_PALETTE.secondary} 0%, ${COLOR_PALETTE.lightGrey} 100%)`,
      }}
      data-aos="fade-up"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "80px",
          }}
        >
          <h2
            style={{
              fontSize: mobileStyles.headingFontSize || "2.8rem",
              fontWeight: "700",
              color: COLOR_PALETTE.dark,
              marginBottom: "15px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Dịch Vụ Khách Sạn
          </h2>
          <p
            style={{
              fontSize: mobileStyles.subHeadingFontSize || "1.2rem",
              color: "#777",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Chúng tôi mang đến những dịch vụ tiện ích cao cấp được cá nhân hóa
            để nâng tầm trải nghiệm lưu trú **đẳng cấp** của quý khách.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            // Mobile: 1 cột (100%), Desktop/Tablet: 260px min
            gridTemplateColumns: `repeat(auto-fit, minmax(${
              mobileStyles.gridMinSize || "260px"
            }, 1fr))`,
            gap: isMobile ? "20px" : "35px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                background: "white",
                borderRadius: COLOR_PALETTE.borderRadius,
                padding: mobileStyles.cardPadding || "40px 30px",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
                border: "1px solid #eee",
              }}
              // Giữ nguyên hiệu ứng hover cho desktop
              onMouseEnter={
                !isMobile
                  ? (e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = `0 20px 50px ${COLOR_PALETTE.primary}30`;
                    }
                  : undefined
              }
              onMouseLeave={
                !isMobile
                  ? (e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(0,0,0,0.05)";
                    }
                  : undefined
              }
            >
              {/* Icon Container Nâng Cấp */}
              <div
                style={{
                  fontSize: mobileStyles.iconFontSize || "3.5rem",
                  marginBottom: "20px",
                  color: COLOR_PALETTE.primary,
                  width: mobileStyles.iconContainerSize || "80px",
                  height: mobileStyles.iconContainerSize || "80px",
                  borderRadius: "50%",
                  background: `${COLOR_PALETTE.primary}10`,
                  margin: "0 auto 30px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease",
                }}
              >
                <i
                  className={service.iconClass}
                  style={{
                    fontSize: mobileStyles.iconFontSize ? "1.5rem" : "1.8rem",
                  }}
                ></i>
              </div>

              <h3
                style={{
                  fontSize: mobileStyles.cardTitleFontSize || "1.25rem",
                  fontWeight: "700",
                  color: COLOR_PALETTE.dark,
                  marginBottom: "15px",
                  lineHeight: "1.4",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: mobileStyles.cardDescFontSize || "1rem",
                  color: "#666",
                  lineHeight: "1.7",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
