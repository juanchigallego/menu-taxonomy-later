import { useState } from "react";
import { MenuSectionProps } from "@nimbus-ds/patterns";
import { Box, Icon, Text } from "@nimbus-ds/components";
import { ChevronDownIcon, ChevronRightIcon } from "@nimbus-ds/icons";

type MenuSectionRevisedProps = MenuSectionProps & {
  accordion?: boolean;
};

const MenuSectionRevised: React.FC<MenuSectionRevisedProps> = ({
  accordion = false,
  ...rest
}: MenuSectionRevisedProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Box {...rest} display="flex" flexDirection="column" gap="1-5">
      {rest.title && (
        <Box pl="2" pt="2">
          <Box
            p="none"
            as={accordion ? "button" : "div"}
            onClick={accordion ? () => setOpen(!open) : undefined}
            backgroundColor={{
              xs: "transparent",
              hover: accordion ? "neutral-surface" : "transparent"
            }}
            borderRadius="1"
            borderColor="transparent"
            cursor={accordion ? "pointer" : "inherit"}
            transitionDuration="fast"
            transitionTimingFunction="ease-in-out"
            transitionProperty="background-color"
            display="flex"
            alignItems="center"
            gap="1"
          >
            {accordion && (
              <Icon
                source={
                  open ? (
                    <ChevronDownIcon size={10} />
                  ) : (
                    <ChevronRightIcon size={10} />
                  )
                }
              />
            )}
            <Text fontSize="caption" color="neutral-textDisabled">
              {rest.title}
            </Text>
          </Box>
        </Box>
      )}
      {open && rest.children}
    </Box>
  );
};

export default MenuSectionRevised;
