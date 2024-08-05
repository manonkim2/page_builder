import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@manon/react-components-accordion";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

interface IFormFieldSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormFieldSection = ({ title, children }: IFormFieldSectionProps) => {
  const { randomUUID } = new ShortUniqueId({ length: 4 });
  const [uniqueId] = useState(randomUUID());

  const itemName = `${title}-${uniqueId}`;

  return (
    <Accordion defaultActiveItems={[itemName]}>
      <AccordionItem itemName={itemName}>
        <AccordionButton>{title}</AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FormFieldSection;
