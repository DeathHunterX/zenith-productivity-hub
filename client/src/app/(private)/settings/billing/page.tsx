import { Separator } from "@/components/ui/separator";

const SettingsBillingPage = () => {
  return (
    <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
      <div className="space-y-1">
        <h4 className="font-semibold">Billing</h4>
        <p>Manage your billing and subscription</p>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default SettingsBillingPage;
