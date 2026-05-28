import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  XCircle,
  Eye,
  Check,
  X,
  Phone,
} from "lucide-react";

export default function VerificationRequests() {
  const [search, setSearch] = useState("");

  const requests = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Worker",
      skill: "Electrician",
      phone: "9876543210",
      documents: 4,
      date: "27 May 2026",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Amit Kumar",
      role: "Worker",
      skill: "Plumber",
      phone: "9876543211",
      documents: 3,
      date: "26 May 2026",
      status: "Verified",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Vikas Singh",
      role: "Worker",
      skill: "Cleaner",
      phone: "9876543212",
      documents: 5,
      date: "25 May 2026",
      status: "Rejected",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 4,
      name: "Rohit Verma",
      role: "Worker",
      skill: "Painter",
      phone: "9876543213",
      documents: 2,
      date: "24 May 2026",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  const filteredRequests = requests.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()),
  );

  const statusStyle = (status) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-orange-100 text-orange-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const roleStyle = (role) => {
    switch (role) {
      case "Worker":
        return "bg-purple-100 text-purple-600";
      case "Customer":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const cards = [
    {
      title: "Total Requests",
      value: "240",
      icon: <ShieldCheck size={28} />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Pending",
      value: "80",
      icon: <Clock3 size={28} />,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      title: "Verified",
      value: "120",
      icon: <BadgeCheck size={28} />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Rejected",
      value: "40",
      icon: <XCircle size={28} />,
      bg: "bg-red-100",
      color: "text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
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
                <h2 className="mt-2 text-3xl font-bold">{card.value}</h2>
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
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Verification Requests</h1>

            <p className="text-sm text-gray-500">
              Manage worker verification requests
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </motion.div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="mt-6 grid gap-4 xl:hidden">
        {filteredRequests.map((r, index) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <motion.img
                whileHover={{ scale: 1.08, rotate: 2 }}
                src={r.image}
                className="h-12 w-12 rounded-xl object-cover"
              />

              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-gray-500">{r.skill}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className={`rounded-full px-2 py-1 ${roleStyle(r.role)}`}>
                {r.role}
              </span>

              <span
                className={`rounded-full px-2 py-1 ${statusStyle(r.status)}`}
              >
                {r.status}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <Phone size={14} /> {r.phone}
            </div>

            <div className="mt-3 flex justify-end gap-2">
              {[
                {
                  icon: <Eye size={16} />,
                  bg: "bg-blue-100 text-blue-600",
                },
                {
                  icon: <Check size={16} />,
                  bg: "bg-green-100 text-green-600",
                },
                {
                  icon: <X size={16} />,
                  bg: "bg-red-100 text-red-600",
                },
              ].map((btn, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-lg p-2 transition-all duration-300 ${btn.bg}`}
                >
                  {btn.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 hidden overflow-x-auto rounded-3xl bg-white shadow-sm xl:block"
      >
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">User</th>
              <th>Role</th>
              <th>Contact</th>
              <th>Skill</th>
              <th>Docs</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRequests.map((r, index) => (
              <motion.tr
                key={r.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  backgroundColor: "#f9fafb",
                }}
                className="border-t transition-all duration-300"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <motion.img
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      src={r.image}
                      className="h-10 w-10 rounded-xl object-cover"
                    />

                    <span>{r.name}</span>
                  </div>
                </td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 ${roleStyle(r.role)}`}
                  >
                    {r.role}
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <Phone size={14} /> {r.phone}
                  </div>
                </td>

                <td>{r.skill}</td>
                <td>{r.documents}</td>
                <td>{r.date}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 ${statusStyle(r.status)}`}
                  >
                    {r.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-2">
                    {[
                      {
                        icon: <Eye size={16} />,
                        bg: "bg-blue-100 text-blue-600",
                      },
                      {
                        icon: <Check size={16} />,
                        bg: "bg-green-100 text-green-600",
                      },
                      {
                        icon: <X size={16} />,
                        bg: "bg-red-100 text-red-600",
                      },
                    ].map((btn, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.12, rotate: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className={`rounded-lg p-2 transition-all duration-300 ${btn.bg}`}
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
    </div>
  );
}
