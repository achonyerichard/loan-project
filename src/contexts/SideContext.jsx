import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const SideContext = createContext({
  sidebarOpen: {},
  setSidebarOpen: () => {},
  sidebsidebarExpandedarOpen: {},
  setSidebarExpanded: () => {},
});

export const SideProvider = ({ children }) => {
  SideProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const value = { sidebarOpen, setSidebarOpen,sidebarExpanded,setSidebarExpanded };
  return <SideContext.Provider value={value}>{children}</SideContext.Provider>;
};
