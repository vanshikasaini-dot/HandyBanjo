import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Wallet,
  Search,
  IndianRupee,
  CheckCircle,
  Clock3,
  XCircle,
  ArrowDownCircle,
  ArrowUpCircle,
  CreditCard,
} from "lucide-react";

export default function AllPayments() {
  const [activeTab, setActiveTab] = useState("all");

  const [search, setSearch] = useState("");

  // Payment Data
  const payments = {
    all: [
      {
        id: "#PAY101",
        customer: "Rahul Sharma",
        amount: "₹2,500",
        method: "UPI",
        status: "Paid",
        date: "28 May 2026",
      },
      {
        id: "#PAY102",
        customer: "Priya Verma",
        amount: "₹1,200",
        method: "Card",
        status: "Pending",
        date: "27 May 2026",
      },
      {
        id: "#PAY103",
        customer: "Aman Singh",
        amount: "₹3,000",
        method: "Wallet",
        status: "Failed",
        date: "26 May 2026",
      },
      {
        id: "#PAY104",
        customer: "Neha Kapoor",
        amount: "₹1,800",
        method: "Cash",
        status: "Refunded",
        date: "25 May 2026",
      },
    ],

    paid: [
      {
        id: "#PAY201",
        customer: "Vikas Sharma",
        amount: "₹4,500",
        method: "UPI",
        status: "Paid",
        date: "24 May 2026",
      },
      {
        id: "#PAY202",
        customer: "Pooja",
        amount: "₹2,000",
        method: "Card",
        status: "Paid",
        date: "23 May 2026",
      },
    ],

    pending: [
      {
        id: "#PAY301",
        customer: "Rohit",
        amount: "₹1,500",
        method: "Wallet",
        status: "Pending",
        date: "22 May 2026",
      },
      {
        id: "#PAY302",
        customer: "Simran",
        amount: "₹2,300",
        method: "Cash",
        status: "Pending",
        date: "21 May 2026",
      },
    ],

    failed: [
      {
        id: "#PAY401",
        customer: "Ajay",
        amount: "₹3,200",
        method: "UPI",
        status: "Failed",
        date: "20 May 2026",
      },
    ],

    refunded: [
      {
        id: "#PAY501",
        customer: "Kajal",
        amount: "₹1,100",
        method: "Card",
        status: "Refunded",
        date: "19 May 2026",
      },
    ],
  };

  const tabs = [
    { key: "all", label: "All Payments" },
    { key: "paid", label: "Paid" },
    { key: "pending", label: "Pending" },
    { key: "failed", label: "Failed" },
    { key: "refunded", label: "Refunded" },
  ];

  const filteredPayments = payments[activeTab].filter(
    (payment) =>
      payment.customer.toLowerCase().includes(search.toLowerCase()) ||
      payment.method.toLowerCase().includes(search.toLowerCase()) ||
      payment.status.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Payment & Wallet
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all customer payments and wallet transactions
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
            placeholder="Search payments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-red-400 shadow-sm"
          />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        {/* Total */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Payments</p>

              <h2 className="text-3xl font-bold mt-1">
                {payments.all.length +
                  payments.paid.length +
                  payments.pending.length +
                  payments.failed.length +
                  payments.refunded.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <Wallet size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>

        {/* Paid */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Paid Payments</p>

              <h2 className="text-3xl font-bold text-green-500 mt-1">
                {payments.paid.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={28} className="text-green-500" />
            </div>
          </div>
        </motion.div>

        {/* Pending */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Payments</p>

              <h2 className="text-3xl font-bold text-yellow-500 mt-1">
                {payments.pending.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
              <Clock3 size={28} className="text-yellow-500" />
            </div>
          </div>
        </motion.div>

        {/* Failed */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Failed Payments</p>

              <h2 className="text-3xl font-bold text-red-500 mt-1">
                {payments.failed.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle size={28} className="text-red-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-6">
        {tabs.map((tab) => (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
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
      </div>

      {/* Payment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          {filteredPayments.map((payment, index) => (
            <motion.div
              key={payment.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {payment.customer}
                  </h2>

                  <p className="text-sm text-gray-500">{payment.id}</p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold
                    ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : payment.status === "Failed"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {payment.status}
                </span>
              </div>

              {/* Amount */}
              <div className="bg-gray-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-500 mb-1">Amount</p>

                <h3 className="font-bold text-2xl text-gray-800 flex items-center gap-1">
                  <IndianRupee size={22} />
                  {payment.amount.replace("₹", "")}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <CreditCard size={15} />
                  </div>

                  <span>{payment.method}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Clock3 size={15} />
                  </div>

                  <span>{payment.date}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <ArrowDownCircle size={18} />
                  Details
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
                >
                  <ArrowUpCircle size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredPayments.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl p-10 text-center shadow-sm mt-5"
        >
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No Payments Found
          </h2>

          <p className="text-gray-500">
            There are no payment records available in this section.
          </p>
        </motion.div>
      )}
    </div>
  );
}