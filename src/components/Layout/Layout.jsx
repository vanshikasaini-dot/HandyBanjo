import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../Sidebar";
import Header from "../Header";
import LogoutModal from "../Model/LogoutModal";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // desktop toggle
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sidebar
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR (DESKTOP) */}
      <div
        className={`hidden lg:block fixed top-0 left-0 h-screen z-50 bg-white shadow transition-all duration-300
        ${sidebarOpen ? "w-[280px]" : "w-[80px]"}`}
      >
        <Sidebar
          collapsed={!sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {/* SIDEBAR (MOBILE) */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] z-50 bg-white shadow
        transition-transform duration-300 lg:hidden
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar close={() => setMobileOpen(false)} collapsed={false} />
      </div>

      {/* MAIN AREA */}
      <div
        className={`min-h-screen transition-all duration-300
        ${sidebarOpen ? "lg:ml-[280px]" : "lg:ml-[80px]"}`}
      >
        {/* HEADER */}
        <div
          className={`fixed top-0 right-0 z-30 bg-white shadow
          transition-all duration-300
          ${sidebarOpen ? "lg:left-[280px]" : "lg:left-[80px]"} left-0`}
        >
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            onLogoutClick={() => setShowLogoutModal(true)}
          />
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-[90px] p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
