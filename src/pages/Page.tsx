import {
  Box,
  Button,
  IconButton,
  Popover,
  Text,
  Thumbnail
} from "@nimbus-ds/components";
import { EllipsisIcon, QuestionCircleIcon, StarIcon } from "@nimbus-ds/icons";
import { Page as NimbusPage } from "@nimbus-ds/patterns";
import { useTranslation } from "react-i18next";
import { MenuButtonRevised } from "../components";

export default function Page({
  title,
  slug,
  subtitle
}: {
  title: string;
  slug?: string;
  subtitle?: string;
}) {
  const { t } = useTranslation(["common", "menu"]);

  const headerButtons = (
    <>
      <Button>{t("page.secondary-action")}</Button>
      <Button appearance="primary">{t("page.primary-action")}</Button>
    </>
  );

  const appPopoverContent = (
    <Box display="flex" flexDirection="column" width="100%">
      <Box
        p="4"
        width="100%"
        borderColor="neutral-surfaceHighlight"
        borderStyle="solid"
        borderWidth="none"
        borderBottomWidth="1"
        display="flex"
        gap="1"
      >
        <Text>Desarrollado por </Text>
        <Text color="primary-interactive">Titanpush</Text>
      </Box>
      <Box display="flex" gap="1" flexDirection="column" width="100%" p="2">
        <MenuButtonRevised
          startIcon={QuestionCircleIcon}
          label="Soporte Titanpush"
        />
        <MenuButtonRevised startIcon={StarIcon} label="Calificar" />
      </Box>
    </Box>
  );

  return (
    <>
      {slug && slug.startsWith("app") && (
        <Box
          display="flex"
          width="100%"
          gap="2"
          alignItems="center"
          px={{ xs: "4", lg: "6" }}
          py="1"
          borderColor="neutral-surfaceHighlight"
          borderStyle="solid"
          borderWidth="none"
          borderTopWidth="1"
          borderBottomWidth="1"
        >
          <Thumbnail src="/images/app.png" alt="App name" width="28px" />
          <Box flex="1">
            <Text fontWeight="medium">{t("menu:" + title)}</Text>
          </Box>
          <Popover
            content={appPopoverContent}
            arrow={false}
            padding="none"
            width="14rem"
            position="bottom-end"
          >
            <IconButton
              source={<EllipsisIcon />}
              backgroundColor="transparent"
              borderColor={{
                xs: "transparent",
                hover: "neutral-interactiveHover"
              }}
              size="2rem"
            />
          </Popover>
        </Box>
      )}
      <NimbusPage maxWidth="800px">
        <NimbusPage.Header
          title={t("menu:" + title)}
          subtitle={subtitle && t("menu:" + subtitle)}
          buttonStack={headerButtons}
          data-style="page-override"
        />
        <NimbusPage.Body data-style="page-override">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="4"
            borderColor="neutral-surfaceHighlight"
            backgroundColor="neutral-background"
            borderStyle="dashed"
            borderWidth="1"
            borderRadius="2"
            minHeight="375px"
            width="100%"
          >
            <Text>
              {t("page.content-placeholder")} {t("menu:" + title)}
            </Text>
          </Box>
        </NimbusPage.Body>
      </NimbusPage>
    </>
  );
}
