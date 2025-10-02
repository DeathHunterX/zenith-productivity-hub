import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const AvatarSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Avatar</h5>
      </div>

      <div className="col-span-1 md:col-span-8">
        <div className="flex flex-row gap-6 items-center">
          <Avatar className="size-20">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar"
              className="size-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="space-y-4">
            <p className="text-sm">This will be displayed in your profile</p>
            <Button type="button">
              <Upload />
              Upload Photo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarSection;
