import SettingsHeader from "@/features/settings/components/header";
import React from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SettingsHeader />
      {children}
    </div>
  );
};

export default SettingsLayout;
