// layout.tsx (ví dụ trong dashboard layout)

import { AppSidebar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <AppSidebar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}

