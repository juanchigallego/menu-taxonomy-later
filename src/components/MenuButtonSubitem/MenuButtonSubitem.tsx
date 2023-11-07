import React from "react";

import { MenuButtonProps } from "@nimbus-ds/patterns";
import { Box, Text } from "@nimbus-ds/components";
import { Link } from "react-router-dom";

type MenuButtonSubitemProps = Omit<MenuButtonProps, "startIcon">;

const MenuButtonSubitem: React.FC<MenuButtonSubitemProps> = ({
  ...rest
}: MenuButtonSubitemProps) => {
  const activeColor = rest.active ? "primary-interactive" : "neutral-textHigh";
  const disabledColor = rest.disabled ? "neutral-textDisabled" : activeColor;

  return (
    <Link to={rest.href} className="link-reset">
      <Box
        {...rest}
        as={rest.as}
        type="button"
        onClick={rest.onClick}
        alignItems="center"
        textDecoration="none"
        backgroundColor={{
          xs: rest.active ? "primary-surface" : "transparent",
          hover: "primary-surface",
          active: "primary-surfaceHighlight",
          disabled: "neutral-surfaceDisabled"
        }}
        boxShadow={{
          focus: "focusRing"
        }}
        borderRadius="1"
        borderWidth="none"
        cursor={{
          xs: "pointer",
          disabled: "not-allowed"
        }}
        display="flex"
        gap="2"
        px="1-5"
        py="1"
        width="100%"
        transitionProperty="all"
        transitionDuration="base"
        transitionTimingFunction="ease-in-out"
        maxHeight="26px"
        position="relative"
      >
        <Box display="inline-flex" flex="1">
          <Text color={disabledColor} lineClamp={1}>
            {rest.label}
          </Text>
        </Box>
        {rest.children}
      </Box>
    </Link>
  );
};

export default MenuButtonSubitem;
