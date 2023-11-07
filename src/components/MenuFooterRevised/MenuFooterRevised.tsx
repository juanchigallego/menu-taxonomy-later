import React from "react";

import { MenuFooterProps } from "@nimbus-ds/patterns";
import { Box, Icon } from "@nimbus-ds/components";
import { ChevronRightIcon } from "@nimbus-ds/icons";

import { MenuButtonRevised } from "../";

type MenuFooterRevisedProps = MenuFooterProps;

const MenuFooterRevised: React.FC<MenuFooterRevisedProps> = ({
  ...rest
}: MenuFooterRevisedProps) => {
  const activeColor = rest.active ? "primary-interactive" : "primary-textHigh";
  const disabledColor = rest.disabled ? "neutral-textDisabled" : activeColor;

  return (
    <Box
      boxSizing="border-box"
      display="flex"
      flex="0 1 auto"
      paddingX="2"
      paddingY="3"
      width="100%"
    >
      <MenuButtonRevised {...rest}>
        <Icon source={<ChevronRightIcon size={14} />} color={disabledColor} />
      </MenuButtonRevised>
    </Box>
  );
};

export default MenuFooterRevised;
