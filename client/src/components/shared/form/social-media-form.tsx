"use client";
import { baseConfig } from "@/common/config";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

import Image from "next/image";

const SocialMediaForm = () => {
  const tSocialMedia = useTranslations("auth.signIn.socialMedia");
  const signInWithOAuth = (provider: ProviderType) => {
    window.location.href = `${baseConfig.API_URL}/auth/${provider}/login`;
  };
  return (
    <div className="flex flex-col gap-2.5">
      <Button
        className="min-h-12 rounded bg-gray-100 dark:bg-gray-900 px-4 py-3.5 text-gray-900 dark:text-white hover:bg-gray-300 cursor-pointer"
        onClick={() => signInWithOAuth("google")}
      >
        <Image
          src="assets/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain dark:invert"
        />
        <span>{tSocialMedia("google")}</span>
      </Button>

      <Button
        className="min-h-12 rounded bg-gray-100 dark:bg-gray-900 px-4 py-3.5 text-gray-900 dark:text-white hover:bg-gray-300 cursor-pointer"
        onClick={() => signInWithOAuth("github")}
      >
        <Image
          src="assets/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain dark:invert"
        />
        <span>{tSocialMedia("github")}</span>
      </Button>
    </div>
  );
};

export default SocialMediaForm;
