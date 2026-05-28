import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 z-50 h-screen w-[250px]">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-screen w-[250px]
          transition-transform duration-300 lg:hidden
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Sidebar close={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="lg:ml-[250px] min-h-screen">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 lg:left-[250px] z-30 bg-white">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Page Content */}
        <main className="pt-[90px] p-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
