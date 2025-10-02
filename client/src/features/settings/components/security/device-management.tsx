import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { PiDevicesDuotone } from "react-icons/pi";

const DeviceManagementSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Device Management</h5>
        <p className="text-sm">
          Manage your devices and their activity to ensure your account is
          secure.
        </p>
      </div>

      <div className="col-span-1 md:col-span-8">
        <div className="flex justify-end items-center h-full">
          <Dialog>
            <DialogTrigger asChild className="w-fit">
              <Button variant="outline">
                <PiDevicesDuotone />
                Check Devices
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl!">
              <DialogHeader>
                <DialogTitle>Device Management</DialogTitle>
                <DialogDescription>
                  Manage your devices and their activity to ensure your account
                  is secure.
                </DialogDescription>
              </DialogHeader>
              <Separator />
              <DeviceManagementList />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

const deviceList = [
  {
    id: 1,
    name: "Device 1",
    ip: "192.168.1.1",
    location: "New York, NY",
    browser: "Chrome",
    os: "Windows",
    lastActive: "2021-01-01",
    isActive: true,
  },
  {
    id: 2,
    name: "Device 2",
    ip: "192.168.1.2",
    location: "Los Angeles, CA",
    browser: "Firefox",
    os: "Mac OS",
    lastActive: "2021-01-02",
    isActive: false,
  },
  {
    id: 3,
    name: "Device 3",
    ip: "192.168.1.3",
    location: "Chicago, IL",
    browser: "Safari",
    os: "iOS",
    lastActive: "2021-01-03",
    isActive: true,
  },
  {
    id: 4,
    name: "Device 4",
    ip: "192.168.1.4",
    location: "Houston, TX",
    browser: "Edge",
    os: "Android",
    lastActive: "2021-01-04",
    isActive: false,
  },
  {
    id: 5,
    name: "Device 5",
    ip: "192.168.1.5",
    location: "Miami, FL",
    browser: "Opera",
    os: "Windows",
    lastActive: "2021-01-05",
    isActive: true,
  },
  {
    id: 6,
    name: "Device 6",
    ip: "192.168.1.6",
    location: "Seattle, WA",
    browser: "Safari",
    os: "Mac OS",
    lastActive: "2021-01-06",
    isActive: false,
  },
  {
    id: 7,
    name: "Device 7",
    ip: "192.168.1.7",
    location: "San Francisco, CA",
    browser: "Edge",
    os: "Android",
    lastActive: "2021-01-07",
    isActive: true,
  },
  {
    id: 8,
    name: "Device 8",
    ip: "192.168.1.8",
    location: "Boston, MA",
    browser: "Opera",
    os: "Windows",
    lastActive: "2021-01-08",
    isActive: false,
  },
];

const DeviceManagementList = () => {
  const getDeviceIcon = (os: string) => {
    switch (os.toLowerCase()) {
      case "windows":
        return "/assets/icons/pc-laptop.png";
      case "macos":
        return "/assets/icons/pc-laptop.png";
      case "android":
        return "/assets/icons/android.png";
      case "ios":
        return "/assets/icons/apple.png";
      default:
        return "/assets/icons/pc-laptop.png";
    }
  };
  return (
    <div className="flex flex-col gap-y-4 w-full h-96 pr-3 overflow-y-auto">
      {deviceList.map((device) => (
        <div
          className="grid grid-cols-12 items-center space-y-2"
          key={device.id}
        >
          <div className="col-span-1">
            <Image
              src={getDeviceIcon(device.os)}
              alt={device.name}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="col-span-5">
            <div className="flex flex-col gap-y-1">
              <h6 className="font-semibold">{device.name}</h6>
              <p className="text-sm">{device.location}</p>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col gap-y-1">
              <h6 className="font-semibold">{device.browser}</h6>
              <p className="text-sm">{device.os}</p>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col gap-y-1">
              <h6 className="font-semibold">{device.lastActive}</h6>
              <p className="text-sm">
                {device.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>

          <div className="col-span-2 justify-self-end">
            <Button variant="destructive">Revoke</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeviceManagementSection;
