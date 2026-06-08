import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getAllDashboard } from "../Apis/dashboard";

export default function UserGrowthChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllDashboard();
        console.log("Dashboard API:", res);

        // ✅ SAFE DATA HANDLING (IMPORTANT FIX)
        const data = res?.data?.users || res?.users || {};

        const formatted = [
          {
            name: "Users",
            value: data?.totalUsers || 0,
          },
          {
            name: "Helpers",
            value: data?.totalHelpers || 0,
          },
          {
            name: "Customers",
            value: data?.totalCustomers || 0,
          },
          {
            name: "Pros",
            value: data?.totalPros || 0,
          },
          {
            name: "Enterprises",
            value: data?.totalEnterprises || 0,
          },
        ];

        setChartData(formatted);
      } catch (err) {
        console.log("API Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-full mb-[20px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">User Growth Trends</h2>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData || []}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff6b35"
            fill="#ff6b35"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
