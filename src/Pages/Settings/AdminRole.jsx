import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  ShieldCheck,
  Search,
  Plus,
  UserCog,
  Mail,
  Phone,
  Trash2,
  Pencil,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function AdminRoles() {
  const [search, setSearch] = useState("");

  const [admins] = useState([
    {
      id: 1,
      name: "Vanshika Saini",
      email: "vanshika@gmail.com",
      phone: "+91 9876543210",
      role: "Super Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+91 9876543201",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "+91 9876543202",
      role: "Support Staff",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Aman Singh",
      email: "aman@gmail.com",
      phone: "+91 9876543203",
      role: "Admin",
      status: "Active",
    },
  ]);

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(search.toLowerCase()) ||
      admin.role.toLowerCase().includes(search.toLowerCase()) ||
      admin.email.toLowerCase().includes(search.toLowerCase()),
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
            Admin Role Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage admin roles and permissions
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
            placeholder="Search admin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-red-400 shadow-sm"
          />
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        {/* Total Admins */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Admins</p>

              <h2 className="text-3xl font-bold mt-1">{admins.length}</h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <UserCog className="text-red-500" size={28} />
            </div>
          </div>
        </motion.div>

        {/* Active */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Admins</p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {admins.filter((a) => a.status === "Active").length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={28} />
            </div>
          </div>
        </motion.div>

        {/* Inactive */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Inactive Admins</p>

              <h2 className="text-3xl font-bold text-red-500 mt-1">
                {admins.filter((a) => a.status === "Inactive").length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="text-red-500" size={28} />
            </div>
          </div>
        </motion.div>

        {/* Roles */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Roles</p>

              <h2 className="text-3xl font-bold text-blue-500 mt-1">4</h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <ShieldCheck className="text-blue-500" size={28} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Button */}
      <div className="flex justify-end mb-6">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow-md"
        >
          <Plus size={18} />
          Add Admin
        </motion.button>
      </div>

      {/* Admin Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredAdmins.map((admin, index) => (
            <motion.div
              key={admin.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                    <UserCog className="text-red-500" size={26} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {admin.name}
                    </h2>

                    <p className="text-sm text-gray-500">{admin.role}</p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      admin.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {admin.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Mail size={15} />
                  </div>

                  <span>{admin.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Phone size={15} />
                  </div>

                  <span>{admin.phone}</span>
                </div>
              </div>

              {/* Permissions */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Permissions
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs">
                    Dashboard
                  </span>

                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                    Users
                  </span>

                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                    Bookings
                  </span>

                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Payments
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Pencil size={17} />
                  Edit
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-red-100 hover:bg-red-200 flex items-center justify-center transition-all"
                >
                  <Trash2 size={18} className="text-red-500" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredAdmins.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl p-10 text-center shadow-sm mt-5"
        >
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Admin Found
          </h2>

          <p className="text-gray-500">
            No admin records available right now.
          </p>
        </motion.div>
      )}
    </div>
  );
}