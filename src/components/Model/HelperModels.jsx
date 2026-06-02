import { motion } from "framer-motion";
import { useEffect, useState } from "react"

export function ViewHelperModal({ isOpen, onClose, worker }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Helper Details
        </h2>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">First Name:</span>{" "}
            {worker?.helperProfile?.firstName || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Last Name:</span>{" "}
            {worker?.helperProfile?.lastName || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            {worker?.email || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {worker?.helperProfile?.phoneNumber || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Role:</span> {worker?.role || "N/A"}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-red-500 py-3 font-semibold text-white cursor-pointer"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}

export function DeleteHelperModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-black-600">Delete Helper</h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to delete this helper?
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border py-3 font-semibold cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function UpdateHelperModal({
  isOpen,
  onClose,
  worker,
  onUpdate,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (worker) {
      setFirstName(worker?.helperProfile?.firstName || "");
      setLastName(worker?.helperProfile?.lastName || "");
      setPhoneNumber(worker?.helperProfile?.phoneNumber || "");
    }
  }, [worker]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      helperProfile: {
        firstName,
        lastName,
        phoneNumber,
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Update Helper
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              First Name
            </label>

            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Last Name
            </label>

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border py-3 font-semibold cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-green-500 py-3 font-semibold text-white cursor-pointer"
            >
              Update
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export const updateHelperById = async (id, data) => {
  const response = await axiosInstance.put(
    `/helper/updateById/${id}`,
    data
  );

  return response.data;
};