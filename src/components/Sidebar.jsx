import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

export default function Sidebar({ close }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("");

  // Sidebar Menu Data
  const menuData = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },

    {
      title: "User Management",
      children: [
        { name: "Customers", path: "/dashboard/users/customers" },
        {
          name: "Service Providers",
          path: "/dashboard/users/service-providers",
        },
        { name: "Helpers/Workers", path: "/dashboard/users/helpers" },
        { name: "Enterprise Clients", path: "/dashboard/users/enterprise" },
        { name: "Blocked Users", path: "/dashboard/users/blocked" },
        {
          name: "Verification Requests",
          path: "/dashboard/users/verification",
        },
      ],
    },

    {
      title: "Service Management",
      children: [
        { name: "AC Service", path: "/dashboard/services/ac" },
        { name: "Plumbing", path: "/dashboard/services/plumbing" },
        { name: "Kitchen Service", path: "/dashboard/services/kitchen" },
        { name: "Electrician", path: "/dashboard/services/electrician" },
        // { name: "Deep Cleaning", path: "/dashboard/services/deep-cleaning" },
        // { name: "Add/Edit Services", path: "/dashboard/services/manage" },
        { name: "Service Pricing", path: "/dashboard/services/pricing" },
      ],
    },

    {
      title: "Booking Management",
      children: [
        { name: "All Bookings", path: "/dashboard/bookings/allbookings" },
        { name: "Reschedule Requests", path: "/dashboard/bookings/reschedule" },
      ],
    },

    {
      title: "Technician Management",
      children: [
        { name: "All Technicians", path: "/dashboard/tech/all" },
        { name: "Availability Status", path: "/dashboard/tech/availability" },
        { name: "Assigned Jobs", path: "/dashboard/tech/assigned" },
        { name: "Ratings & Reviews", path: "/dashboard/tech/reviews" },
        { name: "Earnings", path: "/dashboard/tech/earnings" },
        { name: "Documents Verification", path: "/dashboard/tech/documents" },
      ],
    },

    {
      title: "Payments & Wallet",
      children: [
        { name: "Transactions", path: "/dashboard/payments/transactions" },
        { name: "Customer Payments", path: "/dashboard/payments/customers" },
        { name: "Technician Payouts", path: "/dashboard/payments/payouts" },
        { name: "Wallet Management", path: "/dashboard/payments/wallet" },
        { name: "Refund Requests", path: "/dashboard/payments/refunds" },
        { name: "Coupons & Discounts", path: "/dashboard/payments/coupons" },
      ],
    },

    {
      title: "Settings",
      children: [
        { name: "Admin Roles", path: "/dashboard/settings/roles" },
        { name: "Permissions", path: "/dashboard/settings/permissions" },
        { name: "App Settings", path: "/dashboard/settings/app" },
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
      className="w-[260px] h-screen overflow-y-auto p-5 text-white relative"
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
        Handy <span className="text-red-500">Banjo</span>
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
                  className={`flex items-center rounded-lg p-3 transition-all duration-200 ${
                    isActive(menu.path)
                      ? "bg-red-500 text-black"
                      : "hover:bg-slate-700"
                  }`}
                >
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
                    <span>{menu.title}</span>

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
                          className={`block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                            isActive(child.path)
                              ? "bg-white/10 border border-white/20 text-white"
                              : "text-gray-300 hover:bg-white/5"
                          }`}
                        >
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
