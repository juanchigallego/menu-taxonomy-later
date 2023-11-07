import React, { useMemo } from "react";

import { MenuButtonAccordionBaseProps } from "@nimbus-ds/patterns";
import { Box } from "@nimbus-ds/components";
import {
  MenuButtonRevised as MenuButton,
  useAccordion,
  useAccordionItem
} from "..";

type MenuButtonAccordionRevisedProps = MenuButtonAccordionBaseProps & {
  href?: string;
};

const MenuButtonAccordionRevised: React.FC<MenuButtonAccordionRevisedProps> = ({
  href,
  ...rest
}: MenuButtonAccordionRevisedProps) => {
  const { selected } = useAccordion();
  const { index } = useAccordionItem();

  const isOpen = useMemo(() => selected === index, [selected, index]);

  const getBackgroundColor = () => {
    if (rest.active) {
      return "primary-surface";
    }
    return isOpen ? "neutral-surface" : "transparent";
  };
  return (
    <Box
      {...rest}
      as={rest.as}
      backgroundColor={getBackgroundColor()}
      borderRadius="2"
      zIndex={isOpen ? "100" : undefined}
      textDecoration="none"
    >
      <MenuButton
        {...rest.menuButton}
        //onClick={handleSelect}
        active={rest.active}
        aria-expanded={isOpen}
        href={href}
      />
      {isOpen && (
        <Box
          id="content-1"
          aria-hidden={!isOpen}
          height={isOpen ? "auto" : "0"}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          gap="0-5"
          pl="6"
          pb="1"
          pr="1"
        >
          {rest.children}
        </Box>
      )}
    </Box>
  );
};

export default MenuButtonAccordionRevised;
