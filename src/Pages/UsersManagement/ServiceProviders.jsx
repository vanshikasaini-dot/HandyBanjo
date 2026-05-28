import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
  Users,
  UserCheck,
  Clock3,
  Ban,
} from "lucide-react";

export default function ServiceProviders() {
  const [search, setSearch] = useState("");

  const providers = [
    {
      id: 1,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "9876543210",
      city: "Delhi",
      category: "Electrician",
      bookings: 120,
      earnings: "₹45,000",
      status: "Active",
      verification: "Approved",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@gmail.com",
      phone: "9876543211",
      city: "Mumbai",
      category: "Plumber",
      bookings: 80,
      earnings: "₹30,000",
      status: "Pending",
      verification: "Pending",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876543212",
      city: "Noida",
      category: "Cleaner",
      bookings: 95,
      earnings: "₹50,000",
      status: "Blocked",
      verification: "Rejected",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  const filteredProviders = providers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
      case "Approved":
        return "bg-green-100 text-green-700";

      case "Blocked":
      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const cards = [
    {
      title: "Total Providers",
      value: "250",
      icon: <Users className="text-blue-600" size={24} />,
      bg: "bg-blue-100",
    },
    {
      title: "Active Providers",
      value: "180",
      icon: <UserCheck className="text-green-600" size={24} />,
      bg: "bg-green-100",
    },
    {
      title: "Pending Approval",
      value: "40",
      icon: <Clock3 className="text-yellow-600" size={24} />,
      bg: "bg-yellow-100",
    },
    {
      title: "Blocked Providers",
      value: "30",
      icon: <Ban className="text-red-600" size={24} />,
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-6 overflow-hidden p-4 lg:p-6">
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.04,
              y: -5,
            }}
            className="rounded-3xl bg-white p-5 shadow-sm transition-all duration-300"
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
                className={`rounded-2xl p-4 ${card.bg}`}
              >
                {card.icon}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Service Providers
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage all service providers and their details from here
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search service providers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </motion.div>

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden overflow-hidden rounded-3xl bg-white shadow-sm xl:block"
      >
        <table className="w-full table-fixed">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Provider",
                "Category",
                "Phone",
                "City",
                "Bookings",
                "Status",
                "Actions",
              ].map((heading, index) => (
                <th
                  key={index}
                  className="px-4 py-5 text-left text-xs font-semibold uppercase text-gray-500"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredProviders.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  backgroundColor: "#f9fafb",
                }}
                className="transition-all duration-300"
              >
                {/* Provider */}
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      src={item.image}
                      className="h-12 w-12 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-4 py-5">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-600">
                    {item.category}
                  </span>
                </td>

                <td className="px-4 py-5 text-sm">{item.phone}</td>

                <td className="px-4 py-5 text-sm">{item.city}</td>

                <td className="px-4 py-5 text-sm">{item.bookings}</td>

                <td className="px-4 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-5">
                  <div className="flex gap-2">
                    {[
                      {
                        icon: <Eye size={16} className="text-blue-600" />,
                        bg: "bg-blue-50 hover:bg-blue-200",
                      },
                      {
                        icon: <Pencil size={16} className="text-green-600" />,
                        bg: "bg-green-50 hover:bg-green-200",
                      },
                      {
                        icon: (
                          <CheckCircle size={16} className="text-emerald-600" />
                        ),
                        bg: "bg-emerald-50 hover:bg-emerald-200",
                      },
                      {
                        icon: <XCircle size={16} className="text-yellow-600" />,
                        bg: "bg-yellow-50 hover:bg-yellow-200",
                      },
                      {
                        icon: <Trash2 size={16} className="text-red-600" />,
                        bg: "bg-red-50 hover:bg-red-200",
                      },
                    ].map((btn, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.12, rotate: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className={`h-10 w-10 rounded-xl transition-all duration-300 ${btn.bg}`}
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
      </motion.div>

      {/* Mobile Cards */}
      <div className="grid gap-5 xl:hidden">
        {filteredProviders.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border bg-white p-5 shadow-sm transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <motion.img
                whileHover={{ rotate: 3, scale: 1.05 }}
                src={item.image}
                className="h-14 w-14 rounded-2xl object-cover"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>

              <span
                className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                  item.status,
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>Phone: {item.phone}</div>
              <div>City: {item.city}</div>
              <div>Bookings: {item.bookings}</div>
            </div>

            <div className="mt-4 flex gap-2">
              {[
                {
                  icon: <Eye size={16} className="text-blue-600" />,
                  bg: "bg-blue-50 hover:bg-blue-200",
                },
                {
                  icon: <Pencil size={16} className="text-green-600" />,
                  bg: "bg-green-50 hover:bg-green-200",
                },
                {
                  icon: <CheckCircle size={16} className="text-emerald-600" />,
                  bg: "bg-emerald-50 hover:bg-emerald-200",
                },
                {
                  icon: <XCircle size={16} className="text-yellow-600" />,
                  bg: "bg-yellow-50 hover:bg-yellow-200",
                },
                {
                  icon: <Trash2 size={16} className="text-red-600" />,
                  bg: "bg-red-50 hover:bg-red-200",
                },
              ].map((btn, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-10 w-10 rounded-xl transition-all duration-300 ${btn.bg}`}
                >
                  {btn.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
