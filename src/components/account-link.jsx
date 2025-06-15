import { cn } from "@/lib/utils"

export function AccountLink({
  className,
  ...props
}) {
  return (
    <div
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <img src="/avatar.png" alt="" className="size-8 rounded-full" />
      <p className="underline underline-offset-2">James Dean</p>
    </div>
  );
}
