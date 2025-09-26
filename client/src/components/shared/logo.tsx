import { Zap } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2"
      title="Zenith"
      target="_self"
    >
      <div className="size-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
        <Zap className="size-5 text-white" />
      </div>
      <span className="text-xl font-bold">Zenith</span>
    </Link>
  );
};

export default Logo;
