import React, { useState } from 'react';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="sidebar">
      <h1>My Department is <span>{sidebarOpen}</span>!</h1>
      <button type="button" onClick={() => setSidebarOpen("DEPSTAR")}>DEPSTAR</button>
      <button type="button" onClick={() => setSidebarOpen("CSPIT")}>CSPIT</button>
      <button type="button" onClick={() => setSidebarOpen("PDPIS")}>PDPIS</button>
      <button type="button" onClick={() => setSidebarOpen("CMPICA")}>CMPICA</button>
    </div>
  );
};
export default Sidebar;