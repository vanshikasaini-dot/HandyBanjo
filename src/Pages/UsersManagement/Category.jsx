import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../Apis/Category";
import {
  AddCategoryModal,
  EditCategoryModal,
} from "../../components/Model/CategoryModel";
import { DeleteModal } from "../../components/Model/DeleteModal";
import {
  Eye,
  Pencil,
  Trash2,
  Search,
  FolderTree,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
export default function Category() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, [currentPage]);
  const fetchCategories = async () => {
    try {
      const response = await getAllCategories(currentPage, 5);

      setCategories(response.data.data);

      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.filter(
    (item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()),
  );
  const handleDelete = async () => {
    try {
      await deleteCategory(selectedCategoryId);
      setCategories((prev) =>
        prev.filter((item) => item._id !== selectedCategoryId),
      );

      setIsDeleteModalOpen(false);
      setSelectedCategoryId(null);
    } catch (error) {
      console.log(error);
    }
  };
  const openEditModal = (category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };
  const handleAddCategory = async (formData) => {
    try {
      const response = await createCategory(formData);
      setCategories((prev) => [response.data, ...prev]);

      setIsModalOpen(false);

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateCategory = async (id, formData) => {
    try {
      await updateCategory(id, formData);

      fetchCategories();

      setIsEditModalOpen(false);
      setSelectedCategory(null);
    } catch (error) {
      console.log(error);

      alert("Failed To Update Category");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }
  return (
    <>
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Category Management
            </h1>

            <p className="text-gray-500 mt-1">Manage all categories here.</p>
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl font-semibold cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Category
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-gray-500 text-sm">Total Categories</h2>
                <h1 className="text-3xl font-bold mt-2">{categories.length}</h1>
              </div>

              <div className="bg-blue-100 p-3 rounded-2xl">
                <FolderTree className="text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-gray-500 text-sm">Services</h2>
                <h1 className="text-3xl font-bold mt-2">{categories.length}</h1>
              </div>

              <div className="bg-purple-100 p-3 rounded-2xl">
                <FolderTree className="text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="bg-white rounded-3xl shadow-sm p-4 mb-6">
          {/* SEARCH */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-2xl w-full lg:w-[350px]">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full outline-none"
            />
          </div>
        </motion.div>

        <div className="hidden lg:block bg-white rounded-3xl shadow-sm overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left">Image</th>
                <th className="px-6 py-4 text-left">Category Name</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>

                  <td className="px-6 py-4">{item.description}</td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openEditModal(item)}
                        className="bg-green-100 p-2 rounded-xl cursor-pointer"
                      >
                        <Pencil size={18} className="text-green-600" />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCategoryId(item._id);
                          setIsDeleteModalOpen(true);
                        }}
                        className="bg-red-100 p-2 rounded-xl cursor-pointer"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile view */}
        <div className="grid grid-cols-1 gap-4 lg:hidden mt-4">
          {categories.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-sm p-4">
              <div className="flex items-center gap-3 mb-3">
                <img src={item.image} alt="" className="w-14 h-14 rounded-xl" />

                <div>
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => openEditModal(item)}
                  className="bg-green-100 p-2 rounded-xl"
                >
                  <Pencil size={18} className="text-green-600" />
                </button>

                <button
                  onClick={() => {
                    setSelectedCategoryId(item._id);
                    setIsDeleteModalOpen(true);
                  }}
                  className="bg-red-100 p-2 rounded-xl"
                >
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </div>
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
              className={`h-10 w-10 rounded-xl border font-semibold transition-all duration-200 cursor-pointer ${
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
        <AddCategoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCategory}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setSelectedCategoryId(null);
          }}
          onConfirm={handleDelete}
          title="Delete Category"
          message="Are you sure you want to delete this category?"
        />
        <EditCategoryModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedCategory(null);
          }}
          category={selectedCategory}
          onSubmit={handleUpdateCategory}
        />
      </div>
    </>
  );
}
