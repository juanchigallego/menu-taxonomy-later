import React, { ReactNode, useMemo } from "react";

import { AccordionItemContext } from "../";

interface AccordionItemProps {
  children: ReactNode;
  index: string;
  testId?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  index,
  testId
}) => {
  const context = useMemo(() => ({ index, testId }), [index, testId]);
  return (
    <AccordionItemContext.Provider value={context}>
      {children}
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
