import React, { useState, useEffect } from "react";

const defaultImages = ["/banner/1.webp", "/banner/2.jpeg", "/banner/3.jpg"];

export function Banner({ images = defaultImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section style={styles.bannerSection}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .banner-image {
          animation: fadeIn 1.5s ease-out;
        }

        .banner-title {
          animation: slideInLeft 1.2s ease-out 0.3s both;
        }

        .banner-subtitle {
          animation: slideInLeft 1.2s ease-out 0.6s both;
        }

        .banner-ornament {
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .banner-content {
            left: 30px !important;
            width: calc(100% - 60px) !important;
          }
        }
      `}</style>

      {/* Images Layer */}
      <div style={styles.imagesContainer}>
        {images.map((img, index) => (
          <div
            key={index}
            className="banner-image"
            style={{
              ...styles.imageWrapper,
              opacity: currentIndex === index ? 1 : 0,
              transform: currentIndex === index ? "scale(1)" : "scale(1.05)",
              zIndex: currentIndex === index ? 1 : 0,
            }}
          >
            <img
              src={img}
              alt={`Elegant Hotel ${index + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div className="banner-content" style={styles.content}>
        {/* Decorative Line */}
        <div style={styles.decorativeLine} />

        {/* Main Title */}
        <h1 className="banner-title" style={styles.title}>
          Elegant Hotel
        </h1>

        {/* Subtitle */}
        <p className="banner-subtitle" style={styles.subtitle}>
          Huế - Cố Đô
        </p>

        {/* Ornament */}
        <div className="banner-ornament" style={styles.ornament}>
          ✦
        </div>
      </div>

      {/* Dots Navigation */}
      <div style={styles.dotsContainer}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setIsTransitioning(false);
                }, 800);
              }
            }}
            aria-label={`Slide ${i + 1}`}
            style={{
              ...styles.dot,
              width: currentIndex === i ? "50px" : "12px",
              background:
                currentIndex === i
                  ? "linear-gradient(90deg, #d4af37, #f4d03f)"
                  : "rgba(255,255,255,0.5)",
              boxShadow:
                currentIndex === i
                  ? "0 0 20px rgba(212, 175, 55, 0.6)"
                  : "none",
            }}
          />
        ))}
      </div>

      {/* Decorative Corner Elements */}
      <div style={styles.cornerTopLeft} />
      <div style={styles.cornerBottomRight} />
    </section>
  );
}

const styles = {
  bannerSection: {
    position: "relative",
    height: "85vh",
    minHeight: "600px",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  imagesContainer: {
    position: "absolute",
    inset: 0,
  },
  imageWrapper: {
    position: "absolute",
    inset: 0,
    transition:
      "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(26,26,26,0.3) 50%, rgba(0,0,0,0.5) 100%)",
    zIndex: 2,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "80px",
    transform: "translateY(-50%)",
    zIndex: 3,
    maxWidth: "600px",
  },
  decorativeLine: {
    width: "80px",
    height: "3px",
    background: "linear-gradient(90deg, #d4af37, #f4d03f)",
    marginBottom: "30px",
    boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(3.5rem, 8vw, 7rem)",
    fontWeight: 900,
    color: "#fff",
    marginBottom: "20px",
    lineHeight: 1,
    letterSpacing: "3px",
    textShadow: "4px 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.3)",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
    fontWeight: 300,
    color: "#f4d03f",
    marginBottom: "40px",
    letterSpacing: "8px",
    textShadow: "2px 2px 15px rgba(0,0,0,0.8)",
    textTransform: "uppercase",
  },
  ornament: {
    fontSize: "3rem",
    color: "#d4af37",
    textShadow: "0 0 30px rgba(212,175,55,0.8)",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "15px",
    zIndex: 4,
  },
  dot: {
    height: "12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  cornerTopLeft: {
    position: "absolute",
    top: "30px",
    left: "30px",
    width: "60px",
    height: "60px",
    borderTop: "3px solid rgba(212,175,55,0.4)",
    borderLeft: "3px solid rgba(212,175,55,0.4)",
    zIndex: 3,
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: "30px",
    right: "30px",
    width: "60px",
    height: "60px",
    borderBottom: "3px solid rgba(212,175,55,0.4)",
    borderRight: "3px solid rgba(212,175,55,0.4)",
    zIndex: 3,
  },
};

export default Banner;
