import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Search,
  Phone,
  MapPin,
  Briefcase,
  Star,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function AllTechnicians() {
  const [search, setSearch] = useState("");

  const technicians = [
    {
      id: "#TECH101",
      name: "Rahul Sharma",
      service: "Electrician",
      location: "Delhi",
      phone: "+91 9876543210",
      rating: 4.8,
      jobs: 120,
      status: "Active",
    },

    {
      id: "#TECH102",
      name: "Aman Verma",
      service: "Plumber",
      location: "Noida",
      phone: "+91 9876501234",
      rating: 4.5,
      jobs: 95,
      status: "Inactive",
    },

    {
      id: "#TECH103",
      name: "Pooja Singh",
      service: "Cleaner",
      location: "Mumbai",
      phone: "+91 9123456780",
      rating: 4.9,
      jobs: 150,
      status: "Active",
    },

    {
      id: "#TECH104",
      name: "Rohit Kumar",
      service: "AC Technician",
      location: "Pune",
      phone: "+91 9988776655",
      rating: 4.6,
      jobs: 88,
      status: "Active",
    },

    {
      id: "#TECH105",
      name: "Neha",
      service: "Painter",
      location: "Jaipur",
      phone: "+91 9000011111",
      rating: 4.3,
      jobs: 60,
      status: "Inactive",
    },

    {
      id: "#TECH106",
      name: "Karan",
      service: "Carpenter",
      location: "Lucknow",
      phone: "+91 9556677889",
      rating: 4.7,
      jobs: 110,
      status: "Active",
    },
  ];

  const filteredTechnicians = technicians.filter(
    (tech) =>
      tech.name.toLowerCase().includes(search.toLowerCase()) ||
      tech.service.toLowerCase().includes(search.toLowerCase()) ||
      tech.location.toLowerCase().includes(search.toLowerCase()),
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
            All Technicians
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all service technicians
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[320px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search technician..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-red-400 shadow-sm"
          />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        {/* Total */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Technicians</p>

              <h2 className="text-3xl font-bold mt-1">
                {technicians.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <Briefcase size={28} className="text-red-500" />
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
              <p className="text-gray-500 text-sm">Active Technicians</p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {
                  technicians.filter((tech) => tech.status === "Active")
                    .length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={28} className="text-green-500" />
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
              <p className="text-gray-500 text-sm">Inactive Technicians</p>

              <h2 className="text-3xl font-bold text-red-500 mt-1">
                {
                  technicians.filter((tech) => tech.status === "Inactive")
                    .length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>

        {/* Ratings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Top Rating</p>

              <h2 className="text-3xl font-bold text-yellow-500 mt-1">
                4.9
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
              <Star size={28} className="text-yellow-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technician Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredTechnicians.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {tech.name}
                  </h2>

                  <p className="text-sm text-gray-500">{tech.id}</p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold
                    ${
                      tech.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {tech.status}
                </span>
              </div>

              {/* Service */}
              <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                <p className="text-sm text-gray-500 mb-1">Service</p>

                <h3 className="font-semibold text-gray-800">
                  {tech.service}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <MapPin size={15} />
                  </div>

                  <span>{tech.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Phone size={15} />
                  </div>

                  <span>{tech.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Briefcase size={15} />
                  </div>

                  <span>{tech.jobs} Completed Jobs</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Star size={15} />
                  </div>

                  <span>{tech.rating} Rating</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Eye size={18} />
                  View Details
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
                >
                  <Phone size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredTechnicians.length === 0 && (
        <div className="bg-white rounded-3xl p-10 text-center shadow-sm mt-5">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Technicians Found
          </h2>

          <p className="text-gray-500">
            No technicians match your search.
          </p>
        </div>
      )}
    </div>
  );
}