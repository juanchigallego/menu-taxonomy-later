import { ReactNode, useEffect, useMemo, useState } from "react";
import { AccordionContext } from "./AccordionContext";

interface AccordionProps {
  children: ReactNode;
  selectedDefault?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, selectedDefault }) => {
  const [selected, onSelect] = useState("");

  useEffect(() => {
    if (selectedDefault !== undefined) {
      onSelect(selectedDefault);
    }
  }, [selectedDefault]);

  const context = useMemo(
    () => ({
      selected,
      onSelect
    }),
    [selected, onSelect]
  );

  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
