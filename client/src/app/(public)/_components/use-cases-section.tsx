import { Card } from "@/components/ui/card";
import { Briefcase, Building, GraduationCap, Home } from "lucide-react";
import { useTranslations } from "next-intl";

const UseCasesSection = () => {
  const tUseCases = useTranslations("useCases");
  return (
    <section className="py-20 px-4 bg-white dark:bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tUseCases("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tUseCases("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {tUseCases("items.executives.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {tUseCases("items.executives.description")}
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {tUseCases("items.freelancers.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {tUseCases("items.freelancers.description")}
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {tUseCases("items.remoteWorkers.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {tUseCases("items.remoteWorkers.description")}
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {tUseCases("items.startupTeams.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {tUseCases("items.startupTeams.description")}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
