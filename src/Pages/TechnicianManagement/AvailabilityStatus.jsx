import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Search,
  Phone,
  MapPin,
  Briefcase,
  Eye,
  CheckCircle,
  Clock3,
  XCircle,
} from "lucide-react";

export default function AvailabilityStatus() {
  const [search, setSearch] = useState("");

  const technicians = [
    {
      id: "#TECH101",
      name: "Rahul Sharma",
      service: "Electrician",
      location: "Delhi",
      phone: "+91 9876543210",
      status: "Available",
    },

    {
      id: "#TECH102",
      name: "Aman Verma",
      service: "Plumber",
      location: "Noida",
      phone: "+91 9988776655",
      status: "Busy",
    },

    {
      id: "#TECH103",
      name: "Pooja Singh",
      service: "Cleaner",
      location: "Mumbai",
      phone: "+91 9123456780",
      status: "Offline",
    },

    {
      id: "#TECH104",
      name: "Rohit Kumar",
      service: "AC Technician",
      location: "Pune",
      phone: "+91 9556677889",
      status: "Available",
    },

    {
      id: "#TECH105",
      name: "Neha",
      service: "Painter",
      location: "Jaipur",
      phone: "+91 9000011111",
      status: "Busy",
    },

    {
      id: "#TECH106",
      name: "Karan",
      service: "Carpenter",
      location: "Lucknow",
      phone: "+91 9111222233",
      status: "Offline",
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Availability Status
          </h1>

          <p className="text-gray-500 mt-1">
            Track technician availability status
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
              <p className="text-sm text-gray-500">
                Total Technicians
              </p>

              <h2 className="text-3xl font-bold mt-1">
                {technicians.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <Briefcase size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>

        {/* Available */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Available
              </p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {
                  technicians.filter(
                    (tech) => tech.status === "Available",
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={28} className="text-green-500" />
            </div>
          </div>
        </motion.div>

        {/* Busy */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Busy
              </p>

              <h2 className="text-3xl font-bold text-blue-500 mt-1">
                {
                  technicians.filter(
                    (tech) => tech.status === "Busy",
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <Clock3 size={28} className="text-blue-500" />
            </div>
          </div>
        </motion.div>

        {/* Offline */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Offline
              </p>

              <h2 className="text-3xl font-bold text-red-500 mt-1">
                {
                  technicians.filter(
                    (tech) => tech.status === "Offline",
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
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl border border-gray-100"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {tech.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {tech.id}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      tech.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : tech.status === "Busy"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                    }`}
                >
                  {tech.status}
                </span>
              </div>

              {/* Service */}
              <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                <p className="text-sm text-gray-500 mb-1">
                  Service
                </p>

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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-900 hover:bg-black text-white py-2.5 rounded-xl transition-all"
                >
                  Change Status
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