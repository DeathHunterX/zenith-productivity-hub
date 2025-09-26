import Logo from "@/components/shared/logo";
import LanguageToggle from "@/components/shared/toggle/language-toggle";
import ThemeToggle from "@/components/shared/toggle/theme-toggle";
import { useTranslations } from "next-intl";
import Link from "next/link";

const PublicNavbar = () => {
  const tNavigation = useTranslations("navigation");
  return (
    <nav className="border-b bg-white/95 dark:bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {tNavigation("features")}
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {tNavigation("pricing")}
          </Link>
          <Link
            href="#integrations"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {tNavigation("integrations")}
          </Link>
          <Link
            href="#faqs"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {tNavigation("faqs")}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="transition-colors bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 "
          >
            {tNavigation("getStarted")}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
