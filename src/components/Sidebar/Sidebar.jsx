import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as s from "./Sidebar.styles";

const Sidebar = ({ menuItems = [], logoIcon = "" }) => {
  //state
  const [selected, setSelectedItemMenu] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);

  //Effects

  //Update Sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
      else setSidebarState(true);
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  const handleMenuItemClick = (name) => {
    setSelectedItemMenu(name);
  };
  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    return (
      <Link to={item.to} key={index} style={{ textDecoration: "none" }}>
        <s.MenuItem
          key={index}
          selected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name)}
          isSidebarOpen={isSidebarOpen}
        >
          <s.Icon src={item.icon} isSidebarOpen={isSidebarOpen}></s.Icon>
          <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
        </s.MenuItem>
      </Link>
    );
  });

  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <s.sidebarLogoContainer>
        <a href="/">
          <s.SidebarLogo isSidebarOpen={isSidebarOpen} src={logoIcon} />
        </a>
      </s.sidebarLogoContainer>

      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.ToggleContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.ToggleContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
