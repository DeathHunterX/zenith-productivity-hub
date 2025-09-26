import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

const HeroSection = () => {
  const tHero = useTranslations("hero");
  const tStats = useTranslations("stats");
  return (
    <Fragment>
      <section className="py-20 px-4 bg-white dark:bg-background">
        <div className="container mx-auto text-center space-y-8">
          <Badge variant="secondary" className="mb-4">
            🚀 {tHero("trustedBy")}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            {tHero("title").split(",")[0]}
            <br />
            {tHero("title").split(",")[1]}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {tHero("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
            >
              {tHero("actions.startFreeTrial")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              {tHero("actions.watchDemo")}
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {tHero("highlights.freeTrialDays")}
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {tHero("highlights.noCreditCard")}
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {tHero("highlights.cancelAnytime")}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-600">
                25,000+
              </div>
              <div className="text-muted-foreground">
                {tStats("activeUsers")}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600">
                40%
              </div>
              <div className="text-muted-foreground">
                {tStats("productivityIncrease")}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">
                3.2hrs
              </div>
              <div className="text-muted-foreground">
                {tStats("dailyTimeSaved")}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600">
                98%
              </div>
              <div className="text-muted-foreground">
                {tStats("userSatisfaction")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
