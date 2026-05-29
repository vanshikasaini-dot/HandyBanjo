import { useState } from "react";

import { motion } from "framer-motion";

import {
  Settings,
  Bell,
  ShieldCheck,
  CreditCard,
  Phone,
  Building2,
  Upload,
  Save,
} from "lucide-react";

export default function AppSettings() {
  const [notifications, setNotifications] = useState(true);

  const [autoBooking, setAutoBooking] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          App Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your application settings
        </p>
      </motion.div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* General Settings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Settings className="text-red-500" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                General Settings
              </h2>

              <p className="text-gray-500 text-sm">
                Update app information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 font-medium">
                App Name
              </label>

              <input
                type="text"
                defaultValue="HandyBanjo"
                className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">
                Company Name
              </label>

              <input
                type="text"
                defaultValue="HandyBanjo Services"
                className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">
                Upload Logo
              </label>

              <button className="w-full mt-2 border border-dashed border-gray-300 rounded-xl py-4 flex items-center justify-center gap-2 text-gray-500 hover:bg-gray-50 transition-all">
                <Upload size={18} />
                Upload Logo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Bell className="text-blue-500" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Notifications
              </h2>

              <p className="text-gray-500 text-sm">
                Manage alert preferences
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Booking Notification */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-700">
                  Booking Notifications
                </h3>

                <p className="text-sm text-gray-500">
                  Receive booking alerts
                </p>
              </div>

              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1
                  ${
                    notifications
                      ? "bg-green-500 justify-end"
                      : "bg-gray-300 justify-start"
                  }`}
              >
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </button>
            </div>

            {/* Payment Notification */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-700">
                  Payment Notifications
                </h3>

                <p className="text-sm text-gray-500">
                  Receive payment updates
                </p>
              </div>

              <button className="w-14 h-7 rounded-full bg-green-500 flex justify-end px-1">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <ShieldCheck className="text-green-500" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Security Settings
              </h2>

              <p className="text-gray-500 text-sm">
                Update security preferences
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition-all">
              Change Password
            </button>
          </div>
        </motion.div>

        {/* Booking Settings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Building2 className="text-yellow-500" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Booking Settings
              </h2>

              <p className="text-gray-500 text-sm">
                Manage booking preferences
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Auto Booking */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-700">
                  Auto Accept Booking
                </h3>

                <p className="text-sm text-gray-500">
                  Automatically accept bookings
                </p>
              </div>

              <button
                onClick={() => setAutoBooking(!autoBooking)}
                className={`w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1
                  ${
                    autoBooking
                      ? "bg-green-500 justify-end"
                      : "bg-gray-300 justify-start"
                  }`}
              >
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Payment Settings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <CreditCard className="text-purple-500" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Payment Settings
              </h2>

              <p className="text-gray-500 text-sm">
                Update payment information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="UPI ID"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <input
              type="text"
              placeholder="Razorpay Key"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition-all">
              Save Payment Settings
            </button>
          </div>
        </motion.div>

        {/* Contact Settings */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
              <Phone className="text-cyan-500" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Contact Settings
              </h2>

              <p className="text-gray-500 text-sm">
                Update contact details
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Support Email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <input
              type="text"
              placeholder="Company Address"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-red-400"
            />

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2">
              <Save size={18} />
              Save Contact Details
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}