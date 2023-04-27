
import Sidebar from '../sidenav';
import Header from '../nav';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
   
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto ">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
      
          
        />
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full "><Outlet/></div>
      </div>
    </div>
  );
};

export default Layout