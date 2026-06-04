import { useEffect, useState } from "react";
import {
  Users,
  Wrench,
  IndianRupee,
  ClipboardList,
  Clock,
  UserCheck,
  Building2,
  Star,
} from "lucide-react";

import { getAllDashboard } from "../Apis/dashboard";

function useCount(end = 0, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!end) return;

    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return count;
}

function AnimatedValue({ end }) {
  const count = useCount(end);
  return <span>{count.toLocaleString()}</span>;
}

export default function Dashboard() {
  const [users, setUsers] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await getAllDashboard();
        console.log("Dashboard API:", res);
        setUsers(res?.users || res?.data?.users || {});

        setBookings(res?.bookings || []);
        setServices(res?.services || []);
        setReviews(res?.reviews || []);
      } catch (err) {
        console.log("Dashboard API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: users?.totalUsers || 0,
      icon: <Users size={28} />,
    },
    {
      title: "Total Helpers",
      value: users?.totalHelpers || 0,
      icon: <Wrench size={28} />,
    },
    {
      title: "Total Customers",
      value: users?.totalCustomers || 0,
      icon: <UserCheck size={28} />,
    },
    {
      title: "Total Pros",
      value: users?.totalPros || 0,
      icon: <Clock size={28} />,
    },
    {
      title: "Total Enterprises",
      value: users?.totalEnterprises || 0,
      icon: <Building2 size={28} />,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          {loading ? "Loading data..." : "Welcome back Admin"}
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-red-400 text-white rounded-2xl p-5 shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-white/80">{item.title}</p>
                <h2 className="text-3xl font-bold mt-2">
                  <AnimatedValue end={item.value} />
                </h2>
              </div>

              <div className="bg-white/20 p-3 rounded-xl">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* BOOKINGS */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">Recent Bookings</h2>

          {bookings.length === 0 ? (
            <p className="text-gray-500">No bookings found</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Service</th>
                  <th className="pb-3">Technician</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-4">{b.customer}</td>
                    <td>{b.service}</td>
                    <td>{b.technician}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          b.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : b.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* TECHNICIAN STATUS */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">Technician Status</h2>

          {[
            { name: "Aman", status: "On Job", color: "green" },
            { name: "Ravi", status: "Available", color: "blue" },
            { name: "Mohit", status: "Offline", color: "red" },
          ].map((t, i) => (
            <div key={i} className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-medium">{t.name}</h3>
                  <p className="text-sm text-gray-500">Technician</p>
                </div>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  t.color === "green"
                    ? "bg-green-100 text-green-700"
                    : t.color === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* SERVICES */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">Popular Services</h2>

          {services.length === 0 ? (
            <p className="text-gray-500">No services found</p>
          ) : (
            services.map((s, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between mb-2">
                  <span>{s.name}</span>
                  <span>{s.percent}</span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-indigo-600 rounded-full"
                    style={{ width: s.percent }}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* REVIEWS */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">Customer Reviews</h2>

          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews found</p>
          ) : (
            reviews.map((r, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl border mb-3">
                <p>{r.message || r}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
