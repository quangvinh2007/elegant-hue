import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Các trang con sẽ hiện ở đây */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
