import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CTASection = () => {
  const tCTA = useTranslations("cta");
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">{tCTA("title")}</h2>
        <p className="text-xl mb-8 opacity-90">{tCTA("description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            {tCTA("actions.startFreeTrial")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent dark:border-none dark:hover:bg-white dark:hover:text-black"
          >
            {tCTA("actions.scheduleDemo")}
          </Button>
        </div>
        <p className="text-sm mt-4 opacity-75">
          {tCTA("highlights.noCreditCard")} • {tCTA("highlights.freeTrialDays")}{" "}
          • {tCTA("highlights.cancelAnytime")}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
