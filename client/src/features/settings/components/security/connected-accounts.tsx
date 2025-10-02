import { Button } from "@/components/ui/button";
import Image from "next/image";

const ConnectedAccount = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-4">
        <h5 className="font-semibold">Linked Account</h5>
        <p className="text-sm">
          Link your account to your social media accounts to enable faster login
          methods in your account.
        </p>
      </div>

      <div className="col-span-1 md:col-span-8">
        <div className="flex flex-col gap-y-4">
          {/* Google Link Account */}
          <SocialMediaAccounts
            provider="google"
            description="Use Google for the faster login methods in your account"
          />

          {/* Github Link Account */}
          <SocialMediaAccounts
            provider="github"
            description="Use Github for the faster login methods in your account"
          />

          {/* Microsoft Link Account */}
          <SocialMediaAccounts
            provider="microsoft"
            description="Use Microsoft for the faster login methods in your account"
          />
        </div>
      </div>
    </section>
  );
};

const SocialMediaAccounts = ({
  provider,
  description,
}: {
  provider: ProviderType;
  description: string;
}) => {
  return (
    <div className="border rounded-md px-4 py-2 shadow-md">
      <div className="grid grid-cols-12 gap-x-4 items-center">
        <div className="col-span-1">
          <div className="size-10 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
            <Image
              src={`/assets/icons/${provider}.svg`}
              alt={provider}
              width={20}
              height={20}
              className="dark:invert"
            />
          </div>
        </div>

        <div className="col-span-9">
          <div className="flex flex-col gap-y-1">
            <h6 className="font-semibold">
              {provider.charAt(0).toUpperCase() + provider.slice(1)}
            </h6>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="col-span-2">
          <Button
            variant="secondary"
            className="bg-green-500 dark:bg-green-700"
          >
            Connected
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccount;
