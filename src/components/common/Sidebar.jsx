import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/fasting", label: "Fasting" },
    { to: "/meal", label: "Meal" },
    { to: "/activity", label: "Activity" },
    { to: "/goals", label: "Goals" },
    { to: "/progress", label: "Progress" },
    { to: "/bmi", label: "BMI" },
    { to: "/profile", label: "Profile" }
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-full p-4">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-indigo-100 ${
                isActive ? "bg-indigo-200 font-semibold" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
