import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionAni({
  item1,
  content1,
  item2,
  item3,
  item4,
  content2,
  content3,
  content4,
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{item1}</AccordionTrigger>
        <AccordionContent>
          <p> {content1}</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>{item2}</AccordionTrigger>
        <AccordionContent>
          <p>{content2}</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>{item3}</AccordionTrigger>
        <AccordionContent>
          <p>{content3}</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>{item4}</AccordionTrigger>
        <AccordionContent>
          <p>{content4}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
