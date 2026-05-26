import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-screen
          w-[250px]
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 lg:left-0
        `}
      >
        <Sidebar close={() => setSidebarOpen(false)} />
      </div>

      {/* Main */}
      <div className="flex-1 lg:ml-[250px]">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 lg:left-[250px] z-30">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Page Content */}
        <div className="pt-[90px] p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
