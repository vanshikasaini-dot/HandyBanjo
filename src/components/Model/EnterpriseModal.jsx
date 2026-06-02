import { X, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function EnterpriseViewModal({ isOpen, onClose, enterprise }) {
  if (!isOpen || !enterprise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md rounded-2xl bg-white p-4 shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src={
              enterprise?.enterpriseProfile?.profilePic ||
              "https://via.placeholder.com/150"
            }
            alt="profile"
            className="h-20 w-20 rounded-full border-2 border-gray-100 object-cover"
          />

          <h2 className="mt-2 text-center text-xl font-bold text-gray-800">
            {enterprise?.enterpriseProfile?.firstName || "N/A"}{" "}
            {enterprise?.enterpriseProfile?.lastName || ""}
          </h2>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-2">
          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">Email</p>
            <p className="break-all text-sm font-medium text-gray-800">
              {enterprise?.email || "N/A"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">Phone Number</p>
            <p className="text-sm font-medium text-gray-800">
              {enterprise?.enterpriseProfile?.phoneNumber || "N/A"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">First Name</p>
            <p className="text-sm font-medium text-gray-800">
              {enterprise?.enterpriseProfile?.firstName || "N/A"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">Last Name</p>
            <p className="text-sm font-medium text-gray-800">
              {enterprise?.enterpriseProfile?.lastName || "N/A"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">Role</p>
            <p className="text-sm font-medium text-gray-800">
              {enterprise?.role || "N/A"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">Status</p>
            <p className="text-sm font-medium text-green-600">
              {enterprise?.enterpriseProfile ? "Active" : "Pending"}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full cursor-pointer rounded-2xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          Close
        </button>
      </motion.div>
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (enterprise) {
      setFirstName(enterprise.enterpriseProfile?.firstName || "");
      setLastName(enterprise.enterpriseProfile?.lastName || "");
      setPhoneNumber(enterprise.enterpriseProfile?.phoneNumber || "");
      setEmail(enterprise.email || "");
      setPreview(enterprise.enterpriseProfile?.profilePic || "");
    }
  }, [enterprise]);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);

    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Update Enterprise
        </h2>

        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <img
              src={preview || "https://via.placeholder.com/120"}
              alt="Profile"
              className="h-28 w-28 rounded-full border-4 border-gray-200 object-cover"
            />

            <label className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-blue-400 p-2 text-white shadow-lg">
              <Camera size={18} />

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="grid gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-green-500 px-5 py-2 text-white hover:bg-green-600 cursor-pointer"
          >
            Update Enterprise
          </button>
        </div>
      </div>
    </div>
  );
}
