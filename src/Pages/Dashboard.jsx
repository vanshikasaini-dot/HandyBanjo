import {
  Users,
  Wrench,
  IndianRupee,
  ClipboardList,
  Star,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  // Statistics Data
  const stats = [
    {
      title: "Total Bookings",
      value: "1,245",
      icon: <ClipboardList size={28} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Active Technicians",
      value: "85",
      icon: <Users size={28} />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Revenue",
      value: "₹1,25,000",
      icon: <IndianRupee size={28} />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Pending Requests",
      value: "32",
      icon: <Clock size={28} />,
      color: "from-red-500 to-pink-600",
    },
  ];

  // Recent Bookings
  const bookings = [
    {
      customer: "Rahul Sharma",
      service: "AC Repair",
      technician: "Aman",
      status: "Completed",
    },
    {
      customer: "Priya Verma",
      service: "Plumbing",
      technician: "Ravi",
      status: "Pending",
    },
    {
      customer: "Ankit",
      service: "Washing Machine",
      technician: "Mohit",
      status: "Ongoing",
    },
    {
      customer: "Sneha",
      service: "Electrician",
      technician: "Karan",
      status: "Completed",
    },
  ];

  // Popular Services
  const services = [
    {
      name: "AC Repair",
      percent: "80%",
      width: "w-[80%]",
    },
    {
      name: "Plumbing",
      percent: "70%",
      width: "w-[70%]",
    },
    {
      name: "Electrician",
      percent: "65%",
      width: "w-[65%]",
    },
    {
      name: "Machine Repair",
      percent: "55%",
      width: "w-[55%]",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500 mt-1">Welcome back Admin 👋</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${item.color} text-white rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
              </div>

              <div className="bg-white/20 p-3 rounded-xl">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Recent Bookings */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">Recent Bookings</h2>

            <button className="text-sm text-indigo-600 font-medium">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Service</th>
                  <th className="pb-3">Technician</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4">{booking.customer}</td>

                    <td>{booking.service}</td>

                    <td>{booking.technician}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : booking.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technician Activity */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">Technician Status</h2>

          <div className="space-y-4">
            {[
              {
                name: "Aman",
                status: "On Job",
                color: "bg-green-500",
              },
              {
                name: "Ravi",
                status: "Available",
                color: "bg-blue-500",
              },
              {
                name: "Mohit",
                status: "Offline",
                color: "bg-red-500",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>

                  <div>
                    <h3 className="font-medium">{tech.name}</h3>

                    <p className="text-sm text-gray-500">Technician</p>
                  </div>
                </div>

                <span
                  className={`text-white text-xs px-3 py-1 rounded-full ${tech.color}`}
                >
                  {tech.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Popular Services */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-2 mb-5">
            <Wrench className="text-indigo-600" />

            <h2 className="text-xl font-semibold">Popular Services</h2>
          </div>

          <div className="space-y-5">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{service.name}</span>

                  <span>{service.percent}</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className={`h-3 rounded-full bg-indigo-600 ${service.width}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-2 mb-5">
            <Star className="text-yellow-500 fill-yellow-500" />

            <h2 className="text-xl font-semibold">Customer Reviews</h2>
          </div>

          <div className="space-y-4">
            {[
              "Excellent AC repair service 👌",
              "Very fast plumbing support 🚿",
              "Affordable pricing and good staff ⭐",
            ].map((review, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl border">
                <p className="text-gray-700">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
