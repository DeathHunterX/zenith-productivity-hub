"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FAQsSection = () => {
  const tFAQs = useTranslations("faq");

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-4 bg-gray-50 dark:bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{tFAQs("title")}</h2>
          <p className="text-lg text-muted-foreground">
            {tFAQs("description")}
          </p>
        </div>

        <div className="space-y-4">
          {tFAQs
            .raw("items")
            .map((faq: { question: string; answer: string }, index: number) => (
              <Card
                key={index}
                className="cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">
                    {faq.question}
                  </CardTitle>
                  {openFaq === index ? (
                    <Minus className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  )}
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
