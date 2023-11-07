import { Dispatch, SetStateAction, createContext } from "react";

export interface AccordionContextProps {
  selected: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

export const AccordionContext = createContext<AccordionContextProps>(
  {} as AccordionContextProps
);
