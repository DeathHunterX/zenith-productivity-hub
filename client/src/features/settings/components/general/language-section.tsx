"use client";

import { languages, LanguageType } from "@/common/data/language";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSection = () => {
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
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Language Preferences</h5>
      </div>

      <div className="col-span-1 md:col-span-8">
        <div className="flex flex-col gap-y-4">
          <Select onValueChange={onLanguageChange} value={locale}>
            <SelectTrigger className="w-full dark:bg-muted-foreground/7">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languages).map(([code, { name }]) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
