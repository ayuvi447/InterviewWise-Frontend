import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Desktop App", path: "/desktop-app" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources", highlight: true },
  ];

  return (
    <div className="h-16 bg-black/95 border-b border-gray-800 backdrop-blur-md px-4 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-6">
        {/* Left Section - Logo */}
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-black">
            IW
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Interview Wise
          </h2>
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center gap-4 bg-gray-900/50 rounded-full px-4 py-2">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-1 rounded-full transition ${
                  isActive || item.active
                    ? "text-cyan-400 bg-black"
                    : item.highlight
                    ? "text-cyan-400 hover:text-cyan-300"
                    : "text-white hover:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Strategy & Hack Button */}
          <button className="text-sm font-medium px-3 py-1 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
            Strategy & Hack
          </button>
        </div>

        {/* Right - Profile + Dropdown */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block mt-2 ">
            <ProfileInfoCard />
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold">
            V
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
