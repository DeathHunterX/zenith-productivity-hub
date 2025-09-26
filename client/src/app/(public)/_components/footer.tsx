import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const tFooter = useTranslations("footer");
  const tNavigation = useTranslations("navigation");
  return (
    <footer className="border-t py-12 px-4 bg-white dark:bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Zenith</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {tFooter("description")}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tFooter("links.product")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>{tNavigation("features")}</div>
              <div>{tNavigation("pricing")}</div>
              <div>{tNavigation("integrations")}</div>
              <div>{tFooter("links.security")}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tFooter("links.company")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>{tFooter("links.about")}</div>
              <div>{tFooter("links.blog")}</div>
              <div>{tFooter("links.careers")}</div>
              <div>{tFooter("links.contact")}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tFooter("links.support")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>{tFooter("links.helpCenter")}</div>
              <div>{tFooter("links.documentation")}</div>
              <div>{tFooter("links.community")}</div>
              <div>{tFooter("links.status")}</div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>{tFooter("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
