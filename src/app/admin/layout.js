import { AdminSidebar } from "@/components/admin-sidebar";
import { Card, CardHeader } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AccountLink } from "@/components/account-link";

export default function AuthLayout({ children }) {
  return (
    <SidebarProvider className="h-dvh">
      <AdminSidebar />
      <main className="flex-1 flex flex-col items-stretch bg-muted">
        <div className="pt-5 pb-4 px-6 flex items-center justify-between bg-background">
          <p className="font-semibold text-xl">Articles</p>
          <AccountLink />
        </div>
        <div className="flex-1 mt-6 mx-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}