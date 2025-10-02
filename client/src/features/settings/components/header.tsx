"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { settingsHeaderData } from "../data/header";

import { RiMenu2Fill } from "react-icons/ri";

const SettingsHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="space-y-4 mb-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="flex-row gap-x-2 hidden md:flex">
        {settingsHeaderData.map((item) => (
          <div
            key={item.title}
            className={cn(
              pathname === item.link &&
                "bg-white dark:bg-accent text-black dark:text-primary-foreground",
              "px-3 py-1.5 rounded-md",
            )}
          >
            <Link href={item.link}>{item.title}</Link>
          </div>
        ))}
      </div>

      <Select
        value={pathname}
        onValueChange={(value) => {
          router.push(value);
        }}
      >
        <SelectTrigger
          className="w-full flex lg:hidden"
          prefix={<RiMenu2Fill className="w-4 h-4" />}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {settingsHeaderData.map((item) => (
            <SelectItem key={item.title} value={item.link}>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SettingsHeader;
