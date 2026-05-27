import { useState } from "react";
import {
  Search,
  Building2,
  Users,
  Wallet,
  BadgeCheck,
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
  MapPin,
  MoreVertical,
} from "lucide-react";

export default function Enterprises() {
  const [search, setSearch] = useState("");

  const enterprises = [
    {
      id: 1,
      company: "Taj Hotel",
      owner: "Rahul Sharma",
      phone: "9876543210",
      email: "tajhotel@gmail.com",
      city: "Delhi",
      employees: 25,
      bookings: 120,
      revenue: "₹45,000",
      status: "Active",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      company: "ABC Office",
      owner: "Amit Kumar",
      phone: "9876543211",
      email: "abcoffice@gmail.com",
      city: "Noida",
      employees: 15,
      bookings: 80,
      revenue: "₹28,000",
      status: "Inactive",
      logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      id: 3,
      company: "Green Mall",
      owner: "Vikas Singh",
      phone: "9876543212",
      email: "greenmall@gmail.com",
      city: "Mumbai",
      employees: 40,
      bookings: 210,
      revenue: "₹75,000",
      status: "Active",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      id: 4,
      company: "City Hospital",
      owner: "Rohit Verma",
      phone: "9876543213",
      email: "hospital@gmail.com",
      city: "Jaipur",
      employees: 30,
      bookings: 140,
      revenue: "₹52,000",
      status: "Pending",
      logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    },
  ];

  const filteredEnterprises = enterprises.filter((enterprise) =>
    enterprise.company.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 p-4 sm:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Enterprises</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">240</h2>
            </div>

            <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
              <Building2 size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Enterprises</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">180</h2>
            </div>

            <div className="rounded-2xl bg-green-100 p-4 text-green-600">
              <BadgeCheck size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Employees</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">1250</h2>
            </div>

            <div className="rounded-2xl bg-orange-100 p-4 text-orange-600">
              <Users size={28} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">₹5.2L</h2>
            </div>

            <div className="rounded-2xl bg-purple-100 p-4 text-purple-600">
              <Wallet size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Enterprise Management
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage all enterprises easily
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search enterprise..."
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
                  Company
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Contact
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  City
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Employees
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Bookings
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">
                  Revenue
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
              {filteredEnterprises.map((enterprise) => (
                <tr
                  key={enterprise.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={enterprise.logo}
                        alt={enterprise.company}
                        className="h-12 w-12 rounded-2xl object-cover"
                      />

                      <div className="min-w-0">
                        <h2 className="truncate font-semibold text-gray-800">
                          {enterprise.company}
                        </h2>

                        <p className="text-sm text-gray-500">
                          {enterprise.owner}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={15} />
                        {enterprise.phone}
                      </div>

                      <div className="flex items-center gap-2 break-all text-sm text-gray-600">
                        <Mail size={15} />
                        {enterprise.email}
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={15} />
                      {enterprise.city}
                    </div>
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-700">
                    {enterprise.employees}
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-700">
                    {enterprise.bookings}
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-700">
                    {enterprise.revenue}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        enterprise.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : enterprise.status === "Pending"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-red-100 text-red-600"
                      }`}
                    >
                      {enterprise.status}
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
        {filteredEnterprises.map((enterprise) => (
          <div
            key={enterprise.id}
            className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <img
                  src={enterprise.logo}
                  alt={enterprise.company}
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div className="min-w-0">
                  <h2 className="truncate text-lg font-bold text-gray-800">
                    {enterprise.company}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {enterprise.owner}
                  </p>
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
                  {enterprise.phone}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">City</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {enterprise.city}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Employees</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {enterprise.employees}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Revenue</p>

                <h3 className="mt-1 text-sm font-medium text-gray-800">
                  {enterprise.revenue}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span
                className={`rounded-full px-4 py-1 text-sm font-medium ${
                  enterprise.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : enterprise.status === "Pending"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {enterprise.status}
              </span>

              <div className="flex items-center gap-2">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
