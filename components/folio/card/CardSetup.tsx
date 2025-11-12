import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type CardSetupProps = PropsWithChildren<{
  className?: string;
  size?: "sm" | "flex-1" | "skills";
}>;

export const CardSetup = ({
  children,
  className,
  size = "sm",
}: CardSetupProps) => {
  const sizeClass =
    size === "sm"
      ? "w-sm"
      : size === "flex-1"
      ? "flex-1"
      : size === "skills"
      ? "h-[110px] w-[110px]"
      : "";

  return (
    <div
      className={cn(
        "flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300",
        sizeClass
      )}
    >
      <div
        className={cn(
          "w-full relative h-full rounded-lg overflow-hidden flex flex-col bg-card p-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
