import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAllCustomer } from "../../Apis/customer";
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
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
useEffect(() => {
  fetchCustomers();
}, [currentPage, search]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".filter-box")) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const response = await getAllCustomer(currentPage, 10);

      let data = response?.data || [];

      // NAME FILTER (search by firstName + lastName)
      if (search.trim()) {
        data = data.filter((item) =>
          `${item.firstName} ${item.lastName}`
            .toLowerCase()
            .includes(search.toLowerCase()),
        );
      }

      setCustomers(data);
      setTotalPages(response?.pagination?.totalPages || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleFilter = (e) => {
    e.stopPropagation();
    setShowFilter(!showFilter);
  };

  const cards = [
    {
      title: "Total Customers",
      value: customers.length,
      icon: <Users className="text-blue-600" size={26} />,
      bg: "bg-blue-100",
    },
    {
      title: "Active Customers",
      value: customers.length,
      icon: <UserCheck className="text-green-600" size={26} />,
      bg: "bg-green-100",
    },
    {
      title: "Blocked Customers",
      value: 0,
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

          <div className="relative  filter-box">
            <button
              onClick={handleFilter}
              className="bg-red-400 text-white px-4 py-2 rounded-xl cursor-pointer"
            >
              Filter
            </button>
            {showFilter && (
              <div className="absolute right-0 top-14 z-50 w-56 rounded-2xl bg-white shadow-lg border p-2">
                {filters.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setFilter(item);
                      setCurrentPage(1);
                      setShowFilter(false);
                    }}
                    className={`w-full rounded-xl px-4 py-3 text-left ${
                      filter === item
                        ? "bg-red-500 text-white"
                        : "hover:bg-red-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
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
            <thead className="bg-gray-100 text-center">
              <tr>
                {[
                  "Profile",
                  "Full Name",
                  "Email",
                  "Phone Number",
                  "State",
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
              {customers.map((item, index) => (
                <motion.tr
                  key={item._id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <img
                      src={item.profilePic || "https://via.placeholder.com/150"}
                      alt={item.firstName}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-800">
                    {item.firstName} {item.lastName}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.email || "N/A"}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.phoneNumber || "N/A"}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.state || "N/A"}
                  </td>

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
        </div>
      </motion.div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {customers.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="bg-white rounded-3xl p-4 shadow-sm"
          >
            {/* Top */}
            <div className="flex items-center gap-3">
              <img
                src={item.profilePic || "https://via.placeholder.com/150"}
                alt={item.firstName}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.firstName} {item.lastName}
                </h3>

                <p className="text-sm text-gray-500">{item.email || "N/A"}</p>
              </div>
            </div>

            {/* Details */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Phone Number</p>
                <h4 className="font-medium text-gray-800">
                  {item.phoneNumber || "N/A"}
                </h4>
              </div>

              <div>
                <p className="text-gray-500">State</p>
                <h4 className="font-medium text-gray-800">
                  {item.state || "N/A"}
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <h4 className="font-medium text-gray-800 break-all">
                  {item.email || "N/A"}
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Full Name</p>
                <h4 className="font-medium text-gray-800">
                  {item.firstName} {item.lastName}
                </h4>
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
          </motion.div>
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
            className={`h-10 w-10 rounded-xl border font-semibold transition-all duration-200 ${
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
