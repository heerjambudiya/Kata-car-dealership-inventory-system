import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
      {/* Search */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search vehicles..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="text-slate-600" size={22} />

          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={34} className="text-slate-700" />

          <div>
            <p className="font-semibold text-sm">Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;