import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { faqSchema } from "@/lib/schema";
import type { FAQ } from "@/types";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  variant?: "white" | "gray" | "warm";
}

export function FAQSection({
  faqs,
  title = "Questions fréquentes",
  variant = "gray",
}: FAQSectionProps) {
  return (
    <SectionContainer variant={variant}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />
      <SectionHeading title={title} />
      <div className="max-w-3xl mx-auto" data-animate="fade-up">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:text-accent-warm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
}
