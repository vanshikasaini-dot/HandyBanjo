import { useState, useEffect } from "react";
import { X, Camera } from "lucide-react";

export function AddCategoryModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));

      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image); 
    }

    onSubmit(data);
  };

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      image: null,
    });

    setPreview(null);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-4 sm:p-6 shadow-xl max-h-[95vh]">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Add Category</h2>

          <button
            onClick={handleClose}
            className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={preview || "https://via.placeholder.com/150"}
                alt="Preview"
                className="h-28 w-28 rounded-full border-2 border-gray-200 object-cover"
              />

              <label className="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-400 text-white shadow-lg hover:bg-blue-600">
                <Camera size={18} />

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Category Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter category description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-xl border p-3 outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="cursor-pointer rounded-xl border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-red-500 px-5 py-2 text-white hover:bg-red-600"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function EditCategoryModal({ isOpen, onClose, category, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || "",
        description: category.description || "",
      });

      setPreview(category.image || "");
      setImage(null);
    }
  }, [category]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      setImage(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image);
    }

    onSubmit(data);
  };

  const handleClose = () => {
    setImage(null);
    setPreview("");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-4 sm:p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">Edit Category</h2>

          <button
            onClick={handleClose}
            className="rounded-full p-2 hover:bg-gray-100 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={preview || "https://via.placeholder.com/150"}
                alt="Preview"
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-2 border-gray-200 object-cover"
              />

              <label className="absolute bottom-0 right-0 flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600">
                <Camera size={16} />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Category Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-green-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-xl border p-3 outline-none focus:border-green-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="w-full sm:w-auto rounded-xl border px-5 py-2 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-green-500 px-5 py-2 text-white hover:bg-green-600 cursor-pointer"
            >
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
