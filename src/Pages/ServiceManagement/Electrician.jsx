import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Pencil,
  Trash2,
  Zap,
  AlertTriangle,
  CheckCircle,
  Search,
  Wrench,
} from "lucide-react";

export default function ElectricianManagement() {
  const servicesData = [
    {
      id: 1,
      customer: "Rahul Sharma",
      service: "Fan Installation",
      address: "Delhi",
      worker: "Amit Kumar",
      status: "Pending",
      price: "₹700",
    },

    {
      id: 2,
      customer: "Priya Verma",
      service: "Wiring Repair",
      address: "Noida",
      worker: "Rohit Singh",
      status: "Completed",
      price: "₹1800",
    },

    {
      id: 3,
      customer: "Ankit Sharma",
      service: "Switch Board Fix",
      address: "Gurgaon",
      worker: "Vikas",
      status: "In Progress",
      price: "₹1200",
    },

    {
      id: 4,
      customer: "Sneha Gupta",
      service: "Light Installation",
      address: "Dehradun",
      worker: "Deepak",
      status: "Cancelled",
      price: "₹900",
    },

    {
      id: 5,
      customer: "Rohan Mehta",
      service: "MCB Replacement",
      address: "Haridwar",
      worker: "Karan",
      status: "Completed",
      price: "₹1500",
    },
  ];

  const [services, setServices] = useState(servicesData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Delete Function
  const handleDelete = (id) => {
    const updatedServices = services.filter((item) => item.id !== id);
    setServices(updatedServices);
  };

  // Filter Logic
  const filteredServices = services.filter((item) => {
    const matchesSearch =
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.service.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Status Color
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Electrician Management
          </h1>

          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Manage all electrician service requests here.
          </p>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 transition-all text-white px-5 py-3 rounded-2xl font-semibold shadow-md">
          + Add Electrician Service
        </button>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {/* Total */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Total Services</h2>

              <h1 className="text-3xl font-bold mt-2">{services.length}</h1>
            </div>

            <div className="bg-yellow-100 p-4 rounded-2xl">
              <Zap className="text-yellow-600" />
            </div>
          </div>
        </motion.div>

        {/* Pending */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Pending</h2>

              <h1 className="text-3xl font-bold mt-2 text-yellow-500">
                {services.filter((item) => item.status === "Pending").length}
              </h1>
            </div>

            <div className="bg-yellow-100 p-4 rounded-2xl">
              <AlertTriangle className="text-yellow-600" />
            </div>
          </div>
        </motion.div>

        {/* Completed */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Completed</h2>

              <h1 className="text-3xl font-bold mt-2 text-green-500">
                {services.filter((item) => item.status === "Completed").length}
              </h1>
            </div>

            <div className="bg-green-100 p-4 rounded-2xl">
              <CheckCircle className="text-green-600" />
            </div>
          </div>
        </motion.div>

        {/* In Progress */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">In Progress</h2>

              <h1 className="text-3xl font-bold mt-2 text-blue-500">
                {
                  services.filter((item) => item.status === "In Progress")
                    .length
                }
              </h1>
            </div>

            <div className="bg-blue-100 p-4 rounded-2xl">
              <Wrench className="text-blue-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-sm p-4 mb-6 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between"
      >
        {/* Search */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 w-full lg:w-[350px]">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search customer or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Filter */}
        <div className="w-full lg:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-yellow-500 w-full"
          >
            <option value="All">All Status</option>

            <option value="Pending">Pending</option>

            <option value="In Progress">In Progress</option>

            <option value="Completed">Completed</option>

            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </motion.div>

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden lg:block bg-white rounded-3xl shadow-sm overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Customer
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Service
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Address
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Worker
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Price
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Status
              </th>

              <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-t hover:bg-gray-50 transition-all"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {item.customer}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{item.service}</td>

                  <td className="px-6 py-4 text-gray-600">{item.address}</td>

                  <td className="px-6 py-4 text-gray-600">{item.worker}</td>

                  <td className="px-6 py-4 text-gray-600">{item.price}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-100 hover:bg-blue-200 p-2 rounded-xl transition-all"
                      >
                        <Eye size={18} className="text-blue-600" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-green-100 hover:bg-green-200 p-2 rounded-xl transition-all"
                      >
                        <Pencil size={18} className="text-green-600" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-100 hover:bg-red-200 p-2 rounded-xl transition-all"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No electrician services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {filteredServices.length > 0 ? (
          filteredServices.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-gray-800">
                  {item.customer}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    item.status,
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">Service:</span>{" "}
                  {item.service}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">Address:</span>{" "}
                  {item.address}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">Worker:</span>{" "}
                  {item.worker}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">Price:</span>{" "}
                  {item.price}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <button className="flex-1 bg-blue-100 hover:bg-blue-200 py-2 rounded-2xl flex items-center justify-center">
                  <Eye size={18} className="text-blue-600" />
                </button>

                <button className="flex-1 bg-green-100 hover:bg-green-200 py-2 rounded-2xl flex items-center justify-center">
                  <Pencil size={18} className="text-green-600" />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-100 hover:bg-red-200 py-2 rounded-2xl flex items-center justify-center"
                >
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center text-gray-500">
            No electrician services found
          </div>
        )}
      </div>
    </div>
  );
}
