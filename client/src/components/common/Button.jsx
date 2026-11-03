import { cn } from "@/utils/cn";

export function Button({
  children,
  variant = "navy",
  className = "",
  ...props
}) {
  const variantClass =
    variant === "gold"
      ? "btn-gold"
      : variant === "outline"
        ? "btn-outline"
        : "btn-navy";

  return (
    <button className={cn(variantClass, className)} {...props}>
      {children}
    </button>
  );
}
