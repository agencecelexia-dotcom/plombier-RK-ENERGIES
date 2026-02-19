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
  variant?: "white" | "gray";
}

export function FAQSection({
  faqs,
  title = "Questions frequentes",
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
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
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
