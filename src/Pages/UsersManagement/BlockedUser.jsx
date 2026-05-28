import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldX,
  Users,
  UserX,
  Ban,
  Eye,
  Trash2,
  RotateCcw,
  Phone,
  Mail,
  CalendarDays,
  MoreVertical,
} from "lucide-react";

export default function BlockedUsers() {
  const [search, setSearch] = useState("");

  const blockedUsers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      role: "Customer",
      reason: "Spam Activity",
      blockedDate: "25 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "9876543211",
      role: "Service Provider",
      reason: "Fake Reviews",
      blockedDate: "24 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Vikas Singh",
      email: "vikas@gmail.com",
      phone: "9876543212",
      role: "Helper Worker",
      reason: "Bad Behaviour",
      blockedDate: "23 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 4,
      name: "Rohit Verma",
      email: "rohit@gmail.com",
      phone: "9876543213",
      role: "Enterprise",
      reason: "Payment Issue",
      blockedDate: "22 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  const filteredUsers = blockedUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  const cards = [
    {
      title: "Total Blocked Users",
      value: "240",
      icon: <ShieldX size={28} />,
      bg: "bg-red-100",
      color: "text-red-600",
    },
    {
      title: "Blocked Customers",
      value: "120",
      icon: <Users size={28} />,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      title: "Blocked Providers",
      value: "65",
      icon: <Ban size={28} />,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    {
      title: "Blocked Workers",
      value: "55",
      icon: <UserX size={28} />,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 p-4 sm:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>
              </div>

              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`rounded-2xl p-4 ${card.bg} ${card.color}`}
              >
                {card.icon}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Blocked Users</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all blocked users easily
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>
        </div>
      </motion.div>

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 hidden overflow-hidden rounded-3xl bg-white shadow-sm xl:block"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "User",
                  "Contact",
                  "Role",
                  "Reason",
                  "Blocked Date",
                  "Status",
                  "Actions",
                ].map((item, index) => (
                  <th
                    key={index}
                    className="px-5 py-4 text-left text-sm font-semibold text-gray-600"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    backgroundColor: "#f9fafb",
                  }}
                  className="border-t border-gray-100 transition-all duration-300"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <motion.img
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        src={user.image}
                        alt={user.name}
                        className="h-14 w-14 rounded-2xl object-cover"
                      />

                      <div className="min-w-0">
                        <h2 className="truncate font-semibold text-gray-800">
                          {user.name}
                        </h2>

                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={15} />
                        {user.phone}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={15} />
                        {user.email}
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-700">
                    {user.reason}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDays size={15} />
                      {user.blockedDate}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600"
                    >
                      {user.status}
                    </motion.span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {[
                        {
                          icon: <Eye size={18} />,
                          bg: "bg-blue-100 text-blue-600",
                        },
                        {
                          icon: <RotateCcw size={18} />,
                          bg: "bg-green-100 text-green-600",
                        },
                        {
                          icon: <Trash2 size={18} />,
                          bg: "bg-red-100 text-red-600",
                        },
                      ].map((btn, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.12, rotate: 3 }}
                          whileTap={{ scale: 0.9 }}
                          className={`rounded-xl p-2 transition-all duration-300 ${btn.bg}`}
                        >
                          {btn.icon}
                        </motion.button>
                      ))}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Mobile Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 xl:hidden">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src={user.image}
                  alt={user.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div className="min-w-0">
                  <h2 className="truncate text-lg font-bold text-gray-800">
                    {user.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">{user.role}</p>

                  <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                    {user.status}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ rotate: 90 }}
                className="shrink-0 rounded-xl bg-gray-100 p-2 text-gray-600"
              >
                <MoreVertical size={18} />
              </motion.button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Phone</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {user.phone}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Reason</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {user.reason}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Email</p>

                <h3 className="mt-1 break-all text-sm font-medium text-gray-800">
                  {user.email}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Blocked Date</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {user.blockedDate}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-gray-600">{user.blockedDate}</span>

              <div className="flex items-center gap-2">
                {[
                  {
                    icon: <Eye size={18} />,
                    bg: "bg-blue-100 text-blue-600",
                  },
                  {
                    icon: <RotateCcw size={18} />,
                    bg: "bg-green-100 text-green-600",
                  },
                  {
                    icon: <Trash2 size={18} />,
                    bg: "bg-red-100 text-red-600",
                  },
                ].map((btn, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-xl p-2 transition-all duration-300 ${btn.bg}`}
                  >
                    {btn.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
