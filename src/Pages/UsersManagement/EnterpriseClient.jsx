import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Building2,
  Users,
  Wallet,
  BadgeCheck,
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
  MapPin,
  MoreVertical,
} from "lucide-react";

export default function Enterprises() {
  const [search, setSearch] = useState("");

  const enterprises = [
    {
      id: 1,
      company: "Taj Hotel",
      owner: "Rahul Sharma",
      phone: "9876543210",
      email: "tajhotel@gmail.com",
      city: "Delhi",
      employees: 25,
      bookings: 120,
      revenue: "₹45,000",
      status: "Active",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },

    {
      id: 2,
      company: "ABC Office",
      owner: "Amit Kumar",
      phone: "9876543211",
      email: "abcoffice@gmail.com",
      city: "Noida",
      employees: 15,
      bookings: 80,
      revenue: "₹28,000",
      status: "Inactive",
      logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },

    {
      id: 3,
      company: "Green Mall",
      owner: "Vikas Singh",
      phone: "9876543212",
      email: "greenmall@gmail.com",
      city: "Mumbai",
      employees: 40,
      bookings: 210,
      revenue: "₹75,000",
      status: "Active",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },

    {
      id: 4,
      company: "City Hospital",
      owner: "Rohit Verma",
      phone: "9876543213",
      email: "hospital@gmail.com",
      city: "Jaipur",
      employees: 30,
      bookings: 140,
      revenue: "₹52,000",
      status: "Pending",
      logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    },
  ];

  const filteredEnterprises = enterprises.filter((enterprise) =>
    enterprise.company.toLowerCase().includes(search.toLowerCase()),
  );

  const cards = [
    {
      title: "Total Enterprises",
      value: "240",
      icon: <Building2 className="text-blue-600" size={26} />,
      bg: "bg-blue-100",
    },

    {
      title: "Active Enterprises",
      value: "180",
      icon: <BadgeCheck className="text-green-600" size={26} />,
      bg: "bg-green-100",
    },

    {
      title: "Total Employees",
      value: "1250",
      icon: <Users className="text-orange-600" size={26} />,
      bg: "bg-orange-100",
    },

    {
      title: "Total Revenue",
      value: "₹5.2L",
      icon: <Wallet className="text-purple-600" size={26} />,
      bg: "bg-purple-100",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="space-y-6 overflow-hidden p-4 lg:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-md"
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

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Enterprise Management
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all enterprises easily
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search enterprise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all focus:border-blue-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden overflow-hidden rounded-3xl bg-white shadow-sm xl:block"
      >
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Company",
                "Contact",
                "City",
                "Employees",
                "Bookings",
                "Revenue",
                "Status",
                "Actions",
              ].map((heading, index) => (
                <th
                  key={index}
                  className="px-5 py-4 text-left text-sm font-semibold text-gray-600"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredEnterprises.map((enterprise, index) => (
              <motion.tr
                key={enterprise.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="border-b transition hover:bg-gray-50"
              >
                {/* Company */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={enterprise.logo}
                      alt={enterprise.company}
                      className="h-12 w-12 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {enterprise.company}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {enterprise.owner}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-5 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={15} />
                      {enterprise.phone}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail size={15} />
                      {enterprise.email}
                    </div>
                  </div>
                </td>

                {/* City */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={15} />
                    {enterprise.city}
                  </div>
                </td>

                {/* Employees */}
                <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                  {enterprise.employees}
                </td>

                {/* Bookings */}
                <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                  {enterprise.bookings}
                </td>

                {/* Revenue */}
                <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                  {enterprise.revenue}
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                      enterprise.status,
                    )}`}
                  >
                    {enterprise.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-xl bg-blue-100 p-2 transition hover:scale-105 hover:bg-blue-200">
                      <Eye size={16} className="text-blue-600" />
                    </button>

                    <button className="rounded-xl bg-green-100 p-2 transition hover:scale-105 hover:bg-green-200">
                      <Pencil size={16} className="text-green-600" />
                    </button>

                    <button className="rounded-xl bg-red-100 p-2 transition hover:scale-105 hover:bg-red-200">
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile Cards */}
      <div className="grid gap-4 xl:hidden">
        {filteredEnterprises.map((enterprise, index) => (
          <motion.div
            key={enterprise.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={enterprise.logo}
                  alt={enterprise.company}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="font-bold text-gray-800">
                    {enterprise.company}
                  </h3>

                  <p className="text-sm text-gray-500">{enterprise.owner}</p>
                </div>
              </div>

              <button className="rounded-xl bg-gray-100 p-2">
                <MoreVertical size={18} className="text-gray-600" />
              </button>
            </div>

            {/* Details */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">Phone</p>

                <h4 className="mt-1 font-medium text-gray-800">
                  {enterprise.phone}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">City</p>

                <h4 className="mt-1 font-medium text-gray-800">
                  {enterprise.city}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">Employees</p>

                <h4 className="mt-1 font-medium text-gray-800">
                  {enterprise.employees}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">Revenue</p>

                <h4 className="mt-1 font-medium text-gray-800">
                  {enterprise.revenue}
                </h4>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-5 flex items-center justify-between">
              <span
                className={`rounded-full px-4 py-1 text-xs font-medium ${getStatusStyle(
                  enterprise.status,
                )}`}
              >
                {enterprise.status}
              </span>

              <div className="flex items-center gap-2">
                <button className="rounded-xl bg-blue-100 p-2 transition hover:scale-105">
                  <Eye size={16} className="text-blue-600" />
                </button>

                <button className="rounded-xl bg-green-100 p-2 transition hover:scale-105">
                  <Pencil size={16} className="text-green-600" />
                </button>

                <button className="rounded-xl bg-red-100 p-2 transition hover:scale-105">
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
