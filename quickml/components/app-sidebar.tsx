"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  GalleryVerticalEnd,
  ChartPie,
  CirclePlus,
} from "lucide-react"

import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Sbiascica",
    email: "sbiascica@cambridge.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Occhi del cuore Labs",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: ChartPie,
    },
    {
      name: "Past Models",
      url: "/past-models",
      icon: GalleryVerticalEnd,
    },
    {
      name: "New Model",
      url: "/new-model",
      icon: CirclePlus,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentPath = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} currentPath={currentPath} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
