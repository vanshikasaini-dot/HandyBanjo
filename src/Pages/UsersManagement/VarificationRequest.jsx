import { useState } from "react";
import {
  Search,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  XCircle,
  Eye,
  Check,
  X,
  Phone,
} from "lucide-react";

export default function VerificationRequests() {
  const [search, setSearch] = useState("");

  const requests = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Worker",
      skill: "Electrician",
      phone: "9876543210",
      documents: 4,
      date: "27 May 2026",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Amit Kumar",
      role: "Worker",
      skill: "Plumber",
      phone: "9876543211",
      documents: 3,
      date: "26 May 2026",
      status: "Verified",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 3,
      name: "Vikas Singh",
      role: "Worker",
      skill: "Cleaner",
      phone: "9876543212",
      documents: 5,
      date: "25 May 2026",
      status: "Rejected",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 4,
      name: "Rohit Verma",
      role: "Worker",
      skill: "Painter",
      phone: "9876543213",
      documents: 2,
      date: "24 May 2026",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  const filteredRequests = requests.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()),
  );

  const statusStyle = (status) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-orange-100 text-orange-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const roleStyle = (role) => {
    switch (role) {
      case "Worker":
        return "bg-purple-100 text-purple-600";
      case "Customer":
        return "bg-blue-100 text-blue-600";
      case "Provider":
        return "bg-indigo-100 text-indigo-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Total Requests"
          value="240"
          icon={<ShieldCheck className="text-blue-600" size={28} />}
        />
        <Card
          title="Pending"
          value="80"
          icon={<Clock3 className="text-orange-600" size={28} />}
        />
        <Card
          title="Verified"
          value="120"
          icon={<BadgeCheck className="text-green-600" size={28} />}
        />
        <Card
          title="Rejected"
          value="40"
          icon={<XCircle className="text-red-600" size={28} />}
        />
      </div>

      {/* Header */}
      <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Verification Requests
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage worker verification requests
            </p>
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border bg-gray-50 pl-11 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 hidden rounded-3xl bg-white shadow-sm xl:block overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                User
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                Role
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                Contact
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                Skill
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                Docs
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                Date
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
            {filteredRequests.map((r) => (
              <tr key={r.id} className="border-t hover:bg-gray-50">
                {/* USER */}
                <td className="px-5 py-4 flex items-center gap-3">
                  <img
                    src={r.image}
                    className="h-12 w-12 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="font-semibold">{r.name}</p>
                  </div>
                </td>

                {/* ROLE */}
                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${roleStyle(r.role)}`}
                  >
                    {r.role}
                  </span>
                </td>

                {/* CONTACT */}
                <td className="px-5 py-4 text-sm flex items-center gap-2">
                  <Phone size={14} />
                  {r.phone}
                </td>

                {/* SKILL */}
                <td className="px-5 py-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                    {r.skill}
                  </span>
                </td>

                {/* DOCS */}
                <td className="px-5 py-4">{r.documents}</td>

                {/* DATE */}
                <td className="px-5 py-4 text-sm text-gray-600">{r.date}</td>

                {/* STATUS */}
                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusStyle(r.status)}`}
                  >
                    {r.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-green-100 text-green-600">
                      <Check size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-red-100 text-red-600">
                      <X size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Small reusable card */
function Card({ title, value, icon }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">{value}</h2>
        </div>
        {icon}
      </div>
    </div>
  );
}
