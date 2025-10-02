"use client";
import { LanguageType, languages } from "@/common/data/language";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageToggle = () => {
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const localeCookie = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith("LOCALE="))
      ?.split("=")[1];

    if (localeCookie) {
      setLocale(localeCookie);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      document.cookie = `LOCALE=${browserLocale}; path=/`;
      router.refresh();
    }
  }, [router]);

  const onLanguageChange = (code: LanguageType) => {
    setLocale(code);
    document.cookie = `LOCALE=${code}; path=/`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">
            {languages[locale as LanguageType]?.code}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {Object.entries(languages).map(([code, { name }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => onLanguageChange(code as LanguageType)}
            className={cn(
              "cursor-pointer",
              locale === code ? "bg-accent text-accent-foreground" : "",
            )}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
