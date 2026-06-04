import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  X,
  Menu,
  LayoutDashboard,
  Users,
  Layers,
  Wrench,
  UserCheck,
  CalendarDays,
  BadgeCheck,
  Wallet,
  Settings,
  User,
  ShieldCheck,
  Ban,
  FileCheck,
  AirVent,
  Pipette,
  CookingPot,
  Zap,
  IndianRupee,
  ClipboardList,
  RefreshCcw,
  Briefcase,
} from "lucide-react";

export default function Sidebar({ close, collapsed, toggleSidebar }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("");

  const isActive = (path) => location.pathname === path;

  const isParentActive = (children) =>
    children?.some((item) => item.path === location.pathname);

  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? "" : title);
  };

  const menuData = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      title: "User Management",
      icon: <Users size={18} />,
      children: [
        {
          name: "All Users",
          path: "/dashboard/users/allusers",
          icon: <User size={16} />,
        },
        {
          name: "Customers",
          path: "/dashboard/users/customers",
          icon: <User size={16} />,
        },
        {
          name: "Category",
          path: "/dashboard/users/category",
          icon: <Layers size={16} />,
        },

        {
          name: "Helpers/Workers",
          path: "/dashboard/users/helpers",
          icon: <Briefcase size={16} />,
        },
        {
          name: "Enterprise Clients",
          path: "/dashboard/users/enterprise",
          icon: <Users size={16} />,
        },
        {
          name: "Pro",
          path: "/dashboard/users/pro",
          icon: <Wrench size={16} />,
        },

        {
          name: "Verification Requests",
          path: "/dashboard/users/verification",
          icon: <ShieldCheck size={16} />,
        },
      ],
    },
    {
      title: "Service Management",
      icon: <Wrench size={18} />,
      children: [
        {
          name: "AC Service",
          path: "/dashboard/services/ac",
          icon: <AirVent size={16} />,
        },
        {
          name: "Plumbing",
          path: "/dashboard/services/plumbing",
          icon: <Pipette size={16} />,
        },
        {
          name: "Kitchen Service",
          path: "/dashboard/services/kitchen",
          icon: <CookingPot size={16} />,
        },
        {
          name: "Electrician",
          path: "/dashboard/services/electrician",
          icon: <Zap size={16} />,
        },
        {
          name: "Service Pricing",
          path: "/dashboard/services/pricing",
          icon: <IndianRupee size={16} />,
        },
      ],
    },
    {
      title: "Booking Management",
      icon: <CalendarDays size={18} />,
      children: [
        {
          name: "All Bookings",
          path: "/dashboard/bookings/allbookings",
          icon: <ClipboardList size={16} />,
        },
        {
          name: "Reschedule Requests",
          path: "/dashboard/bookings/reschedule",
          icon: <RefreshCcw size={16} />,
        },
      ],
    },
    {
      title: "Technician Management",
      icon: <BadgeCheck size={18} />,
      children: [
        {
          name: "All Technicians",
          path: "/dashboard/technicians/alltechnicians",
          icon: <Users size={16} />,
        },
        {
          name: "Availability Status",
          path: "/dashboard/technicians/availability",
          icon: <BadgeCheck size={16} />,
        },
        {
          name: "Documents Verification",
          path: "/dashboard/technicians/documents",
          icon: <FileCheck size={16} />,
        },
      ],
    },
    {
      title: "Payments & Wallet",
      icon: <Wallet size={18} />,
      children: [
        {
          name: "All Payments",
          path: "/dashboard/payments/payments",
          icon: <IndianRupee size={16} />,
        },
      ],
    },
    {
      title: "Settings",
      icon: <Settings size={18} />,
      children: [
        {
          name: "Admin Roles",
          path: "/dashboard/settings/Adminrole",
          icon: <Users size={16} />,
        },
        {
          name: "Permissions",
          path: "/dashboard/settings/permissions",
          icon: <ShieldCheck size={16} />,
        },
        {
          name: "App Settings",
          path: "/dashboard/settings/app",
          icon: <Settings size={16} />,
        },
      ],
    },
  ];

  return (
    <aside
      className={`h-screen bg-white p-4 overflow-y-auto overflow-x-visible transition-all duration-300
      ${collapsed ? "w-[80px]" : "w-[280px]"}`}
    >
      {/* TOP HEADER */}
      <div className="flex items-center justify-between mb-6">
        {!collapsed && (
          <h1 className="text-xl font-bold">
            <span className="text-red-500">Handy</span> Banjo
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="text-gray-600 cursor-pointer hidden lg:block"
        >
          <Menu size={28} />
        </button>
        {close && (
          <button onClick={close} className="lg:hidden">
            <X size={22} />
          </button>
        )}
      </div>

      {/* MENU */}
      <div className="space-y-2">
        {menuData.map((menu, index) => {
          const parentActive = isParentActive(menu.children);

          return (
            <div key={index} className="relative">
              {/* SINGLE LINK */}
              {menu.path ? (
                <Link
                  to={menu.path}
                  onClick={close}
                  className={`flex items-center gap-3 p-3 rounded-lg transition
                  ${isActive(menu.path) ? "bg-red-500 text-white" : "hover:bg-gray-200"}`}
                >
                  {menu.icon}
                  {!collapsed && <span>{menu.title}</span>}
                </Link>
              ) : collapsed ? (
                /* ── COLLAPSED MODE: icon click → expand sidebar + open accordion ── */
                <button
                  onClick={() => {
                    toggleSidebar();
                    setOpenMenu(menu.title);
                  }}
                  className={`w-full flex items-center justify-center p-3 rounded-lg transition cursor-pointer
                  ${parentActive ? "bg-red-500 text-white cursor-pointer" : "hover:bg-gray-200 cursor-pointer"}`}
                >
                  {menu.icon}
                </button>
              ) : (
                /* ── EXPANDED MODE: original accordion ── */
                <>
                  <button
                    onClick={() => toggleMenu(menu.title)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition cursor-pointer
                    ${parentActive ? "bg-red-500 text-white" : "hover:bg-gray-200"}`}
                  >
                    <div className="flex items-center gap-3">
                      {menu.icon}
                      <span>{menu.title}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openMenu === menu.title ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openMenu === menu.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-6 space-y-1 overflow-hidden"
                      >
                        {menu.children.map((child, i) => (
                          <Link
                            key={i}
                            to={child.path}
                            onClick={close}
                            className={`flex items-center gap-2 p-2 rounded-md transition ${i === 0 ? "mt-1" : ""}
                            ${
                              isActive(child.path)
                                ? "bg-red-300 text-white font-semibold "
                                : "text-black hover:bg-gray-200"
                            }`}
                          >
                            {child.icon}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
