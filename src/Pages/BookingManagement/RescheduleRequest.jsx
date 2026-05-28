import { useState } from "react";
import {
  Search,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function RescheduleRequests() {
  const [search, setSearch] = useState("");

  // Dummy Data
  const requests = [
    {
      id: "#RS101",
      customer: "Rahul Sharma",
      service: "AC Repair",
      oldDate: "28 May 2026",
      newDate: "30 May 2026",
      oldTime: "10:00 AM",
      newTime: "01:00 PM",
      location: "Delhi",
      phone: "+91 9876543210",
      reason: "Customer not available on selected date",
      status: "Pending",
    },

    {
      id: "#RS102",
      customer: "Priya Verma",
      service: "Plumbing",
      oldDate: "27 May 2026",
      newDate: "29 May 2026",
      oldTime: "11:00 AM",
      newTime: "03:00 PM",
      location: "Noida",
      phone: "+91 9876501234",
      reason: "Emergency meeting issue",
      status: "Pending",
    },

    {
      id: "#RS103",
      customer: "Amit Kumar",
      service: "Electrician",
      oldDate: "25 May 2026",
      newDate: "31 May 2026",
      oldTime: "09:00 AM",
      newTime: "12:00 PM",
      location: "Mumbai",
      phone: "+91 9988776655",
      reason: "Technician unavailable",
      status: "Approved",
    },

    {
      id: "#RS104",
      customer: "Sneha",
      service: "Home Cleaning",
      oldDate: "24 May 2026",
      newDate: "26 May 2026",
      oldTime: "02:00 PM",
      newTime: "05:00 PM",
      location: "Pune",
      phone: "+91 9090909090",
      reason: "Weather issue",
      status: "Rejected",
    },

    {
      id: "#RS105",
      customer: "Vikas",
      service: "Painting",
      oldDate: "22 May 2026",
      newDate: "27 May 2026",
      oldTime: "04:00 PM",
      newTime: "06:00 PM",
      location: "Jaipur",
      phone: "+91 9123456780",
      reason: "Customer requested evening slot",
      status: "Pending",
    },

    {
      id: "#RS106",
      customer: "Pooja",
      service: "Carpenter",
      oldDate: "20 May 2026",
      newDate: "23 May 2026",
      oldTime: "08:00 AM",
      newTime: "11:00 AM",
      location: "Lucknow",
      phone: "+91 9988001122",
      reason: "Family function",
      status: "Approved",
    },
  ];

  const filteredRequests = requests.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Reschedule Requests
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all reschedule booking requests
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[320px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-red-400"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredRequests.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {item.customer}
                </h2>
                <p className="text-sm text-gray-500">{item.id}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                ${
                  item.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : item.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Service */}
            <div className="bg-gray-100 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-500 mb-1">Service</p>
              <h3 className="font-semibold text-gray-800">{item.service}</h3>
            </div>

            {/* Dates */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>
                  Old Date:{" "}
                  <span className="font-semibold">{item.oldDate}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>
                  New Date:{" "}
                  <span className="font-semibold text-green-600">
                    {item.newDate}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                <span>
                  {item.oldTime} → {item.newTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{item.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{item.phone}</span>
              </div>
            </div>

            {/* Reason */}
            <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-red-500">Reason:</span>{" "}
                {item.reason}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all">
                <CheckCircle size={18} />
                Approve
              </button>

              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all">
                <XCircle size={18} />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm mt-6">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Requests Found
          </h2>

          <p className="text-gray-500">No reschedule requests available.</p>
        </div>
      )}
    </div>
  );
}
