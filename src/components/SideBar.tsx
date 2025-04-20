import {
  LayoutDashboard,
  Utensils,
  Table,
  Users,
  FileText,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Món Ăn",
    url: "#",
    icon: Utensils, // biểu tượng món ăn
  },
  {
    title: "Bàn Ăn",
    url: "#",
    icon: Table, // biểu tượng bàn
  },
  {
    title: "Nhân Viên",
    url: "#",
    icon: Users, // biểu tượng nhóm người
  },
  {
    title: "Hóa Đơn",
    url: "#",
    icon: FileText, // biểu tượng file/hóa đơn
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup className="">
          <SidebarGroupLabel className="flex justify-center items-center w-full min-w-[256px]">BoxBite</SidebarGroupLabel>
          <SidebarGroupContent className="px-4 ">
            <SidebarMenu className="  block w-full space-y-2 ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="flex items-center text-lg min-w-[230px] h-10">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-lg mr-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
