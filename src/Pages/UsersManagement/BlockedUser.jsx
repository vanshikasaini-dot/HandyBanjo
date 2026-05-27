import { useState } from "react";
import {
  Search,
  ShieldX,
  Users,
  UserX,
  Ban,
  Eye,
  Trash2,
  RotateCcw,
  Phone,
  Mail,
  CalendarDays,
  MoreVertical,
} from "lucide-react";

export default function BlockedUsers() {
  const [search, setSearch] = useState("");

  const blockedUsers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      role: "Customer",
      reason: "Spam Activity",
      blockedDate: "25 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "9876543211",
      role: "Service Provider",
      reason: "Fake Reviews",
      blockedDate: "24 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Vikas Singh",
      email: "vikas@gmail.com",
      phone: "9876543212",
      role: "Helper Worker",
      reason: "Bad Behaviour",
      blockedDate: "23 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 4,
      name: "Rohit Verma",
      email: "rohit@gmail.com",
      phone: "9876543213",
      role: "Enterprise",
      reason: "Payment Issue",
      blockedDate: "22 May 2026",
      status: "Blocked",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  const filteredUsers = blockedUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 p-4 sm:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Blocked Users</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">240</h2>
            </div>

            <div className="rounded-2xl bg-red-100 p-4 text-red-600">
              <ShieldX size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Blocked Customers</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">120</h2>
            </div>

            <div className="rounded-2xl bg-orange-100 p-4 text-orange-600">
              <Users size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Blocked Providers</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">65</h2>
            </div>

            <div className="rounded-2xl bg-yellow-100 p-4 text-yellow-600">
              <Ban size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Blocked Workers</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">55</h2>
            </div>

            <div className="rounded-2xl bg-purple-100 p-4 text-purple-600">
              <UserX size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Blocked Users</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all blocked users easily
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all focus:border-red-500"
            />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="mt-6 hidden overflow-hidden rounded-3xl bg-white shadow-sm xl:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  User
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Contact
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Role
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Reason
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Blocked Date
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-5 py-4 text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-14 w-14 rounded-2xl object-cover"
                      />

                      <div className="min-w-0">
                        <h2 className="truncate font-semibold text-gray-800">
                          {user.name}
                        </h2>

                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={15} />
                        {user.phone}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={15} />
                        {user.email}
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-700">
                    {user.reason}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDays size={15} />
                      {user.blockedDate}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="rounded-xl bg-blue-100 p-2 text-blue-600 transition hover:scale-105">
                        <Eye size={18} />
                      </button>

                      <button className="rounded-xl bg-green-100 p-2 text-green-600 transition hover:scale-105">
                        <RotateCcw size={18} />
                      </button>

                      <button className="rounded-xl bg-red-100 p-2 text-red-600 transition hover:scale-105">
                        <Trash2 size={18} />
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
      <div className="mt-6 grid grid-cols-1 gap-5 xl:hidden">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div className="min-w-0">
                  <h2 className="truncate text-lg font-bold text-gray-800">
                    {user.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">{user.role}</p>

                  <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                    {user.status}
                  </span>
                </div>
              </div>

              <button className="shrink-0 rounded-xl bg-gray-100 p-2 text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Phone</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {user.phone}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Reason</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {user.reason}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Email</p>

                <h3 className="mt-1 break-all text-sm font-medium text-gray-800">
                  {user.email}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Blocked Date</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {user.blockedDate}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {user.blockedDate}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded-xl bg-blue-100 p-2 text-blue-600 transition hover:scale-105">
                  <Eye size={18} />
                </button>

                <button className="rounded-xl bg-green-100 p-2 text-green-600 transition hover:scale-105">
                  <RotateCcw size={18} />
                </button>

                <button className="rounded-xl bg-red-100 p-2 text-red-600 transition hover:scale-105">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
