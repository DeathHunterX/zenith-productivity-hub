import { Clock, Headphones, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

const SecuritySection = () => {
  const tSecurity = useTranslations("securitySupport");
  return (
    <section id="security" className="py-20 px-4 bg-gray-50 dark:bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tSecurity("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tSecurity("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              {tSecurity("details.security")}
            </h3>
            <p className="text-muted-foreground">
              {tSecurity("details.security")}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              {tSecurity("details.uptime")}
            </h3>
            <p className="text-muted-foreground">
              {tSecurity("details.uptime")}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              {tSecurity("details.support")}
            </h3>
            <p className="text-muted-foreground">
              {tSecurity("details.support")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
