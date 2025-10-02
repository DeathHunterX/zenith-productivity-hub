import { Separator } from "@/components/ui/separator";
import PlanningSection from "@/features/settings/components/plan/planning-section";

const SettingsPlanPage = () => {
  return (
    <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
      <div className="space-y-1">
        <h4 className="font-semibold">Plan & Pricing</h4>
        <p>Simple pricing. No hidden fees. Advanced features for your usage.</p>
      </div>

      <Separator className="my-4" />

      <PlanningSection />
    </div>
  );
};

export default SettingsPlanPage;
