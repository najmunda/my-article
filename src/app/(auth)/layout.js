import { AppIcon } from "@/components/app-icon";
import { Card, CardHeader } from "@/components/ui/card";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-background md:bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Card className="px-4 py-10 border-0">
            <CardHeader className="p-0 flex justify-center">
              <AppIcon />
            </CardHeader>
            {children}
          </Card>
        </div>
      </div>
    </div>
  )
}