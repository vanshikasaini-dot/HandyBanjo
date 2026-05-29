import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ChevronDown,
  X,
  LayoutDashboard,
  Users,
  UserCheck,
  Wrench,
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

export default function Sidebar({ close }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("");

  // Sidebar Menu Data
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
          name: "Customers",
          path: "/dashboard/users/customers",
          icon: <User size={16} />,
        },
        {
          name: "Service Providers",
          path: "/dashboard/users/service-providers",
          icon: <UserCheck size={16} />,
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
          name: "Blocked Users",
          path: "/dashboard/users/blocked",
          icon: <Ban size={16} />,
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

  // Active Route Check
  const isActive = (path) => location.pathname === path;

  // Parent Active Check
  const isParentActive = (children) =>
    children?.some((item) => item.path === location.pathname);

  // Accordion Toggle
  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? "" : title);
  };

  return (
    <aside
      className="w-[280px] h-screen overflow-y-auto p-5 text-white relative"
      style={{
        background:
          "linear-gradient(rgb(15,23,42), rgb(30,41,59), rgb(59,7,100))",
      }}
    >
      {/* Close Button */}
      <button onClick={close} className="absolute top-4 right-4 lg:hidden">
        <X size={28} />
      </button>

      {/* Logo */}
      <h1 className="text-2xl font-bold mb-8">
        <span className="text-red-500">Handy</span> Banjo
      </h1>

      {/* Menu */}
      <div className="space-y-2">
        {menuData.map((menu, index) => {
          const parentActive = isParentActive(menu.children);

          return (
            <div key={index}>
              {/* Single Link */}
              {menu.path ? (
                <Link
                  to={menu.path}
                  onClick={close}
                  className={`flex items-center gap-3 whitespace-nowrap rounded-lg p-3 transition-all duration-200 ${
                    isActive(menu.path)
                      ? "bg-red-500 text-black"
                      : "hover:bg-slate-700"
                  }`}
                >
                  {menu.icon}
                  {menu.title}
                </Link>
              ) : (
                <>
                  {/* Parent Menu */}
                  <button
                    onClick={() => toggleMenu(menu.title)}
                    className={`w-full flex items-center justify-between rounded-lg p-3 whitespace-nowrap transition-all duration-200 ${
                      parentActive
                        ? "bg-red-500 text-black"
                        : "hover:bg-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {menu.icon}
                      <span>{menu.title}</span>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openMenu === menu.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Child Menu */}
                  {openMenu === menu.title && (
                    <div className="mt-2 ml-3 space-y-1">
                      {menu.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          onClick={close}
                          className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                            isActive(child.path)
                              ? "bg-white/10 border border-white/20 text-white"
                              : "text-gray-300 hover:bg-white/5"
                          }`}
                        >
                          {child.icon}
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}