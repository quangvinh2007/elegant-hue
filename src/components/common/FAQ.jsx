import { useState } from "react";

export function FAQ({ title = "Câu hỏi thường gặp" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Những tiện ích tại Elegant Hotel Hue bao gồm những gì?",
      answer:
        "Máy lạnh, Nhà hàng, Lễ tân 24h, Thang máy, WiFi miễn phí toàn bộ khách sạn. Một số dịch vụ bổ sung như đưa đón sân bay, giặt ủi sẽ có phụ phí.",
    },
    {
      question: "Thời gian nhận phòng và trả phòng là khi nào?",
      answer:
        "Nhận phòng: từ 14:00 | Trả phòng: trước 12:00 trưa. Check-in sớm / check-out muộn có thể sắp xếp tùy tình hình phòng (vui lòng liên hệ trước).",
    },
    {
      question: "Elegant Hotel Hue có phục vụ bữa sáng không?",
      answer:
        "Có phục vụ bữa sáng buffet đa dạng. Một số loại phòng đã bao gồm bữa sáng, một số loại sẽ tính thêm phí nếu quý khách muốn dùng bữa sáng.",
    },
    {
      question: "Elegant Hotel Hue đạt tiêu chuẩn mấy sao?",
      answer:
        "Elegant Hotel Hue là khách sạn boutique đạt tiêu chuẩn 3 sao quốc tế với dịch vụ và tiện nghi vượt chuẩn 4 sao.",
    },
  ];

  return (
    <section style={{ padding: "100px 20px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            marginBottom: "60px",
            color: "#1e293b",
          }}
        >
          {title}
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                marginBottom: "20px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                background: "white",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "24px 30px",
                  background: openIndex === i ? "#0f172a" : "white",
                  color: openIndex === i ? "white" : "#1e293b",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  textAlign: "left",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {faq.question}
                <span style={{ fontSize: "2rem", fontWeight: 300 }}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: "30px",
                    background: "white",
                    borderTop: "1px solid #e2e8f0",
                    lineHeight: 1.8,
                    color: "#475569",
                    fontSize: "1.05rem",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
