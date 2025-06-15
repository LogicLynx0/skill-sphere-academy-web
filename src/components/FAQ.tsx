
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQ = ({ title, subtitle, faqs }: FAQProps) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border rounded-lg px-6 animate-fade-in card-hover hover:shadow-md transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors duration-300">
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4 slide-in-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
