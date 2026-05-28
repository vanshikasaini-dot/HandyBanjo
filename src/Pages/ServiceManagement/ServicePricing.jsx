import { useState } from "react";
import { motion } from "framer-motion";
import {
  IndianRupee,
  AirVent,
  Wrench,
  ChefHat,
  Zap,
  Plus,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

export default function ServicesPricing() {
  const pricingList = [
    {
      id: 1,
      service: "AC Installation",
      category: "AC Service",
      price: "₹1200",
      status: "Active",
      icon: <AirVent className="text-blue-600" />,
    },

    {
      id: 2,
      service: "Pipe Repair",
      category: "Plumbing",
      price: "₹800",
      status: "Active",
      icon: <Wrench className="text-orange-600" />,
    },

    {
      id: 3,
      service: "Kitchen Cleaning",
      category: "Kitchen",
      price: "₹1500",
      status: "Inactive",
      icon: <ChefHat className="text-red-600" />,
    },

    {
      id: 4,
      service: "Wiring Repair",
      category: "Electrician",
      price: "₹1800",
      status: "Active",
      icon: <Zap className="text-yellow-500" />,
    },
  ];

  const [services, setServices] = useState(pricingList);
  const [search, setSearch] = useState("");

  // Delete Function
  const handleDelete = (id) => {
    const updatedServices = services.filter((item) => item.id !== id);
    setServices(updatedServices);
  };

  // Filter Logic
  const filteredServices = services.filter(
    (item) =>
      item.service.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()),
  );

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
            Services Pricing
          </h1>

          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Manage all service pricing and charges here.
          </p>
        </div>

        <button className="bg-black hover:bg-gray-800 transition-all text-white px-5 py-3 rounded-2xl font-semibold shadow-md flex items-center gap-2">
          <Plus size={18} />
          Add Pricing
        </button>
      </motion.div>

      {/* Stats Cards */}
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

            <div className="bg-gray-100 p-4 rounded-2xl">
              <IndianRupee className="text-black" />
            </div>
          </div>
        </motion.div>

        {/* Active */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Active Pricing</h2>

              <h1 className="text-3xl font-bold mt-2 text-green-500">
                {services.filter((item) => item.status === "Active").length}
              </h1>
            </div>

            <div className="bg-green-100 p-4 rounded-2xl">
              <IndianRupee className="text-green-600" />
            </div>
          </div>
        </motion.div>

        {/* Inactive */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Inactive Pricing</h2>

              <h1 className="text-3xl font-bold mt-2 text-red-500">
                {services.filter((item) => item.status === "Inactive").length}
              </h1>
            </div>

            <div className="bg-red-100 p-4 rounded-2xl">
              <IndianRupee className="text-red-600" />
            </div>
          </div>
        </motion.div>

        {/* Average */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Starting Price</h2>

              <h1 className="text-3xl font-bold mt-2 text-blue-500">₹800</h1>
            </div>

            <div className="bg-blue-100 p-4 rounded-2xl">
              <IndianRupee className="text-blue-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-sm p-4 mb-6 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between"
      >
        <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 w-full lg:w-[350px]">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search pricing..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none bg-transparent"
          />
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
                Service
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Category
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
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded-xl">
                        {item.icon}
                      </div>

                      <span className="font-medium text-gray-700">
                        {item.service}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-600">{item.category}</td>

                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {item.price}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
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
                <td colSpan="5" className="text-center py-10 text-gray-500">
                  No pricing found
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
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-2xl">{item.icon}</div>

                <div>
                  <h2 className="font-bold text-lg text-gray-800">
                    {item.service}
                  </h2>

                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">Price:</span>{" "}
                  {item.price}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">Status:</span>{" "}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5">
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
            No pricing found
          </div>
        )}
      </div>
    </div>
  );
}
