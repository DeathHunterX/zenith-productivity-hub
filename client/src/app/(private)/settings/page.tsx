import { Separator } from "@/components/ui/separator";
import LanguageSection from "@/features/settings/components/general/language-section";
import ThemeSection from "@/features/settings/components/general/theme-section";
import { useTranslations } from "next-intl";

const SettingsPage = () => {
  const tGeneral = useTranslations("settings.general");
  return (
    <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
      <div className="space-y-1">
        <h4 className="font-semibold">{tGeneral("title")}</h4>
        <p>{tGeneral("description")}</p>
      </div>

      <Separator className="my-4" />

      <ThemeSection />

      <Separator className="my-8" />

      <LanguageSection />
    </div>
  );
};

export default SettingsPage;
