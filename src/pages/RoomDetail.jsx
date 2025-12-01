import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Bed,
  Tv,
  Wind,
  Wifi,
  Coffee,
  Droplets,
  Bath,
  Home,
  Refrigerator,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Shirt,
} from "lucide-react";
import roomsData from "../data/roomsData";

export default function RoomDetail() {
  const { folder } = useParams();
  const navigate = useNavigate();
  const room = roomsData.find((r) => r.folder === folder);

  const [currentImage, setCurrentImage] = useState(0);
  const [validImages, setValidImages] = useState([]);
  const maxImages = 10;

  useEffect(() => {
    if (!room) {
      navigate("/phong");
      return;
    }

    const checkImages = async () => {
      const images = [];
      for (let i = 1; i <= maxImages; i++) {
        try {
          const img = new Image();
          img.src = `/rooms/${room.folder}/${i}.jpg`;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = () => {
              img.src = `/rooms/${room.folder}/${i}.jpeg`;
              img.onload = resolve;
              img.onerror = reject;
            };
          });
          images.push(i);
        } catch {
          break;
        }
      }
      setValidImages(images);
      if (images.length > 0) setCurrentImage(0);
    };

    checkImages();
  }, [room, navigate]);

  const imageCount = validImages.length;
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % imageCount);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount);

  const getImageSrc = (imageIndex) => {
    const jpgSrc = `/rooms/${room.folder}/${imageIndex}.jpg`;
    const jpegSrc = `/rooms/${room.folder}/${imageIndex}.jpeg`;
    return { jpgSrc, jpegSrc };
  };

  // Icon mapping
  const amenityIcons = {
    "Vòi tắm đứng": <Droplets size={20} />,
    "Tủ lạnh": <Refrigerator size={20} />,
    "Nước nóng": <Droplets size={20} />,
    "Máy lạnh": <Wind size={20} />,
    "Bữa sáng": <Utensils size={20} />,
    "WiFi miễn phí": <Wifi size={20} />,
    "Dọn phòng": <Home size={20} />,
    "Phòng cấm hút thuốc": <Home size={20} />,
    "Quầy bar mini": <Coffee size={20} />,
    "Nước đóng chai miễn phí": <Droplets size={20} />,
    TV: <Tv size={20} />,
    "Bàn làm việc": <Home size={20} />,
    "Phòng tắm riêng": <Bath size={20} />,
    "Bộ vệ sinh cá nhân": <Home size={20} />,
    "Máy sấy tóc": <Wind size={20} />,
    "Bồn tắm": <Bath size={20} />,
    "Khăn tắm": <Home size={20} />,
    "Vòi hoa sen phun mưa": <Droplets size={20} />,
    "Chiếu phim tại phòng": <Tv size={20} />,
    Quạt: <Wind size={20} />,
  };

  if (!room) return null;

  // Collect all amenities
  const allAmenities = [
    ...room.amenities.featuresYouLike,
    ...room.amenities.basicAmenities,
    ...room.amenities.roomAmenities,
    ...room.amenities.bathroomAmenities,
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Content Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#8B7355",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          {room.name}
        </h1>

        {/* Two Column Layout - Description & Amenities */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            marginBottom: "80px",
          }}
        >
          {/* Left Column - Description */}
          <div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "#666",
                marginBottom: "1.5rem",
              }}
            >
              {room.description}
            </p>

            {room.additionalInfo && (
              <div style={{ marginTop: "2rem" }}>
                {Object.entries(room.additionalInfo).map(([key, value]) => (
                  <p
                    key={key}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.8",
                      color: "#666",
                      marginBottom: "1rem",
                    }}
                  >
                    <strong style={{ color: "#8B7355" }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{" "}
                    {value}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Amenities with Icons */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {allAmenities.map((amenity, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      color: "#8B7355",
                      flexShrink: 0,
                    }}
                  >
                    {amenityIcons[amenity] || <Home size={20} />}
                  </div>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        {imageCount > 0 && (
          <div style={{ marginBottom: "100px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8B7355",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Hình ảnh phòng
            </h2>

            {/* Horizontal Scrollable Gallery */}
            <div style={{ position: "relative" }}>
              {/* Main large image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={getImageSrc(validImages[currentImage]).jpgSrc}
                  onError={(e) =>
                    (e.target.src = getImageSrc(
                      validImages[currentImage]
                    ).jpegSrc)
                  }
                  alt={`${room.name} - ${currentImage + 1}`}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />

                {/* Navigation arrows */}
                {imageCount > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        transition: "all 0.2s",
                      }}
                    >
                      <ChevronLeft size={24} color="#333" />
                    </button>

                    <button
                      onClick={nextImage}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        transition: "all 0.2s",
                      }}
                    >
                      <ChevronRight size={24} color="#333" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail scroll */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  overflowX: "auto",
                  paddingBottom: "10px",
                  scrollBehavior: "smooth",
                }}
              >
                {validImages.map((index, idx) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImage(idx)}
                    style={{
                      minWidth: "150px",
                      height: "100px",
                      cursor: "pointer",
                      border:
                        currentImage === idx
                          ? "3px solid #8B7355"
                          : "3px solid transparent",
                      borderRadius: "8px",
                      overflow: "hidden",
                      transition: "all 0.3s",
                      opacity: currentImage === idx ? 1 : 0.6,
                    }}
                  >
                    <img
                      src={getImageSrc(index).jpgSrc}
                      onError={(e) =>
                        (e.target.src = getImageSrc(index).jpegSrc)
                      }
                      alt={`${room.name} thumbnail ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* FullScreen Gallery Button */}
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <button
                  style={{
                    padding: "12px 32px",
                    background: "transparent",
                    border: "2px solid #333",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#333",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#333";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#333";
                  }}
                >
                  FullScreen Gallery
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Related Rooms */}
        <div style={{ marginTop: "100px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#8B7355",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Khám phá thêm
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {roomsData
              .filter((r) => r.id !== room.id)
              .slice(0, 3)
              .map((relatedRoom) => (
                <div
                  key={relatedRoom.id}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={() => navigate(`/phong/${relatedRoom.folder}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                      marginBottom: "15px",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src={`/rooms/${relatedRoom.folder}/1.jpg`}
                      onError={(e) =>
                        (e.target.src = `/rooms/${relatedRoom.folder}/1.jpeg`)
                      }
                      alt={relatedRoom.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "400",
                      letterSpacing: "0.05em",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    {relatedRoom.name}
                  </h3>
                  <p
                    style={{
                      color: "#999",
                      fontSize: "0.9rem",
                    }}
                  >
                    {relatedRoom.size} • {relatedRoom.guests}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
