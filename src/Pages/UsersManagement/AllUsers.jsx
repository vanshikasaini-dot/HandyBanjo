import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../Apis/allUsers";
import { motion } from "framer-motion";

import {
  Users,
  User,
  Layers,
  UserCheck,
  Building2,
  Briefcase,
} from "lucide-react";

export default function AllUsers() {
  const [activeTab, setActiveTab] = useState("all-users");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();

      console.log(response);

      setUsers(response?.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const customers = users.filter((user) => user.role === "customer");

  const helpers = users.filter((user) => user.role === "helper");

  const enterprises = users.filter((user) => user.role === "enterprise");

  const pros = users.filter((user) => user.role === "pro");

  const tabs = [
    {
      id: "all-users",
      label: "All Users",
      icon: Users,
    },
    {
      id: "customers",
      label: "Customers",
      icon: User,
    },

    {
      id: "helper",
      label: "Helper",
      icon: UserCheck,
    },
    {
      id: "enterprise",
      label: "Enterprise",
      icon: Building2,
    },
    {
      id: "pro",
      label: "Pro",
      icon: Briefcase,
    },
  ];

  const renderTable = (data) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Created At</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, index) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              <td className="p-3">{index + 1}</td>

              <td className="p-3">{user.email}</td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === "customer"
                      ? "bg-blue-100 text-blue-600"
                      : user.role === "helper"
                        ? "bg-green-100 text-green-600"
                        : user.role === "enterprise"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              <td className="p-3">
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  const cards = [
    {
      title: "Total Users",
      value: users.length,
      icon: <Users className="h-7 w-7 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Customers",
      value: customers.length,
      icon: <User className="h-7 w-7 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Helpers",
      value: helpers.length,
      icon: <UserCheck className="h-7 w-7 text-orange-600" />,
      bg: "bg-orange-100",
    },
    {
      title: "Enterprise",
      value: enterprises.length,
      icon: <Building2 className="h-7 w-7 text-purple-600" />,
      bg: "bg-purple-100",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          User Management
        </h1>

        <p className="text-gray-500 mt-2">Manage all users from one place.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>
              </div>

              <div className={`rounded-2xl p-4 ${card.bg}`}>{card.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm  overflow-hidden">
        <div className="overflow-x-auto">
          <div className="flex min-w-max p-3 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-red-400 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t">
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : (
            <>
              {activeTab === "all-users" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    All Users ({users.length})
                  </h2>
                  {renderTable(users)}
                </>
              )}

              {activeTab === "customers" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Customers ({customers.length})
                  </h2>
                  {renderTable(customers)}
                </>
              )}

              {activeTab === "helper" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Helpers ({helpers.length})
                  </h2>
                  {renderTable(helpers)}
                </>
              )}

              {activeTab === "enterprise" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Enterprise ({enterprises.length})
                  </h2>
                  {renderTable(enterprises)}
                </>
              )}

              {activeTab === "pro" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Pro Users ({pros.length})
                  </h2>
                  {renderTable(pros)}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
