import { cn } from "@/utils/cn";

export function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={cn(
        "rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-foreground",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
