import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const StatCard = ({ label, value }) => (
  <div className="glass-panel p-4 rounded-2xl">
    <div className="text-gray-400 text-sm">{label}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <StatCard label="Leads Today" value="7" />
              <StatCard label="Quotes Sent" value="12" />
              <StatCard label="Booked" value="5" />
              <StatCard label="No-Shows" value="1" />
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-4">Stuck CCC Estimates</h2>
              <ul className="space-y-2 text-gray-300">
                <li>#MOCK1780 — $1,780 — Subaru Outback — <span className="text-primary-400">Re-activate</span></li>
                <li>#MOCK2126 — $2,126 — Toyota Camry — <span className="text-primary-400">Re-activate</span></li>
                <li>#MOCK0950 — $950 — Honda Accord — <span className="text-primary-400">Re-activate</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
