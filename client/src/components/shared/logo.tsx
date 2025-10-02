import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  size?: "lg" | "md" | "sm";
  link?: string;
}

const Logo = ({ size = "lg", link = "/" }: LogoProps) => {
  const LogoVariant = {
    lg: "size-8",
    md: "size-6",
    sm: "size-4",
  };

  const LogoIconVariant = {
    lg: "size-5",
    md: "size-4",
    sm: "size-3",
  };

  const LogoTextVariant = {
    lg: "text-xl",
    md: "text-lg",
    sm: "text-base",
  };

  return (
    <Link
      href={link}
      className="flex items-center space-x-2"
      title="Zenith"
      target="_self"
    >
      <div
        className={cn(
          LogoVariant[size],
          "bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center",
        )}
      >
        <Zap className={cn(LogoIconVariant[size], "text-white")} />
      </div>
      <span className={cn(LogoTextVariant[size], "font-bold")}>Zenith</span>
    </Link>
  );
};

export default Logo;
