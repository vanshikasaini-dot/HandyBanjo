import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllPro, getAllProFilter } from "../../Apis/pro";
import { getAllCategories } from "../../Apis/Category";
import {
  Search,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function Pro() {
  const [pros, setPros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProviders, setTotalProviders] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState(["All"]);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchPros(currentPage, filter, search);
  }, [currentPage, filter, search]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await getAllCategories();
        const categoryList = response?.data?.data || response?.data || [];

        if (Array.isArray(categoryList)) {
          const names = categoryList.map((item) => item.name);
          setFilters(["All", ...names]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryData();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setShowFilter(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const fetchPros = async (page = 1, category = "", searchText = "") => {
    try {
      setLoading(true);
      const categoryParam = category === "All" ? "" : category;

      let response;
      if (categoryParam || searchText) {
        response = await getAllProFilter(
          page,
          itemsPerPage,
          categoryParam,
          searchText,
        );
      } else {
        response = await getAllPro(page, itemsPerPage);
      }

      setPros(response?.data || []);
      setTotalPages(response?.totalPages || 1);
      setTotalProviders(response?.totalProviders || 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Pro</h1>
            <p className="text-sm text-gray-500">Manage all pro</p>
          </div>

          <div className="flex w-full gap-3 lg:w-[500px]">
            <div className="relative w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search provider..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-12 w-full rounded-2xl border bg-gray-50 pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFilter(!showFilter);
                }}
                className="flex h-12 min-w-[220px] items-center justify-between rounded-2xl border border-red-200 bg-white px-4 font-medium text-gray-700 shadow-sm transition-all hover:border-red-400 hover:bg-red-50"
              >
                <span className="truncate">
                  {filter === "All" ? "All Categories" : filter}
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showFilter ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showFilter && (
                <div className="absolute right-0 top-14 z-50 max-h-72 w-64 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
                  {filters.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setFilter(item);
                        setCurrentPage(1);
                        setShowFilter(false);
                      }}
                      className={`mb-1 flex w-full items-center rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ${
                        filter === item
                          ? "bg-red-500 font-semibold text-white shadow-md"
                          : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                      }`}
                    >
                      {item === "All" ? "All Categories" : item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
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
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Profile</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Business</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {pros.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-400">
                    No providers found.
                  </td>
                </tr>
              ) : (
                pros.map((pro) => (
                  <tr key={pro._id} className="border-t">
                    <td className="p-4">
                      <img
                        src={
                          pro?.profilePic || "https://via.placeholder.com/50"
                        }
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-4">
                      {pro?.firstName} {pro?.lastName}
                    </td>
                    <td className="p-4">{pro?.businessName || "N/A"}</td>
                    <td className="p-4">
                      <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {pro?.category?.name || "N/A"}
                      </span>
                    </td>
                    <td className="p-4">{pro?.phoneNumber || "N/A"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3 pr-[30px] pb-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600 transition-all hover:bg-red-500/20 disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-10 w-10 rounded-xl border font-semibold transition-all ${
              currentPage === index + 1
                ? "border-red-600 bg-red-500/30 text-red-700 shadow-md scale-105"
                : "border-red-500 bg-red-500/10 text-red-600 hover:bg-red-500/20"
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
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500 bg-red-500/10 text-red-600 transition-all hover:bg-red-500/20 disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
