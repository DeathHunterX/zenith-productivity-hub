import { useTranslations } from "next-intl";
import React from "react";
import Logo from "../logo";
import LanguageToggle from "../toggle/language-toggle";
import ThemeToggle from "../toggle/theme-toggle";

interface AuthWrapperProps {
  title: string;
  description: string;
  form: React.ReactNode;
  socialMedia: React.ReactNode;
}

const AuthWrapper = ({
  title,
  description,
  form,
  socialMedia,
}: AuthWrapperProps) => {
  const tAuth = useTranslations("auth");
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-white dark:bg-background flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 lg:justify-between">
          <Logo />

          <div className="">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h1>
              <p className="text-muted-foreground dark:text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {form}
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-white dark:bg-background text-muted-foreground relative z-10 px-2">
                  {tAuth("orContinueWith")}
                </span>
              </div>
              {socialMedia}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden flex-1 bg-gray-50 dark:bg-gray-900 p-8 items-center justify-center">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-8 opacity-80"></div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Achieve Perfect Work-Life Balance
          </h2>

          <p className="text-gray-600 dark:text-muted-foreground mb-8 leading-relaxed">
            Join thousands of professionals who have transformed their
            productivity and found harmony between work and personal life with
            our intelligent hub.
          </p>

          <div className="bg-white dark:bg-background p-6 rounded-lg shadow-sm">
            <div className="text-gray-600 dark:text-muted-foreground mb-4 italic">
              &quot;Balance has completely transformed how I manage my time.
              I&apos;m more productive at work and actually have time for
              myself.&quot;
            </div>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full mr-3"></div>
              <div className="text-left">
                <div className="font-medium text-gray-900 dark:text-white">
                  Sarah Chen
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Product Manager, Microsoft
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
