import { createContext } from "react";

export interface AccordionItemContextProps {
  index: string;
  testId?: string;
}

export const AccordionItemContext = createContext<AccordionItemContextProps>(
  {} as AccordionItemContextProps
);
