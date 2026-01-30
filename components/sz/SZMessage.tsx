import { cn } from "@/lib/utils";
import { SZLogo } from "../icons/logo";

export function SZMessage({
  message,
  children,
  className,
}: {
  message: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className=" flex flex-row gap-4 items-start w-full ">
      <div className="h-7.5 w-7.5 flex items-center justify-center rounded-full ">
        <SZLogo size={20} />
      </div>
      <div className="flex flex-col gap-2 mt-0.75 w-full relative">
        <p className={cn("", className)}>{message}</p>
        {children}
      </div>
    </div>
  );
}
