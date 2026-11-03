import { cn } from "@/utils/cn";

export function SectionWrapper({ children, className = "", id, ...props }) {
  return (
    <section id={id} className={cn("relative", className)} {...props}>
      {children}
    </section>
  );
}
