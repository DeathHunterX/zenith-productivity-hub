import { useTranslations } from "next-intl";

import { Separator } from "@/components/ui/separator";

import ChangePasswordSection from "@/features/settings/components/security/change-password";
import ConnectedAccountSection from "@/features/settings/components/security/connected-accounts";

import TwoFactorSection from "@/features/settings/components/security/2fa";
import DangerZoneSection from "@/features/settings/components/security/danger-zone";
import DeviceManagementSection from "@/features/settings/components/security/device-management";
import NotificationSection from "@/features/settings/components/security/notifications";
import RecoverySection from "@/features/settings/components/security/recovery-section";

const SettingsSecurityPage = () => {
  const tSecurity = useTranslations("settings.security");
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-muted-foreground/7 p-5 rounded-xl">
        <div className="space-y-1">
          <h4 className="font-semibold">{tSecurity("title")}</h4>
          <p>{tSecurity("description")}</p>
        </div>

        <Separator className="my-4" />

        <ChangePasswordSection />

        <Separator className="my-8" />

        <TwoFactorSection />

        <Separator className="my-8" />

        <ConnectedAccountSection />

        <Separator className="my-8" />

        <DeviceManagementSection />

        <Separator className="my-8" />

        <NotificationSection />

        <Separator className="my-8" />

        <RecoverySection />
      </div>

      <DangerZoneSection />
    </div>
  );
};

export default SettingsSecurityPage;
