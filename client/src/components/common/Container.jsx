import { cn } from "@/utils/cn";

export function Container({ children, className = "", ...props }) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}
