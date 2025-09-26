import { Brain, Shield, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const WhyDifferenceSection = () => {
  const tWhyDifferent = useTranslations("whyDifferent");
  return (
    <section className="py-16 px-4 bg-white dark:bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tWhyDifferent("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tWhyDifferent("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              {tWhyDifferent("items.aiIntelligence.title")}
            </h3>
            <p className="text-muted-foreground">
              {tWhyDifferent("items.aiIntelligence.description")}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              {tWhyDifferent("items.privacyFirst.title")}
            </h3>
            <p className="text-muted-foreground">
              {tWhyDifferent("items.privacyFirst.description")}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              {tWhyDifferent("items.provenResults.title")}
            </h3>
            <p className="text-muted-foreground">
              {tWhyDifferent("items.provenResults.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferenceSection;
