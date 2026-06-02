import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserCheck,
  Clock3,
  Ban,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
export default function ServiceProviders() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

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

  // Search Filter
  const filteredProviders = providers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Pagination
  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProviders = filteredProviders.slice(
    startIndex,
    startIndex + itemsPerPage,
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
      value: providers.length,
      icon: <Users className="text-blue-600" size={24} />,
      bg: "bg-blue-100",
    },
    {
      title: "Active Providers",
      value: providers.filter((item) => item.status === "Active").length,
      icon: <UserCheck className="text-green-600" size={24} />,
      bg: "bg-green-100",
    },
    {
      title: "Pending Approval",
      value: providers.filter((item) => item.status === "Pending").length,
      icon: <Clock3 className="text-yellow-600" size={24} />,
      bg: "bg-yellow-100",
    },
    {
      title: "Blocked Providers",
      value: providers.filter((item) => item.status === "Blocked").length,
      icon: <Ban className="text-red-600" size={24} />,
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-6 overflow-hidden p-4 lg:p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Service Providers Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all service providers here.
          </p>
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl font-semibold cursor-pointer">
          + Add Provider
        </button>
      </motion.div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Total Providers</h2>
              <h1 className="text-3xl font-bold mt-2">{providers.length}</h1>
            </div>

            <div className="bg-blue-100 p-3 rounded-2xl">
              <Users className="text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Active Providers</h2>
              <h1 className="text-3xl font-bold mt-2">
                {providers.filter((item) => item.status === "Active").length}
              </h1>
            </div>

            <div className="bg-green-100 p-3 rounded-2xl">
              <UserCheck className="text-green-600" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Search Box */}
      <motion.div className="bg-white rounded-3xl shadow-sm p-4 mb-6 flex flex-col lg:flex-row gap-4 lg:justify-between">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-2xl w-full lg:w-[350px]">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent w-full outline-none"
          />
        </div>
      </motion.div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-3xl shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Provider</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">City</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProviders.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">{item.category}</td>

                <td className="px-6 py-4">{item.phone}</td>

                <td className="px-6 py-4">{item.city}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="bg-blue-100 p-2 rounded-xl cursor-pointer">
                      <Eye size={18} className="text-blue-600" />
                    </button>

                    <button className="bg-green-100 p-2 rounded-xl cursor-pointer">
                      <Pencil size={18} className="text-green-600" />
                    </button>

                    <button className="bg-red-100 p-2 rounded-xl cursor-pointer">
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card */}
      <div className="grid grid-cols-1 gap-4 lg:hidden mt-4">
        {currentProviders.map((item) => (
          <div key={item._id} className="bg-white rounded-3xl shadow-sm p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.image}
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-500">{item.phone}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="bg-blue-100 p-2 rounded-xl cursor-pointer">
                <Eye size={18} className="text-blue-600" />
              </button>

              <button className="bg-green-100 p-2 rounded-xl cursor-pointer">
                <Pencil size={18} className="text-green-600" />
              </button>

              <button className="bg-red-100 p-2 rounded-xl">
                <Trash2 size={18} className="text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-end gap-3 pr-[30px]">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600 shadow-sm transition-all duration-200 hover:bg-red-500/20 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-10 w-10 rounded-xl border font-semibold transition-all duration-200 cursor-pointer ${
              currentPage === index + 1
                ? "border-red-600 bg-red-500/30 text-red-700 shadow-md scale-105"
                : "border-red-500 bg-red-500/10 text-red-600 hover:bg-red-500/20 hover:scale-105"
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
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600 shadow-sm transition-all duration-200 hover:bg-red-500/20 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
