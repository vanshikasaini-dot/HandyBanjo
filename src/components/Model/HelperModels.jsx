import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  X,
  Upload,
  Camera,
  Mail,
  Phone,
  Briefcase,
  IndianRupee,
} from "lucide-react";

export function ViewHelperModal({ isOpen, onClose, worker }) {
  if (!isOpen) return null;

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
          className="cursor-pointer absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src={
              worker?.helperProfile?.profileImage ||
              "https://via.placeholder.com/150"
            }
            alt="profile"
            className="h-20 w-20 rounded-full border-2 border-gray-100 object-cover"
          />

          <h2 className="mt-2 text-xl font-bold text-gray-800">
            {worker?.helperProfile?.fullName || "N/A"}
          </h2>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2">
            <div>
              <p className="text-[11px] text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-800">
                {worker?.email || "N/A"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2">
            <div>
              <p className="text-[11px] text-gray-500">Phone</p>
              <p className="text-sm font-medium text-gray-800">
                {worker?.helperProfile?.phone || "N/A"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2">
            <div>
              <p className="text-[11px] text-gray-500">Experience</p>
              <p className="text-sm font-medium text-gray-800">
                {worker?.helperProfile?.experience || 0} Years
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2">
            <div>
              <p className="text-[11px] text-gray-500">Hourly Rate</p>
              <p className="text-sm font-medium text-gray-800">
                ₹{worker?.helperProfile?.hourlyRate || 0}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-[11px] text-gray-500">Role</p>
            <p className="text-sm font-medium text-gray-800">
              {worker?.role || "helper"}
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

export function UpdateHelperModal({ isOpen, onClose, worker, onUpdate }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (worker) {
      setFullName(worker?.helperProfile?.fullName || "");
      setPhone(worker?.helperProfile?.phone || "");
      setExperience(worker?.helperProfile?.experience || "");
      setHourlyRate(worker?.helperProfile?.hourlyRate || "");
      setPreview(worker?.helperProfile?.profileImage || "");
    }
  }, [worker]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("fullName", fullName);
    data.append("phone", phone);
    data.append("experience", experience);
    data.append("hourlyRate", hourlyRate);

    if (profileImage) {
      data.append("profileImage", profileImage); // check backend name
    }

    onUpdate(data);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Update Helper</h2>

          <button onClick={onClose} className="cursor-pointer">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Upload */}

          <div className="flex justify-center">
            <div className="relative">
              <img
                src={
                  profileImage
                    ? URL.createObjectURL(profileImage)
                    : preview || "/user.png"
                }
                alt="preview"
                className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover"
              />

              <label className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-400 text-white shadow-lg hover:bg-blue-600">
                <Camera size={16} />

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    setProfileImage(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          </div>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="number"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="number"
            placeholder="Hourly Rate"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white cursor-pointer"
          >
            Update Helper
          </button>
        </form>
      </motion.div>
    </div>
  );
}
