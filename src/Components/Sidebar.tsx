import React from "react";
import "./Sidebar.css"; // Make sure to create a corresponding CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">Products</li>
      </ul>
    </div>
  );
};

export default Sidebar;
