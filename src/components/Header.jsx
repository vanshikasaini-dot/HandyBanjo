import { Menu, LogOut } from "lucide-react";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="py-[20px] bg-white shadow flex items-center justify-between px-6">

      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center">
        <h1 className="text-lg sm:text-xl font-bold leading-none">
          Handy <span className="text-red-500">Banjo</span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-auto">

        {/* Desktop Logout Button */}
        <button className="hidden lg:block bg-red-500 text-white px-5 py-2 rounded-lg">
          Logout
        </button>

        {/* Mobile Logout Icon */}
        <button className="lg:hidden text-red-500">
          <LogOut size={24} />
        </button>

        {/* Mobile Toggle Button */}
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