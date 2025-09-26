import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const PricingSection = () => {
  const tPricing = useTranslations("pricing");
  return (
    <section id="pricing" className="py-20 px-4 bg-white dark:bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tPricing("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tPricing("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-center">
                {tPricing("plans.starter.name")}
              </CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="text-center">
                {tPricing("plans.starter.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.starter.features.0")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.starter.features.1")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.starter.features.2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.starter.features.3")}
                  </span>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                {tPricing("actions.startFreeTrial")}
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border-2 border-cyan-500">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                {tPricing("mostPopular")}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-center">
                {tPricing("plans.professional.name")}
              </CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold">$19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="text-center">
                {tPricing("plans.professional.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.professional.features.0")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.professional.features.1")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.professional.features.2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.professional.features.3")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.professional.features.4")}
                  </span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
                {tPricing("actions.startFreeTrial")}
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-center">
                {tPricing("plans.enterprise.name")}
              </CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="text-center">
                {tPricing("plans.enterprise.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.enterprise.features.0")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.enterprise.features.1")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.enterprise.features.2")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.enterprise.features.3")}
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">
                    {tPricing("plans.enterprise.features.4")}
                  </span>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                {tPricing("actions.contactSales")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
