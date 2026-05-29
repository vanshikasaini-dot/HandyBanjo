import { useState } from "react";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function Permissions() {
  const [search, setSearch] = useState("");

  const permissionsData = [
    {
      id: 1,
      role: "Super Admin",
      permissions: [
        "Dashboard",
        "Users Management",
        "Service Management",
        "Booking Management",
        "Payment Wallet",
        "Reports",
        "Settings",
      ],
      status: "Active",
    },

    {
      id: 2,
      role: "Manager",
      permissions: [
        "Dashboard",
        "Booking Management",
        "Service Management",
        "Reports",
      ],
      status: "Active",
    },

    {
      id: 3,
      role: "Support Staff",
      permissions: ["Dashboard", "Booking Management"],
      status: "Inactive",
    },

    {
      id: 4,
      role: "Accountant",
      permissions: ["Dashboard", "Payment Wallet", "Reports"],
      status: "Active",
    },
  ];

  const allPermissions = [
    "Dashboard",
    "Users Management",
    "Service Management",
    "Booking Management",
    "Payment Wallet",
    "Reports",
    "Settings",
  ];

  const filteredRoles = permissionsData.filter((item) =>
    item.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Permissions Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage role based access permissions
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[320px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-red-400 shadow-sm"
          />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
        {/* Total Roles */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Roles</p>

              <h2 className="text-3xl font-bold mt-1">
                {permissionsData.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <ShieldCheck size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>

        {/* Active Roles */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Roles</p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {
                  permissionsData.filter(
                    (item) => item.status === "Active",
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-green-500" />
            </div>
          </div>
        </motion.div>

        {/* Inactive Roles */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Inactive Roles</p>

              <h2 className="text-3xl font-bold text-red-500 mt-1">
                {
                  permissionsData.filter(
                    (item) => item.status === "Inactive",
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Permission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredRoles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {role.role}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Role Permissions
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    role.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
              >
                {role.status}
              </span>
            </div>

            {/* Permissions */}
            <div className="space-y-3">
              {allPermissions.map((permission, idx) => {
                const hasPermission =
                  role.permissions.includes(permission);

                return (
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    key={idx}
                    className="flex items-center justify-between bg-gray-50 rounded-xl p-3"
                  >
                    <span className="text-gray-700 font-medium">
                      {permission}
                    </span>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center
                        ${
                          hasPermission
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                    >
                      {hasPermission ? (
                        <CheckCircle2
                          size={16}
                          className="text-green-600"
                        />
                      ) : (
                        <XCircle
                          size={16}
                          className="text-red-600"
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-all"
            >
              Update Permissions
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRoles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl p-10 text-center shadow-sm mt-5"
        >
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Roles Found
          </h2>

          <p className="text-gray-500">
            No permission roles available right now.
          </p>
        </motion.div>
      )}
    </div>
  );
}