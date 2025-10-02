import { Switch } from "@/components/ui/switch";

const TwoFactorSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Two-Factor Authentication</h5>
        <p className="text-sm">
          Enable two-factor authentication to secure your account. Along with
          your password, you&apos;ll need to enter a code to access your
          account.
        </p>
      </div>

      <div className="col-span-1 md:col-span-8">
        <div className="flex items-center justify-end h-full">
          <Switch />
        </div>
      </div>
    </section>
  );
};

export default TwoFactorSection;
