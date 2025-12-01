// HotelPolicies Component
import React, { useState, useEffect } from "react";

// --- HOOK GIẢ ĐỊNH (Simulated useMediaQuery Hook) ---
// Dùng để áp dụng Styles khác nhau cho Mobile/Desktop
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Màn hình nhỏ hơn 768px là mobile
    };
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};
// ----------------------------------------------------

// Giả định bạn đã định nghĩa màu chủ đạo
const COLOR_PALETTE = {
  primary: "#8B7355", // Màu Vàng/Nâu sang trọng
  secondary: "#f8f9fa", // Màu nền nhẹ
  dark: "#333",
  borderRadius: "12px",
};

export const HotelPolicies = () => {
  const isMobile = useIsMobile();

  // Tối ưu hóa Style cho Mobile
  const mobileStyles = isMobile
    ? {
        sectionPadding: "60px 20px",
        headingFontSize: "2rem",
        subHeadingFontSize: "1rem",
        cardPadding: "20px 20px",
        cardTitleFontSize: "1.2rem",
        iconFontSize: "1.5rem",
        contentGap: "15px",
      }
    : {};

  // Dữ liệu đã được tối ưu: Loại bỏ lặp lại và dùng Icon Class chuyên nghiệp
  const policies = [
    {
      iconClass: "fa-solid fa-clock-rotate-left", // Icon đồng hồ/thời gian chuyên nghiệp
      title: "Thời gian nhận/trả phòng",
      content: (
        <>
          <p
            style={{
              marginBottom: "8px",
              fontSize: isMobile ? "0.95rem" : "1rem",
            }}
          >
            <strong style={{ color: COLOR_PALETTE.primary }}>
              Giờ nhận phòng:
            </strong>{" "}
            Từ 14:00 (Check-in)
          </p>
          <p style={{ fontSize: isMobile ? "0.95rem" : "1rem" }}>
            <strong style={{ color: COLOR_PALETTE.primary }}>
              Giờ trả phòng:
            </strong>{" "}
            Trước 12:00 (Check-out)
          </p>
          <p
            style={{
              marginTop: "15px",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              color: "#888",
            }}
          >
            Vui lòng liên hệ quầy lễ tân nếu bạn cần nhận phòng sớm hoặc trả
            phòng muộn.
          </p>
        </>
      ),
    },
    {
      iconClass: "fa-solid fa-child-reaching", // Icon trẻ em
      title: "Chính sách dành cho Trẻ em",
      content: (
        <div style={{ padding: isMobile ? "0" : "0 10px" }}>
          {/* Phiên bản Tiếng Việt gọn gàng */}
          <p
            style={{
              fontWeight: "700",
              marginBottom: "12px",
              color: COLOR_PALETTE.dark,
              fontSize: isMobile ? "1rem" : "inherit",
            }}
          >
            Quy định về độ tuổi và phụ phí:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: isMobile ? "20px" : "25px",
              fontSize: isMobile ? "0.9rem" : "inherit",
            }}
          >
            <li style={{ marginBottom: "8px", lineHeight: "1.7" }}>
              <strong style={{ color: COLOR_PALETTE.primary }}>
                Trẻ từ 0 - 05 tuổi:
              </strong>{" "}
              Ở miễn phí sử dụng giường có sẵn cùng bố mẹ (Tối đa 1 bé).
            </li>
            <li style={{ marginBottom: "8px", lineHeight: "1.7" }}>
              <strong style={{ color: COLOR_PALETTE.primary }}>
                Trẻ từ 06 - 11 tuổi:
              </strong>{" "}
              Ngủ chung giường, phụ thu tại khách sạn **VND 80,000/bé/đêm**.
            </li>
            <li style={{ lineHeight: "1.7" }}>
              <strong style={{ color: COLOR_PALETTE.primary }}>
                Trẻ từ 12 tuổi trở lên:
              </strong>{" "}
              Tính như người lớn, phụ thu **VND 150,000/bé/đêm**.
            </li>
          </ul>

          {/* Phiên bản Tiếng Anh */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "15px",
              borderTop: "1px dashed #ddd",
              fontSize: isMobile ? "0.85rem" : "inherit",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                marginBottom: "10px",
                color: COLOR_PALETTE.dark,
              }}
            >
              Child's Policy (English)
            </p>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "25px",
                fontSize: "0.9rem",
              }}
            >
              <li style={{ marginBottom: "5px", lineHeight: "1.7" }}>
                Infant 0 – 05 year(s): 1 kid stays free, using existing bedding.
              </li>
              <li style={{ marginBottom: "5px", lineHeight: "1.7" }}>
                Child 06 – 11 years: sharing bed, additional charge **VND
                80,000/child/night**.
              </li>
              <li style={{ lineHeight: "1.7" }}>
                Guests from 12 years: applied as an adult **VND
                150,000/child/night**.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      iconClass: "fa-solid fa-file-pen", // Icon ghi chép/quy tắc
      title: "Chính Sách Chung và Hóa đơn",
      content: (
        <div style={{ padding: isMobile ? "0" : "0 10px" }}>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: isMobile ? "20px" : "25px",
              fontSize: isMobile ? "0.9rem" : "inherit",
            }}
          >
            <li style={{ marginBottom: "8px", lineHeight: "1.7" }}>
              <strong style={{ color: COLOR_PALETTE.primary }}>
                Yêu cầu Hóa đơn:
              </strong>{" "}
              Vui lòng thông báo trước ít nhất 24 giờ nếu cần xuất hóa đơn VAT.
            </li>
            <li style={{ marginBottom: "8px", lineHeight: "1.7" }}>
              <strong style={{ color: COLOR_PALETTE.primary }}>
                Vật nuôi:
              </strong>{" "}
              Khách sạn không chấp nhận thú cưng (pets) ngoại trừ các trường hợp
              đặc biệt.
            </li>
            <li style={{ lineHeight: "1.7" }}>
              <strong style={{ color: COLOR_PALETTE.primary }}>
                Hút thuốc:
              </strong>{" "}
              Chỉ được phép hút thuốc tại khu vực chỉ định. Vui lòng không hút
              thuốc trong phòng.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      style={{
        padding: mobileStyles.sectionPadding || "100px 20px",
        background: COLOR_PALETTE.secondary,
      }}
      data-aos="fade-up"
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "70px",
          }}
        >
          <h2
            style={{
              fontSize: mobileStyles.headingFontSize || "2.8rem",
              fontWeight: "700",
              color: COLOR_PALETTE.dark,
              marginBottom: "15px",
              letterSpacing: "0.08em",
            }}
          >
            Chính Sách Khách Sạn
          </h2>
          <p
            style={{
              fontSize: mobileStyles.subHeadingFontSize || "1.2rem",
              color: "#777",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Thông tin chi tiết và minh bạch về thời gian, phụ phí và quy định
            chung để đảm bảo chuyến đi của bạn được chuẩn bị tốt nhất.
          </p>
        </div>

        {/* Cấu trúc Policy Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "20px" : "30px",
          }}
        >
          {policies.map((policy, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 150} // Hiệu ứng domino
              style={{
                background: "white",
                borderRadius: COLOR_PALETTE.borderRadius,
                padding: mobileStyles.cardPadding || "35px 35px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                borderLeft: `5px solid ${COLOR_PALETTE.primary}`, // Điểm nhấn màu chủ đạo
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: mobileStyles.contentGap || "25px", // Tăng khoảng cách
                }}
              >
                {/* Icon Column Nâng Cấp */}
                <div
                  style={{
                    fontSize: mobileStyles.iconFontSize || "1.8rem",
                    minWidth: mobileStyles.iconFontSize ? "25px" : "40px", // Điều chỉnh minWidth cho mobile
                    height: mobileStyles.iconFontSize ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLOR_PALETTE.primary, // Màu Icon chính là màu chủ đạo
                    paddingTop: "3px",
                  }}
                >
                  <i className={policy.iconClass}></i>
                </div>

                {/* Content Column */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: mobileStyles.cardTitleFontSize || "1.4rem", // Tăng kích thước tiêu đề
                      fontWeight: "700", // Tăng độ đậm
                      color: COLOR_PALETTE.dark,
                      marginBottom: "15px",
                      // Dùng màu chủ đạo cho tiêu đề phụ
                      borderBottom: `1px solid ${COLOR_PALETTE.primary}20`,
                      paddingBottom: "10px",
                    }}
                  >
                    {policy.title}
                  </h3>
                  <div
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {policy.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: isMobile ? "40px" : "50px",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            color: "#888",
          }}
        >
          * Mọi chính sách có thể được thay đổi mà không cần báo trước. Vui lòng
          xác nhận lại khi đặt phòng.
        </p>
      </div>
    </section>
  );
};
