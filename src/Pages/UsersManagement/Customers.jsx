import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserCheck,
  UserX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      city: "Delhi",
      bookings: 5,
      status: "Active",
      joinDate: "12 May 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },

    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "9876543211",
      city: "Mumbai",
      bookings: 2,
      status: "Blocked",
      joinDate: "20 Apr 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    {
      id: 3,
      name: "Aman Singh",
      email: "aman@gmail.com",
      phone: "9876543212",
      city: "Noida",
      bookings: 8,
      status: "Pending",
      joinDate: "01 Mar 2026",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "9876543213",
      city: "Jaipur",
      bookings: 4,
      status: "Active",
      joinDate: "10 Apr 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 5,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 6,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "9876543213",
      city: "Jaipur",
      bookings: 4,
      status: "Active",
      joinDate: "10 Apr 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 7,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 8,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "9876543213",
      city: "Jaipur",
      bookings: 4,
      status: "Active",
      joinDate: "10 Apr 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 9,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 10,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "9876543213",
      city: "Jaipur",
      bookings: 4,
      status: "Active",
      joinDate: "10 Apr 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 11,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 12,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 13,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 14,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 15,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 16,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 17,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 18,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543214",
      city: "Pune",
      bookings: 7,
      status: "Pending",
      joinDate: "15 Mar 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Blocked":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const cards = [
    {
      title: "Total Customers",
      value: "120",
      icon: <Users className="text-blue-600" size={26} />,
      bg: "bg-blue-100",
    },

    {
      title: "Active Customers",
      value: "95",
      icon: <UserCheck className="text-green-600" size={26} />,
      bg: "bg-green-100",
    },

    {
      title: "Blocked Customers",
      value: "25",
      icon: <UserX className="text-red-600" size={26} />,
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-6 p-4 lg:p-6 bg-gray-100 min-h-screen">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>
              </div>

              <div className={`rounded-2xl p-4 ${card.bg}`}>{card.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Customers</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all Customers and their details from here
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all focus:border-blue-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden overflow-hidden rounded-3xl bg-white shadow-sm lg:block"
      >
        <div>
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Customer",
                  "Email",
                  "Phone",
                  "City",
                  "Bookings",
                  "Status",
                  "Join Date",
                  "Actions",
                ].map((heading, index) => (
                  <th
                    key={index}
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-600"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentCustomers.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="border-b transition hover:bg-gray-50"
                >
                  {/* Customer */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-11 w-11 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.email}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.phone}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.city}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.bookings}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.joinDate}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-xl bg-blue-100 p-2 transition hover:bg-blue-200"
                      >
                        <Eye size={16} className="text-blue-600" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-xl bg-green-100 p-2 transition hover:bg-green-200"
                      >
                        <Pencil size={16} className="text-green-600" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-xl bg-red-100 p-2 transition hover:bg-red-200"
                      >
                        <Trash2 size={16} className="text-red-600" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        <div className="flex justify-end items-center gap-2 p-4 border-t bg-white">

  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white hover:bg-blue-500 hover:text-white transition disabled:opacity-50"
  >
    <ChevronLeft size={18} />
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`w-10 h-10 rounded-lg font-medium transition
        ${
          currentPage === index + 1
            ? "bg-blue-500 text-white"
            : "bg-white border hover:bg-blue-100"
        }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }
    disabled={currentPage === totalPages}
    className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white hover:bg-blue-500 hover:text-white transition disabled:opacity-50"
  >
    <ChevronRight size={18} />
  </button>

</div>
        </div>
      </motion.div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {filteredCustomers.map((item, index) => (
          <motion.tr
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="border-b transition hover:bg-gray-50"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.email}</p>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                  item.status,
                )}`}
              >
                {item.status}
              </span>
            </div>

            {/* Details */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Phone</p>

                <h4 className="font-medium text-gray-800">{item.phone}</h4>
              </div>

              <div>
                <p className="text-gray-500">City</p>

                <h4 className="font-medium text-gray-800">{item.city}</h4>
              </div>

              <div>
                <p className="text-gray-500">Bookings</p>

                <h4 className="font-medium text-gray-800">{item.bookings}</h4>
              </div>

              <div>
                <p className="text-gray-500">Join Date</p>

                <h4 className="font-medium text-gray-800">{item.joinDate}</h4>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="flex-1 rounded-2xl bg-blue-100 py-2 transition hover:bg-blue-200"
              >
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Eye size={16} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="flex-1 rounded-2xl bg-green-100 py-2 transition hover:bg-green-200"
              >
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Pencil size={16} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="flex-1 rounded-2xl bg-red-100 py-2 transition hover:bg-red-200"
              >
                <div className="flex items-center justify-center gap-2 text-red-600">
                  <Trash2 size={16} />
                </div>
              </motion.button>
            </div>
          </motion.tr>
        ))}
      </div>
    </div>
  );
}
