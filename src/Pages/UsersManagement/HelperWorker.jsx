import { useState } from "react";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  UserCheck,
  UserX,
  Users,
  Briefcase,
  Star,
  Phone,
  Mail,
  MapPin,
  MoreVertical,
} from "lucide-react";

export default function HelperWorkers() {
  const [search, setSearch] = useState("");

  const workers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com",
      city: "Delhi",
      skill: "Electrician",
      status: "Active",
      rating: 4.8,
      jobs: 120,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Amit Kumar",
      phone: "9876543211",
      email: "amit@gmail.com",
      city: "Noida",
      skill: "Plumber",
      status: "Busy",
      rating: 4.5,
      jobs: 98,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Vikas Singh",
      phone: "9876543212",
      email: "vikas@gmail.com",
      city: "Jaipur",
      skill: "Cleaner",
      status: "Inactive",
      rating: 4.2,
      jobs: 75,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 4,
      name: "Rohit Verma",
      phone: "9876543213",
      email: "rohit@gmail.com",
      city: "Mumbai",
      skill: "Painter",
      status: "Active",
      rating: 4.9,
      jobs: 140,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 p-4 sm:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Workers</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">240</h2>
            </div>

            <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
              <Users size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Workers</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">180</h2>
            </div>

            <div className="rounded-2xl bg-green-100 p-4 text-green-600">
              <UserCheck size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Inactive Workers</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">32</h2>
            </div>

            <div className="rounded-2xl bg-red-100 p-4 text-red-600">
              <UserX size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Jobs</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">430</h2>
            </div>

            <div className="rounded-2xl bg-purple-100 p-4 text-purple-600">
              <Briefcase size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Helper Workers</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all helper workers easily
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search worker..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition-all focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="mt-6 hidden w-full overflow-hidden rounded-3xl bg-white shadow-sm xl:block">
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Worker
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Contact
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  City
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Skill
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Jobs
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Rating
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredWorkers.map((worker) => (
                <tr
                  key={worker.id}
                  className="border-t border-gray-100 transition hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={worker.image}
                        alt={worker.name}
                        className="h-12 w-12 rounded-2xl object-cover"
                      />

                      <div>
                        <h2 className="font-semibold text-gray-800">
                          {worker.name}
                        </h2>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={15} />
                        {worker.phone}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600 break-all">
                        <Mail size={15} />
                        {worker.email}
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={15} />
                      {worker.city}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                      {worker.skill}
                    </span>
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-700">
                    {worker.jobs}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />

                      <span className="font-medium text-gray-700">
                        {worker.rating}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        worker.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : worker.status === "Busy"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-red-100 text-red-600"
                      }`}
                    >
                      {worker.status}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="rounded-xl bg-blue-100 p-2 text-blue-600 transition hover:scale-105">
                        <Eye size={18} />
                      </button>

                      <button className="rounded-xl bg-green-100 p-2 text-green-600 transition hover:scale-105">
                        <Pencil size={18} />
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
        {filteredWorkers.map((worker) => (
          <div
            key={worker.id}
            className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 gap-4">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div className="min-w-0">
                  <h2 className="truncate text-lg font-bold text-gray-800">
                    {worker.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">{worker.skill}</p>

                  <div className="mt-2 flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />

                    <span className="text-sm font-medium text-gray-700">
                      {worker.rating}
                    </span>
                  </div>
                </div>
              </div>

              <button className="shrink-0 rounded-xl bg-gray-100 p-2 text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Phone</p>

                <h3 className="mt-1 break-all text-sm font-medium text-gray-800">
                  {worker.phone}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">City</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {worker.city}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Jobs</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {worker.jobs}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Status</p>

                <span
                  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    worker.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : worker.status === "Busy"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {worker.status}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <button className="flex items-center justify-center rounded-2xl bg-blue-100 py-3 text-blue-600">
                <Eye size={18} />
              </button>

              <button className="flex items-center justify-center rounded-2xl bg-green-100 py-3 text-green-600">
                <Pencil size={18} />
              </button>

              <button className="flex items-center justify-center rounded-2xl bg-red-100 py-3 text-red-600">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
