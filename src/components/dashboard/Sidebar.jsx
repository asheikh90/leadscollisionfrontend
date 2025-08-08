import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Inbox, Users, FileText, Calendar, Folder, Settings } from "lucide-react";

const NavItem = ({ to, icon: Icon, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to || pathname.startsWith(to + "/");
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
        active ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:flex flex-col gap-2 p-4 border-r border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mb-4">
        <div className="text-lg font-black">Collision Command 2.0</div>
        <div className="text-xs text-gray-400">Control Room</div>
      </div>
      <NavItem to="/dashboard" icon={Home} label="Overview" />
      <NavItem to="/dashboard/inbox" icon={Inbox} label="Inbox" />
      <NavItem to="/dashboard/leads" icon={Users} label="Leads" />
      <NavItem to="/dashboard/quotes" icon={FileText} label="Quotes" />
      <NavItem to="/dashboard/calendar" icon={Calendar} label="Calendar" />
      <NavItem to="/dashboard/files" icon={Folder} label="Files" />
      <NavItem to="/dashboard/settings" icon={Settings} label="Settings" />
    </aside>
  );
}
