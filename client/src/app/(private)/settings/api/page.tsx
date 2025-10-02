import { Separator } from "@/components/ui/separator";

const SettingsAPIPage = () => {
  return (
    <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
      <div className="space-y-1">
        <h4 className="font-semibold">API</h4>
        <p>Provide the API information for your usage</p>
      </div>

      <Separator className="my-4" />
    </div>
  );
};

export default SettingsAPIPage;
