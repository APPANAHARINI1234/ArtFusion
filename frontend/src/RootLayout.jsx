// src/layouts/RootLayout.jsx
import Navbar  from "./navbar/Navbar"
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* Page content loads here */}
      </main>
    </>
  );
};

export default RootLayout;
