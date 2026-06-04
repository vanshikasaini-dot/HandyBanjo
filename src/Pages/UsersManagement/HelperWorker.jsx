import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllHelpers } from "../../Apis/Helper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getHelperById,
  updateHelperById,
  deleteHelperById,
} from "../../Apis/Helper";
import {
  ViewHelperModal,
  UpdateHelperModal,
} from "../../components/Model/HelperModels";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  UserCheck,
  UserX,
  Users,
  Briefcase,
  Star,
  Phone,
  Mail,
  MapPin,
  MoreVertical,
} from "lucide-react";

import { DeleteModal } from "../../components/Model/DeleteModal";
export default function HelperWorkers() {
  const [search, setSearch] = useState("");
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [editModal, setEditModal] = useState(false);
  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await getAllHelpers();

      console.log("Full Response =>", response);
      console.log("Response Data =>", response.data);

      setWorkers(response?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteHelperById(selectedWorker._id);

      fetchWorkers();

      setDeleteModal(false);
      setSelectedWorker(null);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredWorkers = workers.filter((worker) =>
    `${worker?.helperProfile?.fullName || ""} ${worker?.email || ""}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const handleUpdate = async (formData) => {
    try {
      console.log("UPDATING ID:", selectedWorker._id);

      for (let pair of formData.entries()) {
        console.log("FORMDATA =>", pair[0], pair[1]);
      }

      const res = await updateHelperById(selectedWorker._id, formData);

      console.log("UPDATE RESPONSE =>", res);

      fetchWorkers();
      setEditModal(false);
      setSelectedWorker(null);
    } catch (error) {
      console.log("UPDATE ERROR =>", error);
    }
  };
  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage);

  const indexOfLastWorker = currentPage * itemsPerPage;
  const indexOfFirstWorker = indexOfLastWorker - itemsPerPage;

  const currentWorkers = filteredWorkers.slice(
    indexOfFirstWorker,
    indexOfLastWorker,
  );
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 p-4 sm:p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Helper Workers</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all helper workers easily
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search worker..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </motion.div>

      {/* Top Cards */}
      <div className=" mt-[30px]">
        {[
          {
            title: "Total Workers",
            value: workers.length,
            icon: <Users size={28} />,
            bg: "bg-blue-100",
            color: "text-blue-600",
          },
        ].map((card, index) => (
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

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>
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

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 hidden w-full overflow-hidden rounded-3xl bg-white shadow-sm xl:block"
      >
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Profile",
                  "Full Name",
                  "Email",
                  "Phone",
                  "Experience",
                  "Hourly Rate",
                  "Available",
                  "Actions",
                ].map((item, index) => (
                  <th
                    key={index}
                    className="px-4 py-4 text-left text-sm font-semibold text-gray-600"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentWorkers.map((worker, index) => (
                <motion.tr
                  key={worker._id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-gray-100"
                >
                  <td className="px-4 py-4">
                    <img
                      src={
                        worker?.helperProfile?.profileImage ||
                        "https://via.placeholder.com/50"
                      }
                      alt="profile"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="px-4 py-4 font-medium text-gray-800">
                    {worker?.helperProfile?.fullName || "N/A"}
                  </td>

                  <td className="px-4 py-4 text-gray-600">{worker?.email}</td>

                  <td className="px-4 py-4 text-gray-600">
                    {worker?.helperProfile?.phone || "N/A"}
                  </td>

                  <td className="px-4 py-4 text-gray-600">
                    {worker?.helperProfile?.experience || 0} Years
                  </td>

                  <td className="px-4 py-4 text-gray-600">
                    ₹{worker?.helperProfile?.hourlyRate || 0}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        worker?.helperProfile?.isAvailable
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {worker?.helperProfile?.isAvailable
                        ? "Available"
                        : "Unavailable"}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="rounded-xl bg-blue-100 p-2 text-blue-600 cursor-pointer"
                        onClick={() => {
                          setSelectedWorker(worker);
                          setViewModal(true);
                        }}
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="rounded-xl bg-green-100 p-2 text-green-600 cursor-pointer"
                        onClick={() => {
                          setSelectedWorker(worker);
                          setEditModal(true);
                        }}
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="rounded-xl bg-red-100 p-2 text-red-600 cursor-pointer"
                        onClick={() => {
                          setSelectedWorker(worker);
                          setDeleteModal(true);
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Mobile Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 xl:hidden">
        {currentWorkers.map((worker, index) => (
          <motion.div
            key={worker._id}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 gap-4">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src={
                    worker?.helperProfile?.profileImage ||
                    "https://via.placeholder.com/150"
                  }
                  alt="helper"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div className="min-w-0">
                  <h2 className="truncate text-lg font-bold text-gray-800">
                    {worker?.helperProfile?.fullName || "N/A"}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {worker?.role || "helper"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Phone</p>

                <h3 className="mt-1 break-all text-sm font-medium text-gray-800">
                  {worker?.helperProfile?.phone || "N/A"}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Experience</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {worker?.helperProfile?.experience || 0} Years
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Hourly Rate</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  ₹{worker?.helperProfile?.hourlyRate || 0}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Availability</p>

                <span
                  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    worker?.helperProfile?.isAvailable
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {worker?.helperProfile?.isAvailable
                    ? "Available"
                    : "Unavailable"}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setSelectedWorker(worker);
                  setViewModal(true);
                }}
                className="flex items-center justify-center rounded-2xl py-3 bg-blue-100 text-blue-600 cursor-pointer"
              >
                <Eye size={18} />
              </button>

              <button
                onClick={() => {
                  setSelectedWorker(worker);
                  setEditModal(true);
                }}
                className="flex items-center justify-center rounded-2xl py-3 bg-green-100 text-green-600 cursor-pointer"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => {
                  setSelectedWorker(worker);
                  setDeleteModal(true);
                }}
                className="flex items-center justify-center rounded-2xl py-3 bg-red-100 text-red-600 cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-end gap-3 pr-[30px]">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-10 w-10 rounded-xl border font-semibold transition-all duration-200 ${
              currentPage === index + 1
                ? "scale-105 border-red-600 bg-red-500/30 text-red-700 shadow-md"
                : "border-red-500 bg-red-500/10 text-red-600 hover:scale-105 hover:bg-red-500/20"
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
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <ViewHelperModal
        isOpen={viewModal}
        onClose={() => setViewModal(false)}
        worker={selectedWorker}
      />
      <DeleteModal
        isOpen={deleteModal}
        onClose={() => {
          setDeleteModal(false);
          setSelectedWorker(null);
        }}
        onConfirm={handleDelete}
        title="Delete Helper"
        message={`Are you sure you want to delete ${
          selectedWorker?.helperProfile?.fullName || "this helper"
        }?`}
      />
      <UpdateHelperModal
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        worker={selectedWorker}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
