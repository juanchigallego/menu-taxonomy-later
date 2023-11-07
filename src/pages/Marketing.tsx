import {
  Button,
  Box,
  Text,
  Icon,
  Card,
  Title,
  Link
} from "@nimbus-ds/components";
import { Page } from "@nimbus-ds/patterns";
import {
  UserGroupIcon,
  ToolsIcon,
  MailIcon,
  CogIcon,
  StatsIcon,
  ExternalLinkIcon
} from "@nimbus-ds/icons";
import { useTranslation } from "react-i18next";

import { ReactComponent as TiendanubeLogo } from "../../public/images/tiendanube-logo.svg";
import { ReactComponent as PerfitLogo } from "../../public/images/perfit-logo.svg";

export default function Marketing() {
  const { t } = useTranslation(["menu", "marketing"]);
  return (
    <Page maxWidth="1200px">
      <Page.Header
        title={t("menu:sidebar.marketing")}
        buttonStack={
          <Button appearance="primary">{t("marketing:primary-action")}</Button>
        }
        data-style="page-override"
      >
        <Box display="flex" alignItems="center" gap="1">
          <Text>{t("marketing:subtitle")}</Text>
          <Icon source={<PerfitLogo />} />
          <Text>by</Text>
          <Icon color="primary-textHigh" source={<TiendanubeLogo />} />
        </Box>
      </Page.Header>
      <Page.Body data-style="page-override">
        <Box
          display="grid"
          gap="4"
          gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr 1fr 1fr 1fr" }}
          gridTemplateRows={{ xs: "auto auto auto auto auto", lg: "auto auto" }}
          gridTemplateAreas={{
            xs: `
              "contacts"
              "designs"
              "campaigns"
              "automations"
              "reports"
            `,
            lg: `
              "contacts contacts designs designs campaigns campaigns"
              "automations automations automations reports reports reports"
            `
          }}
        >
          <Box display="flex" gridArea="contacts">
            <Card>
              <Icon
                color="primary-textHigh"
                source={<UserGroupIcon size="large" />}
              />
              <Title as="h3">{t("marketing:card.contacts.title")}</Title>
              <Text>{t("marketing:card.contacts.content")}</Text>
              <Link
                textDecoration="none"
                as="a"
                href="https://www.myperfit.com/es/tour/listas"
                target="_blank"
              >
                {t("marketing:card.contacts.link")}
                <Icon source={<ExternalLinkIcon />} />
              </Link>
            </Card>
          </Box>
          <Box display="flex" gridArea="designs">
            <Card>
              <Icon
                color="primary-textHigh"
                source={<ToolsIcon size="large" />}
              />
              <Title as="h3">{t("marketing:card.designs.title")}</Title>
              <Text>{t("marketing:card.designs.content")}</Text>
              <Link
                textDecoration="none"
                as="a"
                href="https://www.myperfit.com/es/tour/disenos"
                target="_blank"
              >
                {t("marketing:card.designs.link")}
                <Icon source={<ExternalLinkIcon />} />
              </Link>
            </Card>
          </Box>
          <Box display="flex" gridArea="campaigns">
            <Card>
              <Icon
                color="primary-textHigh"
                source={<MailIcon size="large" />}
              />
              <Title as="h3">{t("marketing:card.campaigns.title")}</Title>
              <Text>{t("marketing:card.campaigns.content")}</Text>
              <Link
                textDecoration="none"
                as="a"
                href="https://www.myperfit.com/es/tour/campanas"
                target="_blank"
              >
                {t("marketing:card.campaigns.link")}
                <Icon source={<ExternalLinkIcon />} />
              </Link>
            </Card>
          </Box>
          <Box display="flex" gridArea="automations">
            <Card>
              <Icon
                color="primary-textHigh"
                source={<CogIcon size="large" />}
              />
              <Title as="h3">{t("marketing:card.automations.title")}</Title>
              <Text>{t("marketing:card.automations.content")}</Text>
              <Link
                textDecoration="none"
                as="a"
                href="https://www.myperfit.com/es/tour/automations"
                target="_blank"
              >
                {t("marketing:card.automations.link")}
                <Icon source={<ExternalLinkIcon />} />
              </Link>
            </Card>
          </Box>
          <Box display="flex" gridArea="reports">
            <Card>
              <Icon
                color="primary-textHigh"
                source={<StatsIcon size="large" />}
              />
              <Title as="h3">{t("marketing:card.reports.title")}</Title>
              <Text>{t("marketing:card.reports.content")}</Text>
              <Link
                textDecoration="none"
                as="a"
                href="https://www.myperfit.com/es/tour/reportes"
                target="_blank"
              >
                {t("marketing:card.reports.link")}
                <Icon source={<ExternalLinkIcon />} />
              </Link>
            </Card>
          </Box>
        </Box>
      </Page.Body>
    </Page>
  );
}
