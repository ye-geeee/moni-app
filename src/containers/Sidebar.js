import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItems";

export default function Sidebar() {

  const menus = [
    { name: "홈", path: "/"},
    { name: "캘린더", path: "/caldendar" },
    { name: "차트", path: "/chart" }
  ];

  return (
    <div className="sidebar">
      <ul>
        {menus.map((menu, index) => {
          return (
            <li>
              <Link to={menu.path} key={index}>
                <SidebarItem menu={menu.name}></SidebarItem>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
