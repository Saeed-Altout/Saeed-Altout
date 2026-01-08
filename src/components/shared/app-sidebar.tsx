"use client";

import * as React from "react";
import { HomeIcon, UserIcon, MailIcon } from "lucide-react";

import { NavMain } from "@/components/shared/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Logo } from "./logo";
import { SidebarOptInForm } from "./sidebar-opt-in-form";

// This is sample data.
const data = {
  user: {
    name: "Saeed Altout",
    email: "saeedaltout25@gmail.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
      isActive: false,
      items: [],
    },
    {
      title: "About",
      url: "/about",
      icon: UserIcon,
      isActive: false,
      items: [],
    },
    {
      title: "Contact",
      url: "/contact",
      icon: MailIcon,
      isActive: false,
      items: [],
    },
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <SidebarOptInForm />
      </SidebarFooter> */}
    </Sidebar>
  );
}
