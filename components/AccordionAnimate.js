import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionAnimate() {
    return (
      <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="item-1">
          <AccordionTrigger>Product Details</AccordionTrigger>
          <AccordionContent>
          <p> Cut from the forest viscose, this flattering midi dress
            begins at a round neckline and stream into a clean-cut cape that finishes just below the thigh, tailored with immaculate precision, it&apos;s indicative of Stella McCartney&apos;s tailoring skillset, Pair it with some stiletto heels to maximize feminine power.
        </p>
          </AccordionContent>
          </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Product Care & Fit Advise</AccordionTrigger>
          <AccordionContent>
            <p>Yes. It comes with default styles that matches the other
            components&apos; aesthetic.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Delivery & Returns</AccordionTrigger>
          <AccordionContent>
          <p>Yes. It comes with default styles that matches the other
          components&apos; aesthetic.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Contact</AccordionTrigger>
          <AccordionContent>
          <p>Yes. It comes with default styles that matches the other
          components&apos; aesthetic.</p>
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  