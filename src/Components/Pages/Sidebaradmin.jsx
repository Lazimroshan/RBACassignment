import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import Appsidebar from "./Appsidebar";
function Sidebaradmin({children}) {
  return (
    <div>
    <SidebarProvider   style={{
      "--sidebar-width": "14rem",
      "--sidebar-width-mobile": "20rem",
    }}>
      <Appsidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </div>
  );
  
}

export default Sidebaradmin;
