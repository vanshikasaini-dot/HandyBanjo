import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  FileText,
  BadgeCheck,
  Clock3,
  Phone,
} from "lucide-react";

export default function DocumentsVerification() {
  const [search, setSearch] = useState("");

  const technicians = [
    {
      id: "#DOC101",
      name: "Rahul Sharma",
      service: "Electrician",
      phone: "+91 9876543210",
      aadhaar: true,
      pan: true,
      police: false,
      status: "Pending",
    },

    {
      id: "#DOC102",
      name: "Aman Verma",
      service: "Plumber",
      phone: "+91 9988776655",
      aadhaar: true,
      pan: true,
      police: true,
      status: "Verified",
    },

    {
      id: "#DOC103",
      name: "Pooja Singh",
      service: "Cleaner",
      phone: "+91 9123456780",
      aadhaar: true,
      pan: false,
      police: false,
      status: "Rejected",
    },

    {
      id: "#DOC104",
      name: "Neha",
      service: "Painter",
      phone: "+91 9000011111",
      aadhaar: true,
      pan: true,
      police: true,
      status: "Verified",
    },

    {
      id: "#DOC105",
      name: "Rohit Kumar",
      service: "AC Technician",
      phone: "+91 9556677889",
      aadhaar: false,
      pan: true,
      police: false,
      status: "Pending",
    },

    {
      id: "#DOC106",
      name: "Karan",
      service: "Carpenter",
      phone: "+91 9111222233",
      aadhaar: true,
      pan: true,
      police: false,
      status: "Pending",
    },
  ];

  const filteredTechnicians = technicians.filter(
    (tech) =>
      tech.name.toLowerCase().includes(search.toLowerCase()) ||
      tech.service.toLowerCase().includes(search.toLowerCase()),
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
            Documents Verification
          </h1>

          <p className="text-gray-500 mt-1">
            Verify technician uploaded documents
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
                Total Requests
              </p>

              <h2 className="text-3xl font-bold mt-1">
                {technicians.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <FileText size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>

        {/* Verified */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Verified
              </p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {
                  technicians.filter(
                    (tech) => tech.status === "Verified",
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <BadgeCheck size={28} className="text-green-500" />
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
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <h2 className="text-3xl font-bold text-yellow-500 mt-1">
                {
                  technicians.filter(
                    (tech) => tech.status === "Pending",
                  ).length
                }
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
              <Clock3 size={28} className="text-yellow-500" />
            </div>
          </div>
        </motion.div>

        {/* Rejected */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Rejected
              </p>

              <h2 className="text-3xl font-bold text-red-500 mt-1">
                {
                  technicians.filter(
                    (tech) => tech.status === "Rejected",
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

      {/* Cards */}
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
                      tech.status === "Verified"
                        ? "bg-green-100 text-green-700"
                        : tech.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
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

              {/* Phone */}
              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Phone size={15} />
                </div>

                <span>{tech.phone}</span>
              </div>

              {/* Documents */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">
                    Aadhaar Card
                  </p>

                  {tech.aadhaar ? (
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                  ) : (
                    <XCircle
                      size={18}
                      className="text-red-500"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">
                    PAN Card
                  </p>

                  {tech.pan ? (
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                  ) : (
                    <XCircle
                      size={18}
                      className="text-red-500"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">
                    Police Verification
                  </p>

                  {tech.police ? (
                    <CheckCircle
                      size={18}
                      className="text-green-500"
                    />
                  ) : (
                    <XCircle
                      size={18}
                      className="text-red-500"
                    />
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Eye size={18} />
                  View
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <CheckCircle size={18} />
                  Approve
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty */}
      {filteredTechnicians.length === 0 && (
        <div className="bg-white rounded-3xl p-10 text-center shadow-sm mt-5">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Records Found
          </h2>

          <p className="text-gray-500">
            No technician matches your search.
          </p>
        </div>
      )}
    </div>
  );
}