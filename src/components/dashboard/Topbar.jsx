import React from "react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-sm text-gray-300">
          Logged in as <span className="text-white font-semibold">Operator</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            placeholder="Search leads…"
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400"
          />
          <button className="btn-secondary">New Lead</button>
        </div>
      </div>
    </header>
  );
}
