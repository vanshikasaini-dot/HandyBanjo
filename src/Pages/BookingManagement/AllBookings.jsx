import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Search,
  Eye,
  Phone,
  MapPin,
  CalendarDays,
  Clock3,
  ClipboardList,
  Loader2,
} from "lucide-react";

export default function AllBookings() {
  const [activeTab, setActiveTab] = useState("recent");

  const [search, setSearch] = useState("");

  // Booking Data
  const bookings = {
    recent: [
      {
        id: "#BK101",
        customer: "Rahul Sharma",
        service: "AC Repair",
        location: "Delhi",
        date: "28 May 2026",
        time: "10:00 AM",
        status: "Recent",
      },
      {
        id: "#BK102",
        customer: "Priya Verma",
        service: "Plumbing",
        location: "Noida",
        date: "27 May 2026",
        time: "01:30 PM",
        status: "Recent",
      },
      {
        id: "#BK103",
        customer: "Aman Singh",
        service: "Car Cleaning",
        location: "Dehradun",
        date: "26 May 2026",
        time: "03:00 PM",
        status: "Recent",
      },
      {
        id: "#BK104",
        customer: "Neha Kapoor",
        service: "Home Cleaning",
        location: "Lucknow",
        date: "25 May 2026",
        time: "11:00 AM",
        status: "Recent",
      },
      {
        id: "#BK105",
        customer: "Vikas Sharma",
        service: "Electrician",
        location: "Mumbai",
        date: "24 May 2026",
        time: "04:30 PM",
        status: "Recent",
      },
      {
        id: "#BK106",
        customer: "Pooja",
        service: "Painting",
        location: "Jaipur",
        date: "23 May 2026",
        time: "09:30 AM",
        status: "Recent",
      },
    ],

    pending: [
      {
        id: "#BK201",
        customer: "Amit Kumar",
        service: "Electrician",
        location: "Mumbai",
        date: "26 May 2026",
        time: "11:00 AM",
        status: "Pending",
      },
      {
        id: "#BK202",
        customer: "Riya",
        service: "AC Installation",
        location: "Delhi",
        date: "24 May 2026",
        time: "02:00 PM",
        status: "Pending",
      },
      {
        id: "#BK203",
        customer: "Karan",
        service: "Plumbing",
        location: "Noida",
        date: "22 May 2026",
        time: "01:00 PM",
        status: "Pending",
      },
      {
        id: "#BK204",
        customer: "Meena",
        service: "Cleaning",
        location: "Pune",
        date: "21 May 2026",
        time: "05:00 PM",
        status: "Pending",
      },
      {
        id: "#BK205",
        customer: "Aakash",
        service: "Painting",
        location: "Indore",
        date: "20 May 2026",
        time: "09:00 AM",
        status: "Pending",
      },
      {
        id: "#BK206",
        customer: "Rohit",
        service: "Carpenter",
        location: "Bhopal",
        date: "19 May 2026",
        time: "12:00 PM",
        status: "Pending",
      },
    ],

    ongoing: [
      {
        id: "#BK301",
        customer: "Sneha",
        service: "Cleaning",
        location: "Pune",
        date: "25 May 2026",
        time: "09:00 AM",
        status: "Ongoing",
      },
      {
        id: "#BK302",
        customer: "Tarun",
        service: "AC Service",
        location: "Delhi",
        date: "24 May 2026",
        time: "11:30 AM",
        status: "Ongoing",
      },
      {
        id: "#BK303",
        customer: "Shivani",
        service: "Plumbing",
        location: "Noida",
        date: "23 May 2026",
        time: "01:30 PM",
        status: "Ongoing",
      },
      {
        id: "#BK304",
        customer: "Rakesh",
        service: "Painting",
        location: "Jaipur",
        date: "22 May 2026",
        time: "03:30 PM",
        status: "Ongoing",
      },
      {
        id: "#BK305",
        customer: "Mohit",
        service: "Electrician",
        location: "Chandigarh",
        date: "21 May 2026",
        time: "08:00 AM",
        status: "Ongoing",
      },
      {
        id: "#BK306",
        customer: "Nikita",
        service: "Home Cleaning",
        location: "Lucknow",
        date: "20 May 2026",
        time: "06:00 PM",
        status: "Ongoing",
      },
    ],

    completed: [
      {
        id: "#BK401",
        customer: "Vikas",
        service: "Painting",
        location: "Jaipur",
        date: "22 May 2026",
        time: "04:00 PM",
        status: "Completed",
      },
      {
        id: "#BK402",
        customer: "Simran",
        service: "Car Cleaning",
        location: "Delhi",
        date: "21 May 2026",
        time: "09:00 AM",
        status: "Completed",
      },
      {
        id: "#BK403",
        customer: "Ajay",
        service: "Electrician",
        location: "Mumbai",
        date: "20 May 2026",
        time: "10:30 AM",
        status: "Completed",
      },
      {
        id: "#BK404",
        customer: "Pallavi",
        service: "Cleaning",
        location: "Noida",
        date: "19 May 2026",
        time: "01:00 PM",
        status: "Completed",
      },
      {
        id: "#BK405",
        customer: "Deepak",
        service: "AC Repair",
        location: "Pune",
        date: "18 May 2026",
        time: "03:00 PM",
        status: "Completed",
      },
      {
        id: "#BK406",
        customer: "Kajal",
        service: "Plumbing",
        location: "Indore",
        date: "17 May 2026",
        time: "05:30 PM",
        status: "Completed",
      },
    ],

    cancelled: [
      {
        id: "#BK501",
        customer: "Anjali",
        service: "Carpenter",
        location: "Chandigarh",
        date: "20 May 2026",
        time: "03:00 PM",
        status: "Cancelled",
      },
      {
        id: "#BK502",
        customer: "Rohan",
        service: "Painting",
        location: "Delhi",
        date: "19 May 2026",
        time: "11:00 AM",
        status: "Cancelled",
      },
      {
        id: "#BK503",
        customer: "Isha",
        service: "Cleaning",
        location: "Noida",
        date: "18 May 2026",
        time: "12:30 PM",
        status: "Cancelled",
      },
      {
        id: "#BK504",
        customer: "Kunal",
        service: "Electrician",
        location: "Pune",
        date: "17 May 2026",
        time: "09:00 AM",
        status: "Cancelled",
      },
      {
        id: "#BK505",
        customer: "Ritika",
        service: "AC Installation",
        location: "Lucknow",
        date: "16 May 2026",
        time: "04:00 PM",
        status: "Cancelled",
      },
      {
        id: "#BK506",
        customer: "Sahil",
        service: "Plumbing",
        location: "Jaipur",
        date: "15 May 2026",
        time: "02:00 PM",
        status: "Cancelled",
      },
    ],
  };

  const tabs = [
    {
      key: "recent",
      label: "Recent Bookings",
    },
    {
      key: "pending",
      label: "Pending Jobs",
    },
    {
      key: "ongoing",
      label: "Ongoing Jobs",
    },
    {
      key: "completed",
      label: "Completed Jobs",
    },
    {
      key: "cancelled",
      label: "Cancelled Jobs",
    },
  ];

  const filteredBookings = bookings[activeTab].filter(
    (booking) =>
      booking.customer.toLowerCase().includes(search.toLowerCase()) ||
      booking.service.toLowerCase().includes(search.toLowerCase()) ||
      booking.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Booking Management
          </h1>

          <p className="text-gray-500 mt-1">Manage all service bookings here</p>
        </div>

        {/* Search */}
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="relative w-full lg:w-[320px]"
        >
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search booking..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-red-400 shadow-sm"
          />
        </motion.div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Bookings</p>

              <h2 className="text-3xl font-bold mt-1">
                {bookings.recent.length +
                  bookings.pending.length +
                  bookings.ongoing.length +
                  bookings.completed.length +
                  bookings.cancelled.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <ClipboardList size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Jobs</p>

              <h2 className="text-3xl font-bold text-yellow-500 mt-1">
                {bookings.pending.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
              <Loader2 size={28} className="text-yellow-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Ongoing Jobs</p>

              <h2 className="text-3xl font-bold text-blue-500 mt-1">
                {bookings.ongoing.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <Clock3 size={28} className="text-blue-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Completed Jobs</p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {bookings.completed.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <Eye size={28} className="text-green-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6"
      >
        {tabs.map((tab) => (
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
            }}
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-3 rounded-xl whitespace-nowrap text-sm font-semibold transition-all duration-300
              ${
                activeTab === tab.key
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Booking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          {filteredBookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {booking.customer}
                  </h2>

                  <p className="text-sm text-gray-500">{booking.id}</p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold
                    ${
                      booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : booking.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : booking.status === "Ongoing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {booking.status}
                </span>
              </div>

              {/* Service */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-gray-100 rounded-xl p-4 mb-4"
              >
                <p className="text-sm text-gray-500 mb-1">Service</p>

                <h3 className="font-semibold text-gray-800">
                  {booking.service}
                </h3>
              </motion.div>

              {/* Details */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <MapPin size={15} />
                  </div>

                  <span>{booking.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <CalendarDays size={15} />
                  </div>

                  <span>{booking.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Clock3 size={15} />
                  </div>

                  <span>{booking.time}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Eye size={18} />
                  View
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
                >
                  <Phone size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredBookings.length === 0 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="bg-white rounded-2xl p-10 text-center shadow-sm mt-5"
        >
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Bookings Found
          </h2>

          <p className="text-gray-500">
            There are no bookings available in this section.
          </p>
        </motion.div>
      )}
    </div>
  );
}
