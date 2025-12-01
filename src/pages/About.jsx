import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const observerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="about-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-page {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          overflow-x: hidden;
        }

        /* Scroll Animate */
        .scroll-animate {
          opacity: 0;
          transform: translateY(60px) scale(0.98);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Container */
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Section Styling */
        section {
          padding: 10rem 0;
          position: relative;
          overflow: hidden;
        }

        .introduction-section {
          background: linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%);
        }

        .architecture-section {
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          position: relative;
        }

        .architecture-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          animation: shimmerLine 3s ease-in-out infinite;
        }

        @keyframes shimmerLine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .location-section {
          background: linear-gradient(to bottom, #ffffff 0%, #fefefe 100%);
        }

        /* Two Column Layout */
        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          position: relative;
        }

        .two-column-layout::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          animation: float 8s ease-in-out infinite;
          filter: blur(60px);
        }

        .image-left::before {
          left: -150px;
          top: 50%;
          animation-delay: 0s;
        }

        .image-right::before {
          right: -150px;
          top: 50%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.5;
          }
          75% { 
            transform: translate(20px, 30px) scale(1.05);
            opacity: 0.7;
          }
        }

        /* Image Column with Parallax */
        .image-column {
          position: relative;
          z-index: 1;
          perspective: 1000px;
        }

        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.2);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 2;
        }

        .image-wrapper::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #d4af37, #f4d03f, #d4af37);
          border-radius: 24px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.6s ease;
          animation: borderGlow 3s ease-in-out infinite;
        }

        @keyframes borderGlow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }

        .image-column:hover .image-wrapper {
          transform: translateY(-15px) rotateX(2deg) rotateY(-2deg);
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
        }

        .image-column:hover .image-wrapper::before {
          opacity: 1;
        }

        .image-column:hover .image-wrapper::after {
          opacity: 0.5;
        }

        .section-image {
          width: 100%;
          height: 650px;
          object-fit: cover;
          display: block;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .image-column:hover .section-image {
          transform: scale(1.08);
        }

        /* Floating Badge */
        .image-badge {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(212,175,55,0.4);
          z-index: 3;
          animation: badgePulse 3s ease-in-out infinite;
          letter-spacing: 1px;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Text Column */
        .text-column {
          position: relative;
          z-index: 1;
        }

        .text-column h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 5.5vw, 4rem);
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 2.5rem;
          position: relative;
          padding-left: 2rem;
          line-height: 1.2;
        }

        .text-column h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: linear-gradient(to bottom, #d4af37, #f4d03f);
          border-radius: 10px;
          box-shadow: 0 0 25px rgba(212,175,55,0.5);
          animation: barPulse 2s ease-in-out infinite;
        }

        @keyframes barPulse {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.95); opacity: 0.8; }
        }

        .text-column h2::after {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          width: 26px;
          height: 26px;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 20px rgba(212,175,55,0.6);
          animation: dotPulse 2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.2); }
        }

        .text-column p {
          font-size: 1.2rem;
          line-height: 2;
          color: #4a4a4a;
          margin-bottom: 2rem;
          font-weight: 400;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding-left: 0.5rem;
          border-left: 2px solid transparent;
        }

        .text-column p:hover {
          color: #2a2a2a;
          transform: translateX(10px);
          border-left-color: rgba(212,175,55,0.3);
          padding-left: 1rem;
        }

        .text-column strong {
          color: #d4af37;
          font-weight: 700;
          font-size: 1.3rem;
          display: inline-block;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .text-column strong::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
          animation: underlineGlow 2s ease-in-out infinite;
        }

        @keyframes underlineGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Parallax Background Elements */
        .parallax-bg {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }

        .parallax-circle-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: 10%;
          left: -10%;
          filter: blur(80px);
        }

        .parallax-circle-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(244,208,63,0.06) 0%, transparent 70%);
          border-radius: 50%;
          bottom: 15%;
          right: -5%;
          filter: blur(70px);
        }

        /* Decorative Elements */
        .text-column::after {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, rgba(212,175,55,0.08), transparent);
          border-radius: 50%;
          right: -75px;
          top: 30%;
          z-index: -1;
          filter: blur(50px);
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .two-column-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .image-right {
            grid-template-columns: 1fr;
          }

          .image-right .text-column {
            order: 1;
          }

          .image-right .image-column {
            order: 2;
          }

          section {
            padding: 6rem 0;
          }

          .section-image {
            height: 500px;
          }
        }

        @media (max-width: 640px) {
          .about-page {
            padding-top: 40px;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section-image {
            height: 400px;
          }

          .image-wrapper {
            border-radius: 16px;
          }

          .text-column h2 {
            padding-left: 1.5rem;
            margin-bottom: 2rem;
          }

          .text-column p {
            font-size: 1.05rem;
            line-height: 1.8;
          }

          section {
            padding: 4rem 0;
          }

          .image-badge {
            padding: 0.75rem 1.5rem;
            font-size: 0.8rem;
            bottom: 20px;
            right: 20px;
          }

          .two-column-layout {
            gap: 3rem;
          }
        }

        /* Shine Effect */
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }

        .image-wrapper:hover::after {
          animation: borderGlow 3s ease-in-out infinite, shine 2s ease-in-out;
        }
      `}</style>

      {/* Phần 1: Giới thiệu */}
      <section className="introduction-section">
        <div
          className="parallax-bg parallax-circle-1"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div className="container">
          <div className="two-column-layout image-left scroll-animate">
            <div
              className="image-column"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <div className="image-wrapper">
                <img
                  src="/about/3.jpg"
                  alt="Elegant Hotel Hue Overview"
                  className="section-image"
                />
                <div className="image-badge">★ 3 SAO ★</div>
              </div>
            </div>
            <div
              className="text-column"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <h2>Giới thiệu về Elegant Hotel Hue</h2>
              <p>
                Elegant Hotel Hue là một khách sạn có kiến trúc hiện đại, tọa
                lạc ngay trái tim cố đô Huế. Khai trương vào năm 2025, tòa nhà 5
                tầng với 30 phòng nghỉ sang trọng này không chỉ là nơi lưu trú
                mà còn là cánh cửa mở ra hành trình khám phá những giá trị tinh
                túy nhất của miền đất di sản.
              </p>
              <p>
                Chỉ vài bước chân, bạn đã có thể hòa mình vào không gian lãng
                mạn của sông Hương, dạo bước trên cầu Trường Tiền cổ kính hay
                thưởng thức hương vị ẩm thực đường phố tại Chợ đêm Huế sôi động.
                Hành trình khám phá Đại Nội uy nghi, lăng tẩm trầm mặc hay những
                ngôi chùa thiêng liêng trở nên dễ dàng và thuận tiện.
              </p>
              <p>
                Với phong cách phục vụ tận tâm và chu đáo, Elegant Hotel Hue
                kiến tạo một không gian nghỉ dưỡng đẳng cấp, nơi mọi tiện nghi
                đều được chăm chút tỉ mỉ. Nhiều du khách đã để lại những đánh
                giá tích cực và nhận xét đây là khách sạn lý tưởng để khám phá
                trọn vẹn vẻ đẹp thơ mộng của thành phố Huế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phần 2: Đặc trưng kiến trúc */}
      <section className="architecture-section">
        <div
          className="parallax-bg parallax-circle-2"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        ></div>
        <div className="container">
          <div className="two-column-layout image-right scroll-animate">
            <div
              className="text-column"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <h2>Đặc trưng kiến trúc</h2>
              <p>
                Thiết kế theo phong cách hiện đại, tối giản nhưng không kém phần
                sang trọng và tinh tế. Tòa nhà 5 tầng nổi bật với gam màu trắng
                chủ đạo, mang lại cảm giác thanh lịch, sạch sẽ và tươi mới. Mặt
                tiền được bố trí các ban công kính, tối ưu hóa ánh sáng tự
                nhiên, mở ra tầm nhìn thoáng đãng ra khung cảnh phố thị nhộn
                nhịp của Huế.
              </p>
              <p>
                Hành lang được lát gạch hoa văn độc đáo, kết hợp với hệ thống
                đèn âm trần, tạo nên một lối đi vừa hiện đại vừa ấm cúng. Với
                tông màu trung tính như trắng, be, xám làm chủ đạo kết hợp cùng
                nội thất gỗ trầm, mỗi căn phòng trở thành một không gian nghỉ
                ngơi yên bình và thư thái.
              </p>
              <p>
                Giường ngủ được trang bị nệm cao cấp, đảm bảo giấc ngủ sâu trong
                khi các tiện ích hiện đại như TV, minibar, bàn làm việc được bố
                trí khoa học. Sự kết hợp giữa gam màu nhẹ nhàng và nội thất tiện
                nghi giúp mỗi căn phòng trở thành một chốn nghỉ dưỡng lý tưởng,
                đậm chất riêng và tràn đầy cảm hứng.
              </p>
            </div>
            <div
              className="image-column"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <div className="image-wrapper">
                <img
                  src="/about/1.jpg"
                  alt="Elegant Hotel Hue Architecture"
                  className="section-image"
                />
                <div className="image-badge">HIỆN ĐẠI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần 3: Vị trí & Điểm nổi bật */}
      <section className="location-section">
        <div
          className="parallax-bg parallax-circle-1"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div className="container">
          <div className="two-column-layout image-left scroll-animate">
            <div
              className="image-column"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <div className="image-wrapper">
                <img
                  src="/about/4.jpg"
                  alt="Elegant Hotel Hue Location"
                  className="section-image"
                />
                <div className="image-badge">TRUNG TÂM</div>
              </div>
            </div>
            <div
              className="text-column"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <h2>Vị trí & Điểm nổi bật</h2>
              <p>
                Elegant Hotel Hue tọa lạc tại trung tâm thành phố Huế, vị trí lý
                tưởng để khám phá vẻ đẹp thơ mộng và cổ kính của Cố đô. Chỉ vài
                bước chân, bạn có thể hòa mình vào không khí nhộn nhịp của Phố
                đi bộ, khám phá nét văn hóa tại Chợ Đông Ba hay chiêm ngưỡng Cầu
                Trường Tiền và Thôn Vĩ Dạ.
              </p>
              <p>
                <strong>Tiện ích đạt chuẩn 3 sao:</strong> Lựa chọn lý tưởng cho
                chốn dừng chân hiện đại, tiện nghi. Khách sạn ghi điểm nhờ sự
                chỉn chu trong từng trải nghiệm – từ không gian phòng nghỉ đầy
                đủ tiện ích đến đội ngũ nhân viên tận tâm, chuyên nghiệp. Quầy
                tiếp tân 24 giờ luôn sẵn sàng phục vụ. WiFi phủ khắp các khu vực
                chung cho phép bạn luôn kết nối với gia đình và bạn bè.
              </p>
              <p>
                <strong>Vị trí đắc địa:</strong> Sở hữu đầy đủ tiện nghi và dịch
                vụ xuất sắc. Với những tiện nghi sẵn có, Elegant Hotel Hue thực
                sự là nơi lưu trú hoàn hảo để trải nghiệm trọn vẹn vẻ đẹp Huế cổ
                kính.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
