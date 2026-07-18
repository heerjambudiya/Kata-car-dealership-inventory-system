import {
  LayoutDashboard,
  Car,
  Boxes,
  IndianRupee,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Vehicles", icon: Car, path: "/vehicles" },
  { name: "Inventory", icon: Boxes, path: "/inventory" },
  { name: "Sales", icon: IndianRupee, path: "/sales" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen sticky top-0">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          🚗 CarDeal
        </h1>
      </div>

      <nav className="mt-6 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-6 w-full px-3">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-slate-300 hover:bg-slate-800 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;    