import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllPro } from "../../Apis/pro";

export default function Pro() {
  const [pros, setPros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProviders, setTotalProviders] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchPros(currentPage);
  }, [currentPage]);

  const fetchPros = async (page = 1) => {
    try {
      setLoading(true);

      const response = await getAllPro(page, 10);

      console.log(response);

      setPros(response?.data || []);

      setTotalPages(response?.totalPages || 1);

      setTotalProviders(response?.totalProviders || 0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const currentPros = pros;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 p-4 sm:p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Service Providers
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all service providers
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search provider..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Card */}
      <div className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Providers</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                {totalProviders}
              </h2>
            </div>

            <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
              <Users size={28} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Table */}
      <div className="mt-6 hidden overflow-hidden rounded-3xl bg-white shadow-sm xl:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Profile",
                  "Full Name",
                  "Business Name",
                  "Category",
                  "Phone",
                ].map((item) => (
                  <th
                    key={item}
                    className="px-4 py-4 text-left text-sm font-semibold text-gray-600"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentPros.map((pro) => (
                <tr key={pro._id} className="border-t border-gray-100">
                  <td className="px-4 py-4">
                    <img
                      src={pro?.profilePic || "https://via.placeholder.com/60"}
                      alt=""
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="px-4 py-4 font-medium">
                    {pro?.firstName} {pro?.lastName}
                  </td>

                  <td className="px-4 py-4">{pro?.businessName || "N/A"}</td>

                  <td className="px-4 py-4">{pro?.category || "N/A"}</td>

                  <td className="px-4 py-4">{pro?.phoneNumber || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 xl:hidden">
        {currentPros.map((pro) => (
          <div key={pro._id} className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="flex gap-4">
              <img
                src={pro?.profilePic || "https://via.placeholder.com/150"}
                alt=""
                className="h-16 w-16 rounded-2xl object-cover"
              />

              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {pro?.firstName} {pro?.lastName}
                </h2>

                <p className="text-sm text-gray-500">{pro?.category}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Business Name</p>
                <h3 className="mt-1 text-sm font-medium">
                  {pro?.businessName}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Phone</p>
                <h3 className="mt-1 text-sm font-medium">{pro?.phoneNumber}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-10 w-10 rounded-xl ${
              currentPage === index + 1
                ? "bg-red-500 text-white"
                : "bg-red-100 text-red-600"
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
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
