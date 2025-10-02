"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <div className="space-y-8">
          <div className="space-y-1">
            <h5 className="font-semibold">Default Theme</h5>
            <p className="text-sm">
              Customize your theme, make it more enjoyable and comfortable to
              work
            </p>
          </div>
          <Button className="">
            <Plus />
            Create Your Theme
          </Button>
        </div>
      </div>

      <div className="col-span-1 md:col-span-8">
        <RadioGroup
          defaultValue={theme}
          onValueChange={setTheme}
          className="flex flex-col md:flex-row gap-6 md:gap-8"
        >
          <Label
            htmlFor="light"
            className="cursor-pointer border rounded-lg hover:shadow-md transition flex flex-col gap-0"
          >
            <div className="rounded-t-lg bg-gray-400 flex justify-center items-center border-b size-full">
              <Image
                src="/assets/images/theme-light.png"
                alt="Light Theme"
                width={250}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex justify-start items-center space-x-2 p-4 w-full">
              <RadioGroupItem value="light" id="light" />
              <span>Light Theme</span>
            </div>
          </Label>

          <Label
            htmlFor="dark"
            className="cursor-pointer border rounded-lg hover:shadow-md transition flex flex-col gap-0"
          >
            <div className="rounded-t-lg bg-gray-400 flex justify-center items-center border-b size-full">
              <Image
                src="/assets/images/theme-dark.png"
                alt="Dark Theme"
                width={250}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex justify-start items-center space-x-2 p-4 w-full">
              <RadioGroupItem value="dark" id="dark" />
              <span>Dark Theme</span>
            </div>
          </Label>
        </RadioGroup>
      </div>
    </section>
  );
};

export default ThemeSection;
