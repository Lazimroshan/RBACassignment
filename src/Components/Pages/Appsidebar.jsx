import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Calendar, Home, Inbox, LogOut, Search, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Appsidebar() {
    const items = [
      
        {
          title: "Home",
          icon: Home,
          url: '/',
          
        },
        {
          title: "Users",
          url: '/Users',
          icon: Users,
        },
        {
          title: "Logout",
          icon: LogOut,
        },
        
      ]
  return (
    <div>
      <Sidebar>
        <div>
          {" "}
          <SidebarHeader>
            <div className="flex items-center space-x-9 "> <Avatar>
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span ><h1 >Admin</h1></span></div>
          </SidebarHeader>
        </div>
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

export default Appsidebar;
