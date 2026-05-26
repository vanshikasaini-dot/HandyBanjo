import { Menu } from "lucide-react";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="py-[20px] bg-white shadow flex items-center justify-between px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Logout */}
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
          Logout
        </button>
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>
      </div>
    </div>
  );
}
