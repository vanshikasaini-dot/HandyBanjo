import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function EnterpriseViewModal({ isOpen, onClose, enterprise }) {
  if (!isOpen || !enterprise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-4 shadow-xl sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-bold sm:text-2xl">Enterprise Details</h2>

          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img
              src={
                enterprise.enterpriseProfile?.profilePic ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="h-28 w-28 rounded-full border object-cover"
            />

            <h3 className="mt-4 text-center text-xl font-bold text-gray-800">
              {enterprise.enterpriseProfile?.firstName || "N/A"}{" "}
              {enterprise.enterpriseProfile?.lastName || ""}
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Phone Number</p>
            <h4 className="mt-1 font-semibold text-gray-800">
              {enterprise.enterpriseProfile?.phoneNumber || "N/A"}
            </h4>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Email</p>
            <h4 className="mt-1 break-all font-semibold text-gray-800">
              {enterprise.email}
            </h4>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Role</p>
            <h4 className="mt-1 font-semibold text-gray-800">
              {enterprise.role || "N/A"}
            </h4>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Status</p>
            <h4 className="mt-1 font-semibold text-green-600">Active</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeleteEnterpriseModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-bold text-gray-800">Delete Enterprise</h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to delete this enterprise?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border px-4 py-2 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-4 py-2 text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export function UpdateEnterpriseModal({
  isOpen,
  onClose,
  enterprise,
  onUpdate,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (enterprise) {
      setFirstName(enterprise.enterpriseProfile?.firstName || "");
      setLastName(enterprise.enterpriseProfile?.lastName || "");
    }
  }, [enterprise]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-4 sm:p-6 shadow-xl">
        <h2 className="mb-4 text-lg sm:text-xl font-bold">
          Update Enterprise
        </h2>

        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="mb-3 w-full rounded-xl border p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="mb-4 w-full rounded-xl border p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl border px-4 py-2 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() =>
              onUpdate({
                firstName,
                lastName,
              })
            }
            className="w-full sm:w-auto rounded-xl bg-green-500 px-4 py-2 text-white cursor-pointer hover:bg-green-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
