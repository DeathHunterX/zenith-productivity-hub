import { Button } from "@/components/ui/button";
import { Calendar, Database, FileText, Globe, Mail, Slack } from "lucide-react";
import { useTranslations } from "next-intl";

const IntegrationSection = () => {
  const tIntegrations = useTranslations("integrations");

  return (
    <section
      id="integrations"
      className="py-20 px-4 bg-gray-50 dark:bg-muted/30"
    >
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {tIntegrations("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tIntegrations("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="size-16 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center">
              <Slack className="size-8 text-purple-600" />
            </div>
            <span className="text-sm font-medium">Slack</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="size-16 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center">
              <Mail className="size-8 text-blue-600" />
            </div>
            <span className="text-sm font-medium">Gmail</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="size-16 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center">
              <Calendar className="size-8 text-green-600" />
            </div>
            <span className="text-sm font-medium">Google Calendar</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="size-16 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center">
              <FileText className="size-8 text-orange-600" />
            </div>
            <span className="text-sm font-medium">Notion</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="size-16 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center">
              <Database className="size-8 text-red-600" />
            </div>
            <span className="text-sm font-medium">Airtable</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="size-16 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center">
              <Globe className="size-8 text-cyan-600" />
            </div>
            <span className="text-sm font-medium">Zoom</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="hover:bg-white dark:hover:bg-purple-600 px-4 py-2"
          >
            {tIntegrations("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
