import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const DangerZoneSection = () => {
  return (
    <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
      <div className="space-y-1">
        <h4 className="font-semibold text-rose-500 dark:text-rose-600">
          Danger Zone
        </h4>
        <p className="text-sm dark:text-muted-foreground">
          These actions are irreversible and will permanently affect your
          account.
        </p>
      </div>

      <Separator className="my-4" />

      <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-4 space-y-2">
          <h5 className="font-semibold">Deactivate Account</h5>
          <p className="text-sm">
            This will shut down your account and you will not be able to login
            again. Your account will be reactivated when you sign in again.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8">
          <div className="flex justify-end items-center h-full">
            <Button variant="outline" className="">
              Deactivate Account
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-4 space-y-2">
          <h5 className="font-semibold">Delete Account</h5>
          <p className="text-sm">
            This will delete your account and all your data will be lost. Your
            account will be deleted permanently from Zenith.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8">
          <div className="flex justify-end items-center h-full">
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DangerZoneSection;
