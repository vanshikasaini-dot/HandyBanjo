import { Menu, LogOut } from "lucide-react";

export default function Header({
  sidebarOpen,
  setSidebarOpen,
  mobileOpen,
  setMobileOpen,
  onLogoutClick,
}) {
  return (
    <div className="h-[70px] bg-white flex items-center justify-between px-5">
      {/* MOBILE MENU */}
      <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
        <Menu size={28} />
      </button>

      {/* LOGO */}
      <h1
        className={`font-bold hidden lg:block text-[20px] ${sidebarOpen ? "lg:hidden" : ""}`}
      >
        <span className="text-red-500">Handy</span> Banjo
      </h1>
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 ml-auto">
        {/* LOGOUT */}
        <button
          onClick={onLogoutClick}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hidden lg:block cursor-pointer"
        >
          Logout
        </button>

        <button onClick={onLogoutClick} className="lg:hidden text-red-500">
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
}
