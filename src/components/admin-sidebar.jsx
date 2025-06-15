import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { AppIcon } from "@/components/app-icon";
import { LogOut, Newspaper, Tag } from "lucide-react";

const menus = [
  {
    title: "Articles",
    url: "#",
    icon: Newspaper,
  },
  {
    title: "Category",
    url: "#",
    icon: Tag,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar className="px-4 pt-6 gap-6">
      <SidebarHeader className="pl-4">
        <AppIcon className="fill-sidebar-foreground" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="gap-2">
          {menus.map(menu => (
            <SidebarMenuItem key={menu.title}>
              <SidebarMenuButton asChild>
                <a href={menu.url} className="px-4 py-[10px] h-fit [&>svg]:size-5 flex gap-3">
                  <menu.icon />
                  <span className="text-base">{menu.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}