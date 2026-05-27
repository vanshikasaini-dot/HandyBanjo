import { useState } from "react";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserCheck,
  UserX,
} from "lucide-react";

export default function Customers() {
  const [search, setSearch] = useState("");

  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      city: "Delhi",
      bookings: 5,
      status: "Active",
      joinDate: "12 May 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },

    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "9876543211",
      city: "Mumbai",
      bookings: 2,
      status: "Blocked",
      joinDate: "20 Apr 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    {
      id: 3,
      name: "Aman Singh",
      email: "aman@gmail.com",
      phone: "9876543212",
      city: "Noida",
      bookings: 8,
      status: "Pending",
      joinDate: "01 Mar 2026",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Blocked":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const cards = [
    {
      title: "Total Customers",
      value: "120",
      icon: <Users className="text-blue-600" size={26} />,
      bg: "bg-blue-100",
    },

    {
      title: "Active Customers",
      value: "95",
      icon: <UserCheck className="text-green-600" size={26} />,
      bg: "bg-green-100",
    },

    {
      title: "Blocked Customers",
      value: "25",
      icon: <UserX className="text-red-600" size={26} />,
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-6 p-4 lg:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>
              </div>

              <div className={`rounded-xl p-4 ${card.bg}`}>{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Customers</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all Customers and their details from here
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl bg-white shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Customer",
                  "Email",
                  "Phone",
                  "City",
                  "Bookings",
                  "Status",
                  "Join Date",
                  "Actions",
                ].map((heading, index) => (
                  <th
                    key={index}
                    className="px-5 py-4 text-left text-sm font-semibold text-gray-600"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((item) => (
                <tr
                  key={item.id}
                  className="border-b transition hover:bg-gray-50"
                >
                  {/* Customer */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-11 w-11 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.email}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.phone}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.city}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.bookings}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.joinDate}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-blue-100 p-2 transition hover:bg-blue-200">
                        <Eye size={16} className="text-blue-600" />
                      </button>

                      <button className="rounded-lg bg-green-100 p-2 transition hover:bg-green-200">
                        <Pencil size={16} className="text-green-600" />
                      </button>

                      <button className="rounded-lg bg-red-100 p-2 transition hover:bg-red-200">
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {filteredCustomers.map((item) => (
          <div key={item.id} className="rounded-2xl bg-white p-4 shadow-sm">
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.email}</p>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                  item.status,
                )}`}
              >
                {item.status}
              </span>
            </div>

            {/* Details */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Phone</p>
                <h4 className="font-medium text-gray-800">{item.phone}</h4>
              </div>

              <div>
                <p className="text-gray-500">City</p>
                <h4 className="font-medium text-gray-800">{item.city}</h4>
              </div>

              <div>
                <p className="text-gray-500">Bookings</p>
                <h4 className="font-medium text-gray-800">{item.bookings}</h4>
              </div>

              <div>
                <p className="text-gray-500">Join Date</p>
                <h4 className="font-medium text-gray-800">{item.joinDate}</h4>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-2">
              <button className="flex-1 rounded-xl bg-blue-100 py-2 transition hover:bg-blue-200">
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Eye size={16} />
                </div>
              </button>

              <button className="flex-1 rounded-xl bg-green-100 py-2 transition hover:bg-green-200">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Pencil size={16} />
                </div>
              </button>

              <button className="flex-1 rounded-xl bg-red-100 py-2 transition hover:bg-red-200">
                <div className="flex items-center justify-center gap-2 text-red-600">
                  <Trash2 size={16} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
