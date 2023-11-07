import { Box, Button, Text, Card, Title, Icon } from "@nimbus-ds/components";
import { Page } from "@nimbus-ds/patterns";
import {
  BrowserIcon,
  ToolsIcon,
  ShoppingCartIcon,
  CodeIcon,
  ArrowsHorizontalIcon
} from "@nimbus-ds/icons";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Configurations() {
  const { t } = useTranslation(["menu", "preferences"]);
  return (
    <Page maxWidth="1200px">
      <Page.Header
        title={t("menu:sidebar.online-store-preferences")}
        data-style="page-override"
      />
      <Page.Body data-style="page-override">
        <Box
          display="grid"
          gap="4"
          gridTemplateColumns={{ xs: "1fr", lg: "repeat(4, 1fr)" }}
        >
          <Card>
            <Icon
              color="primary-textHigh"
              source={<BrowserIcon size="large" />}
            />
            <Title as="h3">{t("preferences:card.domains.title")}</Title>
            <Text>{t("preferences:card.domains.content")}</Text>
            <NavLink className="link-reset" to="domains">
              <Button>{t("preferences:card.domains.button")}</Button>
            </NavLink>
          </Card>
          <Card>
            <Icon
              color="primary-textHigh"
              source={<ToolsIcon size="large" />}
            />
            <Title as="h3">
              {t("preferences:card.under-construction.title")}
            </Title>
            <Text>{t("preferences:card.under-construction.content")}</Text>
            <NavLink className="link-reset" to="under-construction">
              <Button>{t("preferences:card.under-construction.button")}</Button>
            </NavLink>
          </Card>
          <Card>
            <Icon
              color="primary-textHigh"
              source={<ShoppingCartIcon size="large" />}
            />
            <Title as="h3">
              {t("preferences:card.checkout-options.title")}
            </Title>
            <Text>{t("preferences:card.checkout-options.content")}</Text>
            <NavLink className="link-reset" to="checkout-options">
              <Button>{t("preferences:card.checkout-options.button")}</Button>
            </NavLink>
          </Card>
          <Card>
            <Icon color="primary-textHigh" source={<CodeIcon size="large" />} />
            <Title as="h3">{t("preferences:card.external-codes.title")}</Title>
            <Text>{t("preferences:card.external-codes.content")}</Text>
            <NavLink className="link-reset" to="external-codes">
              <Button>{t("preferences:card.external-codes.button")}</Button>
            </NavLink>
          </Card>
          <Card>
            <Icon
              color="primary-textHigh"
              source={<ArrowsHorizontalIcon size="large" />}
            />
            <Title as="h3">{t("preferences:card.301.title")}</Title>
            <Text>{t("preferences:card.301.content")}</Text>
            <NavLink className="link-reset" to="301">
              <Button>{t("preferences:card.301.button")}</Button>
            </NavLink>
          </Card>
        </Box>
      </Page.Body>
    </Page>
  );
}
