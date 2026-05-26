import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

export default function Sidebar({ close }) {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);

  // Active Check
  const isActive = (path) => location.pathname === path;

  // Parent Active Check
  const isParentActive = (children) => {
    return children?.some((c) => location.pathname === c.path);
  };

  // Toggle Accordion
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Sidebar Menu
  const menuData = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },

    {
      title: "User Management",
      children: [
        {
          name: "Customers",
          path: "/dashboard/users/customers",
        },
        {
          name: "Service Providers",
          path: "/dashboard/users/service-providers",
        },
        {
          name: "Helpers/Workers",
          path: "/dashboard/users/helpers",
        },
        {
          name: "Enterprise Clients",
          path: "/dashboard/users/enterprise",
        },
        {
          name: "Blocked Users",
          path: "/dashboard/users/blocked",
        },
        {
          name: "Verification Requests",
          path: "/dashboard/users/verification",
        },
      ],
    },

    {
      title: "Service Management",
      children: [
        {
          name: "AC Service",
          path: "/dashboard/services/ac",
        },
        {
          name: "Plumbing",
          path: "/dashboard/services/plumbing",
        },
        {
          name: "Kitchen Service",
          path: "/dashboard/services/kitchen",
        },
        {
          name: "Electrician",
          path: "/dashboard/services/electrician",
        },
        {
          name: "Appliance Repair",
          path: "/dashboard/services/appliance",
        },
        {
          name: "Deep Cleaning",
          path: "/dashboard/services/deep-cleaning",
        },
        {
          name: "Add/Edit Services",
          path: "/dashboard/services/manage",
        },
        {
          name: "Service Pricing",
          path: "/dashboard/services/pricing",
        },
      ],
    },

    {
      title: "Booking Management",
      children: [
        {
          name: "All Bookings",
          path: "/dashboard/bookings/all",
        },
        {
          name: "Pending Bookings",
          path: "/dashboard/bookings/pending",
        },
        {
          name: "Ongoing Jobs",
          path: "/dashboard/bookings/ongoing",
        },
        {
          name: "Completed Jobs",
          path: "/dashboard/bookings/completed",
        },
        {
          name: "Cancelled Jobs",
          path: "/dashboard/bookings/cancelled",
        },
        {
          name: "Reschedule Requests",
          path: "/dashboard/bookings/reschedule",
        },
      ],
    },

    {
      title: "Technician Management",
      children: [
        {
          name: "All Technicians",
          path: "/dashboard/tech/all",
        },
        {
          name: "Availability Status",
          path: "/dashboard/tech/availability",
        },
        {
          name: "Assigned Jobs",
          path: "/dashboard/tech/assigned",
        },
        {
          name: "Ratings & Reviews",
          path: "/dashboard/tech/reviews",
        },
        {
          name: "Earnings",
          path: "/dashboard/tech/earnings",
        },
        {
          name: "Documents Verification",
          path: "/dashboard/tech/documents",
        },
      ],
    },

    {
      title: "Payments & Wallet",
      children: [
        {
          name: "Transactions",
          path: "/dashboard/payments/transactions",
        },
        {
          name: "Customer Payments",
          path: "/dashboard/payments/customers",
        },
        {
          name: "Technician Payouts",
          path: "/dashboard/payments/payouts",
        },
        {
          name: "Wallet Management",
          path: "/dashboard/payments/wallet",
        },
        {
          name: "Refund Requests",
          path: "/dashboard/payments/refunds",
        },
        {
          name: "Coupons & Discounts",
          path: "/dashboard/payments/coupons",
        },
      ],
    },

    {
      title: "Settings",
      children: [
        {
          name: "Admin Roles",
          path: "/dashboard/settings/roles",
        },
        {
          name: "Permissions",
          path: "/dashboard/settings/permissions",
        },
        {
          name: "App Settings",
          path: "/dashboard/settings/app",
        },
      ],
    },
  ];

  return (
    <div
      className="w-[250px] h-screen p-5 text-white overflow-y-auto relative"
      style={{
        background:
          "linear-gradient(rgb(15, 23, 42), rgb(30, 41, 59), rgb(59, 7, 100))",
      }}
    >
      {/* Close Button */}
      <button
        onClick={close}
        className="absolute top-4 right-4 lg:hidden text-white hover:text-red-400 transition"
      >
        <X size={30} />
      </button>

      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">
        Admin Panel
      </h1>

      {/* Menu */}
      <div className="flex flex-col gap-2">
        {menuData.map((menu, index) => {
          const parentActive = isParentActive(menu.children);

          return (
            <div key={index}>
              {/* Direct Link */}
              {menu.path ? (
                <Link
                  to={menu.path}
                  onClick={close}
                  className={`flex items-center p-3 rounded-lg transition ${
                    isActive(menu.path)
                      ? "bg-red-500 text-black"
                      : "hover:bg-slate-700"
                  }`}
                >
                  <span className="font-medium">
                    {menu.title}
                  </span>
                </Link>
              ) : (
                <>
                  {/* Parent Menu */}
                  <div
                    onClick={() => toggleMenu(menu.title)}
                    className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition ${
                      parentActive
                        ? "bg-red-500 text-black"
                        : "hover:bg-slate-700"
                    }`}
                  >
                    <span className="font-medium">
                      {menu.title}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`transition duration-300 ${
                        openMenu === menu.title
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </div>

                  {/* Child Menu */}
                  {openMenu === menu.title && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {menu.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          onClick={close}
                          className={`text-sm p-2 rounded transition ${
                            isActive(child.path)
                              ? "bg-red-500 text-black"
                              : "hover:bg-slate-700 text-gray-300"
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
    </div>
  );
}