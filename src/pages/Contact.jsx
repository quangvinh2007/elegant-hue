import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending - replace with actual EmailJS integration
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  const HOTEL_EMAIL = "elegant.hotelhue@gmail.com";
  const HOTEL_PHONE = "0813.756.868";

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        input:focus, textarea:focus {
          border-color: #d4af37 !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
        }

        .submit-btn {
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(212, 175, 55, 0.5);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          
          .page-wrapper {
            padding-top: 60px !important;
          }
          
          .form-card, .info-card {
            padding: 30px 20px !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 15px !important;
          }
          
          .map-wrapper {
            height: 350px !important;
          }
        }
      `}</style>

      <section style={styles.container}>
        <div style={styles.contentWrapper}>
          {/* Grid Layout */}
          <div className="contact-grid" style={styles.grid}>
            {/* Left: Form */}
            <div className="form-card" style={styles.formCard}>
              <h1 className="hero-title" style={styles.heroTitle}>
                Get in Touch
              </h1>
              <div style={styles.heroUnderline}></div>

              <div className="form-row" style={styles.formRow}>
                <div style={styles.inputGroup}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>

              <div className="form-row" style={styles.formRow}>
                <div style={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telephone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                />
              </div>

              <button
                className="submit-btn"
                onClick={handleSubmit}
                style={styles.submitButton}
              >
                Submit
              </button>

              {status === "sending" && (
                <p style={{ ...styles.statusMessage, background: "#d4af37" }}>
                  Đang gửi...
                </p>
              )}
              {status === "success" && (
                <p style={{ ...styles.statusMessage, background: "#10b981" }}>
                  Gửi thành công! Chúng tôi sẽ liên hệ bạn sớm.
                </p>
              )}
              {status === "error" && (
                <p style={{ ...styles.statusMessage, background: "#ef4444" }}>
                  Có lỗi xảy ra, vui lòng thử lại sau.
                </p>
              )}
            </div>

            {/* Right: Contact Info */}
            <div className="info-card" style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.iconWrapper}>
                  <svg
                    style={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div style={{ width: "100%" }}>
                  <h3 style={styles.infoTitle}>Address</h3>
                  <p style={styles.infoText}>
                    60 Nguyễn Tri Phương
                    <br />
                    Thành phố Huế, Việt Nam
                  </p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.iconWrapper}>
                  <svg
                    style={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div style={{ width: "100%" }}>
                  <h3 style={styles.infoTitle}>Email address</h3>
                  <a href={`mailto:${HOTEL_EMAIL}`} style={styles.infoLink}>
                    {HOTEL_EMAIL}
                  </a>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.iconWrapper}>
                  <svg
                    style={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div style={{ width: "100%" }}>
                  <h3 style={styles.infoTitle}>Telephone</h3>
                  <a
                    href={`tel:${HOTEL_PHONE.replace(/\./g, "")}`}
                    style={styles.infoLink}
                  >
                    {HOTEL_PHONE}
                  </a>
                  <p style={styles.infoSubtext}>Monday to Friday 9am - 7pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="map-wrapper" style={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1909320147506!2d107.5942427!3d16.465867000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13c4f4acd5d%3A0x8f706a84f0722765!2zNjAgTmd1eeG7hW4gVHJpIFBoxrDGoW5nLCBQaMO6IEjhu5lpLCBIduG6vywgVGjDoG5oIHBo4buRIEh14bq_IDQ5MDAw!5e0!3m2!1svi!2s!4v1764524470482!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elegant Hotel Huế"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: {
    fontFamily: "'Inter', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "15px",
    letterSpacing: "-1px",
  },
  heroUnderline: {
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #d4af37, #f4d03f)",
    marginBottom: "40px",
    borderRadius: "10px",
  },
  container: {
    padding: "80px 20px 100px",
    background: "#faf8f5",
  },
  contentWrapper: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
    gap: "60px",
    marginBottom: "80px",
  },
  formCard: {
    background: "white",
    padding: "50px",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "16px 20px",
    fontSize: "1rem",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    color: "#374151",
  },
  textarea: {
    width: "100%",
    padding: "16px 20px",
    fontSize: "1rem",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    resize: "vertical",
    color: "#374151",
  },
  submitButton: {
    width: "auto",
    padding: "14px 50px",
    fontSize: "1rem",
    fontWeight: "600",
    background: "linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
  },
  statusMessage: {
    marginTop: "20px",
    padding: "16px",
    color: "white",
    borderRadius: "12px",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "0.95rem",
  },
  infoCard: {
    background: "white",
    padding: "50px 40px",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "45px",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "flex-start",
  },
  iconWrapper: {
    width: "50px",
    height: "50px",
    background: "linear-gradient(135deg, #d4af37, #f4d03f)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  icon: {
    width: "24px",
    height: "24px",
    color: "white",
    strokeWidth: "2",
  },
  infoTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "5px",
  },
  infoText: {
    fontSize: "1rem",
    color: "#6b7280",
    lineHeight: "1.6",
  },
  infoLink: {
    fontSize: "1rem",
    color: "#6b7280",
    textDecoration: "none",
    transition: "color 0.3s ease",
    display: "block",
    wordBreak: "break-word",
  },
  infoSubtext: {
    fontSize: "0.9rem",
    color: "#9ca3af",
    fontStyle: "italic",
    marginTop: "4px",
  },
  mapWrapper: {
    width: "100%",
    height: "500px",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
  },
};

export default Contact;
