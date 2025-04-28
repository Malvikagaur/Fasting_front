import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Fasting Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
