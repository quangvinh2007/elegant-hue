// src/pages/NotFound.jsx
export default function NotFound() {
  return (
    <div
      style={{
        marginTop: "120px",
        minHeight: "100vh",
        textAlign: "center",
        fontSize: "4rem",
        fontWeight: "bold",
        color: "#dc2626",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1>404</h1>
      <p style={{ fontSize: "2rem", color: "#666" }}>
        Oops! Trang bạn tìm không tồn tại
      </p>
      <a
        href="/"
        style={{
          fontSize: "1.2rem",
          padding: "12px 30px",
          background: "#0f172a",
          color: "white",
          borderRadius: "50px",
          textDecoration: "none",
        }}
      >
        Quay về Trang chủ
      </a>
    </div>
  );
}
