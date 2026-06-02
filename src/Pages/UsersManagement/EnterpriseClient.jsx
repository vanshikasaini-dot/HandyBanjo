import { useState, useEffect } from "react";
import {
  getAllEnterprises,
  getEnterpriseById,
  deleteEnterprise,
  updateEnterprise,
} from "../../Apis/Interprise";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  EnterpriseViewModal,
  UpdateEnterpriseModal,
} from "../../components/Model/EnterpriseModal";
import { DeleteModal } from "../../components/Model/DeleteModal";

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
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalEnterprises = enterprises.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEnterprise, setSelectedEnterprise] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEnterpriseEdit, setSelectedEnterpriseEdit] = useState(null);
  const itemsPerPage = 5;

  const activeEnterprises = enterprises.length;
  const profileCreated = enterprises.filter(
    (item) => item.enterpriseProfile,
  ).length;

  const profilePending = enterprises.filter(
    (item) => !item.enterpriseProfile,
  ).length;

  useEffect(() => {
    fetchEnterprises();
  }, []);

  const fetchEnterprises = async () => {
    try {
      const data = await getAllEnterprises();

      console.log("API Response =>", data);

      setEnterprises(data?.data || []);
    } catch (error) {
      console.log("Error fetching enterprises:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = async (id) => {
    try {
      const response = await getEnterpriseById(id);

      setSelectedEnterprise(response.data);

      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteEnterprise(selectedDeleteId);

      setEnterprises((prev) =>
        prev.filter((item) => item._id !== selectedDeleteId),
      );

      setDeleteModalOpen(false);
      setSelectedDeleteId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (formData) => {
    try {
      await updateEnterprise(selectedEnterpriseEdit._id, formData);

      fetchEnterprises();
      setEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Total Enterprises",
      value: totalEnterprises,
      icon: <Building2 className="text-blue-600" size={26} />,
      bg: "bg-blue-100",
    },

    {
      title: "Active Enterprises",
      value: activeEnterprises,
      icon: <BadgeCheck className="text-green-600" size={26} />,
      bg: "bg-green-100",
    },

    {
      title: "Profiles Created",
      value: profileCreated,
      icon: <Users className="text-orange-600" size={26} />,
      bg: "bg-orange-100",
    },

    {
      title: "Profiles Pending",
      value: profilePending,
      icon: <Wallet className="text-purple-600" size={26} />,
      bg: "bg-purple-100",
    },
  ];

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }
  const filteredEnterprises = enterprises.filter((enterprise) =>
    `${enterprise.enterpriseProfile?.firstName || ""} ${
      enterprise.enterpriseProfile?.lastName || ""
    } ${enterprise.email || ""}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filteredEnterprises.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedEnterprises = filteredEnterprises.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
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

      {/* Search */}
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
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
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
                "Profile",
                "First Name",
                "Last Name",
                "Email",
                "Phone Number",
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
            {paginatedEnterprises.map((enterprise, index) => (
              <motion.tr
                key={enterprise._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="border-b transition hover:bg-gray-50"
              >
                {/* Profile */}
                <td className="px-5 py-4">
                  <img
                    src={
                      enterprise.enterpriseProfile?.profilePic ||
                      "https://via.placeholder.com/100"
                    }
                    alt="Profile"
                    className="h-12 w-12 rounded-2xl object-cover"
                  />
                </td>

                {/* First Name */}
                <td className="px-5 py-4 text-sm font-medium text-gray-700">
                  {enterprise.enterpriseProfile?.firstName || "N/A"}
                </td>

                {/* Last Name */}
                <td className="px-5 py-4 text-sm font-medium text-gray-700">
                  {enterprise.enterpriseProfile?.lastName || "N/A"}
                </td>

                {/* Email */}
                <td className="px-5 py-4 text-sm text-gray-700">
                  {enterprise.email}
                </td>

                {/* Phone Number */}
                <td className="px-5 py-4 text-sm text-gray-700">
                  {enterprise.enterpriseProfile?.phoneNumber || "N/A"}
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Active
                  </span>
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-xl bg-blue-100 p-2 transition hover:scale-105 cursor-pointer"
                      onClick={() => handleView(enterprise._id)}
                    >
                      <Eye size={16} className="text-blue-600" />
                    </button>

                    <button
                      className="rounded-xl bg-green-100 p-2 transition hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setSelectedEnterpriseEdit(enterprise);
                        setEditModalOpen(true);
                      }}
                    >
                      <Pencil size={16} className="text-green-600" />
                    </button>

                    <button
                      className="rounded-xl bg-red-100 p-2 transition hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setSelectedDeleteId(enterprise._id);
                        setDeleteModalOpen(true);
                      }}
                    >
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
        {paginatedEnterprises.map((enterprise, index) => (
          <motion.div
            key={enterprise._id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={
                    enterprise.enterpriseProfile?.profilePic ||
                    "https://via.placeholder.com/100"
                  }
                  alt="Profile"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="font-bold text-gray-800">
                    {enterprise.enterpriseProfile?.firstName || "N/A"}{" "}
                    {enterprise.enterpriseProfile?.lastName || ""}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {enterprise.user?.email}
                  </p>
                </div>
              </div>

              <button className="rounded-xl bg-gray-100 p-2 cursor-pointer">
                <MoreVertical size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-sm text-gray-500">{enterprise.email}</p>

                <h4 className="mt-1 font-medium text-gray-800">
                  {enterprise.enterpriseProfile?.phoneNumber || "N/A"}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">Email</p>

                <h4 className="mt-1 break-all font-medium text-gray-800">
                  {enterprise.user?.email}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">Status</p>

                <h4 className="mt-1 font-medium text-green-600">Active</h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-gray-500">Revenue</p>

                <h4 className="mt-1 font-medium text-gray-800">₹0</h4>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-medium text-green-700">
                Active
              </span>

              <div className="flex items-center gap-2">
                <button
                  className="rounded-xl bg-blue-100 p-2 transition hover:scale-105 cursor-pointer"
                  onClick={() => handleView(enterprise._id)}
                >
                  <Eye size={16} className="text-blue-600" />
                </button>

                <button
                  className="rounded-xl bg-green-100 p-2 transition hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setSelectedEnterpriseEdit(enterprise);
                    setEditModalOpen(true);
                  }}
                >
                  <Pencil size={16} className="text-green-600" />
                </button>

                <button
                  className="rounded-xl bg-red-100 p-2 transition hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setSelectedDeleteId(enterprise._id);
                    setDeleteModalOpen(true);
                  }}
                >
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
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
      <EnterpriseViewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        enterprise={selectedEnterprise}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Enterprise"
        message="Are you sure you want to delete this enterprise?"
      />
      <UpdateEnterpriseModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        enterprise={selectedEnterpriseEdit}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
