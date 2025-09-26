import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Calendar,
  Heart,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

const FeatureSection = () => {
  const tFeatures = useTranslations("features");
  return (
    <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tFeatures("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tFeatures("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle>
                {tFeatures("items.smartTaskManagement.title")}
              </CardTitle>
              <CardDescription>
                {tFeatures("items.smartTaskManagement.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle>
                {tFeatures("items.intelligentTimeBlocking.title")}
              </CardTitle>
              <CardDescription>
                {tFeatures("items.intelligentTimeBlocking.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle>
                {tFeatures("items.wellnessIntegration.title")}
              </CardTitle>
              <CardDescription>
                {tFeatures("items.wellnessIntegration.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle>
                {tFeatures("items.advancedAnalytics.title")}
              </CardTitle>
              <CardDescription>
                {tFeatures("items.advancedAnalytics.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle>
                {tFeatures("items.teamCollaboration.title")}
              </CardTitle>
              <CardDescription>
                {tFeatures("items.teamCollaboration.description")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <CardTitle>
                {tFeatures("items.crossPlatformSync.title")}
              </CardTitle>
              <CardDescription>
                {tFeatures("items.crossPlatformSync.description")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
