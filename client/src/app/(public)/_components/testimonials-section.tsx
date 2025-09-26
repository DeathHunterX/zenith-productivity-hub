import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const TestimonialsSection = () => {
  const tTestimonials = useTranslations("testimonials");
  return (
    <section className="py-20 px-4 bg-white dark:bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{tTestimonials("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {tTestimonials("descriptions.0")}
              </p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">
                Product Manager, Tech Startup
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {tTestimonials("descriptions.1")}
              </p>
              <div className="font-semibold">Marcus Rodriguez</div>
              <div className="text-sm text-muted-foreground">
                Marketing Director
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {tTestimonials("descriptions.2")}
              </p>
              <div className="font-semibold">Emily Watson</div>
              <div className="text-sm text-muted-foreground">
                Freelance Designer
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
