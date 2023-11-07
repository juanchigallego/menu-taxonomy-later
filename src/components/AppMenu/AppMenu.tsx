import React, { useEffect, useState } from "react";

import { Menu } from "@nimbus-ds/patterns";
import {
  Badge,
  Box,
  Icon,
  IconButton,
  Tag,
  Title,
  Tooltip
} from "@nimbus-ds/components";
import { ChevronLeftIcon, CogIcon, ExternalLinkIcon } from "@nimbus-ds/icons";
import { useTranslation } from "react-i18next";

import { ReactComponent as TiendanubeLogo } from "../../../public/images/tiendanube-logo.svg";
import { ReactComponent as EvolucionLogo } from "../../../public/images/evolucion-logo.svg";
import { ReactComponent as NuvemshopLogo } from "../../../public/images/nuvemshop-logo.svg";
import { ReactComponent as NextLogo } from "../../../public/images/next-logo.svg";
import {
  AccordionItem,
  AccordionWrapper,
  AppMenuWithSpotlight,
  MenuButtonRevised as MenuButton,
  MenuButtonAccordionRevised as MenuButtonAccordion,
  MenuButtonSubitem,
  MenuFooterRevised as MenuFooter,
  MenuSectionRevised as MenuSection
} from "..";
import { useData } from "../DataContext/DataContext";
import {
  Subitem,
  Link as LinkType,
  menuRoutes,
  configRoutes,
  Route
} from "../../lib/routes";
import { useLocation, Link } from "react-router-dom";

const ExternalLink: React.FC = ({
  link,
  label
}: {
  link: string;
  label: string;
}) => {
  return (
    <Box position="absolute" zIndex="100" top="2px" right="8px">
      <Link to={link} target="_blank">
        <Tooltip content={`Ir a ${label.toLowerCase()}`} position="right">
          <IconButton
            as="div"
            size="1.125rem"
            source={<ExternalLinkIcon size={10} />}
          />
        </Tooltip>
      </Link>
    </Box>
  );
};

const AppMenu: React.FC = () => {
  const location = useLocation();
  const [hover, setHover] = useState<Record<string, boolean>>({});
  const [showConfigurations, setShowConfigurations] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(
    undefined
  );
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
  const [activeSubitem, setActiveSubitem] = useState<string | undefined>(
    undefined
  );
  const { data } = useData();
  const { t, i18n } = useTranslation(["menu"]);

  const allMenuRoutes: Route[] = [...menuRoutes, ...configRoutes];
  const accordionItems = allMenuRoutes.flatMap((route) => route.sectionLinks);
  const accordionSubitems = accordionItems
    .flatMap((item) => item.subitems)
    .filter((item) => item !== undefined);

  useEffect(() => {
    console.log("location pathname", location.pathname);
    if (location.pathname === "/") {
      setActiveItem("/");
      setOpenAccordion("/");
      return;
    }
    const foundItem: LinkType | undefined = accordionItems.find(
      (item) =>
        item.href &&
        (location.pathname === `/${item.href}` ||
          location.pathname.startsWith(`/${item.href}/`))
    );
    const foundSubitem: Subitem | undefined = accordionSubitems.find(
      (item) =>
        item?.href &&
        (location.pathname === `/${item.href}` ||
          location.pathname.startsWith(`/${item.href}/`))
    );

    if (foundItem) {
      setOpenAccordion(foundItem.href.split("/")[0]);
      setActiveItem(foundItem.href);
      setActiveSubitem(undefined);
    } else if (foundSubitem) {
      setOpenAccordion(foundSubitem.href.split("/")[0]);
      setActiveItem(undefined);
      setActiveSubitem(foundSubitem.href);
    }
  }, [location.pathname, accordionItems, accordionSubitems]);

  const appLogo =
    i18n.resolvedLanguage === "es" ? (
      data.isNext ? (
        <EvolucionLogo />
      ) : (
        <TiendanubeLogo />
      )
    ) : data.isNext ? (
      <NextLogo />
    ) : (
      <NuvemshopLogo />
    );

  const configMenuContent = (
    <>
      <Menu.Header pl="2">
        <Box display="flex" gap="1" alignItems="center">
          <IconButton
            source={<ChevronLeftIcon />}
            onClick={() => setShowConfigurations(false)}
            size="1.25rem"
            backgroundColor="transparent"
            borderColor="transparent"
          />
          <Title as="h5">{t("configuration.title")}</Title>
        </Box>
      </Menu.Header>
      <Menu.Body pt="0">
        {configRoutes.map((section, index) => {
          return (
            <MenuSection key={index} title={t(section.sectionTitle)} accordion>
              {section.sectionLinks.map((item) => {
                const isActive = item.href === activeItem;
                let childComponents;
                if (item.tag && item.link) {
                  childComponents = hover[item.label] ? (
                    <ExternalLink label={t(item.label)} link={item.link} />
                  ) : (
                    <Tag appearance="primary">{t(item.tag)}</Tag>
                  );
                } else if (item.tag) {
                  childComponents = (
                    <Tag appearance="primary">{t(item.tag)}</Tag>
                  );
                }
                return (
                  <MenuButton
                    key={item.label}
                    href={item.href}
                    label={t(item.label)}
                    startIcon={item.icon}
                    active={isActive}
                    onClick={() => setOpenAccordion(item.href)}
                    onMouseEnter={() => {
                      setHover((prev) => ({
                        ...prev,
                        [item.label]: true
                      }));
                    }}
                    onMouseLeave={() =>
                      setHover((prev) => ({
                        ...prev,
                        [item.label]: false
                      }))
                    }
                  >
                    {childComponents}
                  </MenuButton>
                );
              })}
            </MenuSection>
          );
        })}
      </Menu.Body>
    </>
  );

  const mainMenuContent = (
    <>
      <Menu.Header>
        <Box
          display="flex"
          gap="2"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
        >
          <Icon source={appLogo} />
        </Box>
      </Menu.Header>
      <Menu.Body pt="0">
        <AccordionWrapper selectedDefault={openAccordion}>
          {menuRoutes.map((section, index) => {
            return (
              <MenuSection
                key={index}
                title={t(section.sectionTitle)}
                accordion
              >
                {section.sectionLinks.map((item) => {
                  const isActive = item.href === activeItem;
                  if (item.subitems) {
                    return (
                      <AccordionItem
                        index={item.href.split("/")[0]}
                        key={item.label}
                      >
                        <MenuButtonAccordion
                          href={item.href}
                          active={isActive}
                          contentid={`content-${item.label}`}
                          onMouseEnter={() =>
                            setHover((prev) => ({
                              ...prev,
                              [item.label]: true
                            }))
                          }
                          onMouseLeave={() =>
                            setHover((prev) => ({
                              ...prev,
                              [item.label]: false
                            }))
                          }
                          menuButton={{
                            id: `control-${item.label}`,
                            startIcon: item.icon,
                            label: t(item.label),
                            children: [
                              item.badge ? (
                                <Badge
                                  appearance="primary"
                                  theme="surface"
                                  count={item.badge}
                                />
                              ) : null,
                              item.tag && !item.link ? (
                                <Tag appearance="primary">{t(item.tag)}</Tag>
                              ) : null,
                              item.tag && item.link && !hover[item.label] ? (
                                <Tag appearance="primary">{t(item.tag)}</Tag>
                              ) : null,
                              item.tag && item.link && hover[item.label] ? (
                                <ExternalLink
                                  label={t(item.label)}
                                  link={item.link}
                                />
                              ) : null,
                              item.link && !item.tag
                                ? hover[item.label] && (
                                    <ExternalLink
                                      label={t(item.label)}
                                      link={item.link}
                                    />
                                  )
                                : null
                            ],
                            "aria-controls": `content-${item.label}`
                          }}
                        >
                          {item.subitems.map((subitem) => {
                            const isActive = subitem.href === activeSubitem;
                            return (
                              <MenuButtonSubitem
                                key={subitem.label}
                                label={t(subitem.label)}
                                href={subitem.href}
                                active={isActive}
                                children={
                                  subitem.tag && (
                                    <Tag appearance="primary">
                                      {t(subitem.tag)}
                                    </Tag>
                                  )
                                }
                              />
                            );
                          })}
                        </MenuButtonAccordion>
                      </AccordionItem>
                    );
                  } else {
                    let childComponents;
                    if (item.tag && item.link) {
                      childComponents = hover[item.label] ? (
                        <ExternalLink label={t(item.label)} link={item.link} />
                      ) : (
                        <Tag appearance="primary">{t(item.tag)}</Tag>
                      );
                    } else if (item.tag) {
                      childComponents = (
                        <Tag appearance="primary">{t(item.tag)}</Tag>
                      );
                    }
                    return (
                      <MenuButton
                        key={item.label}
                        href={item.href}
                        label={t(item.label)}
                        startIcon={item.icon}
                        active={isActive}
                        onClick={() => setOpenAccordion(item.href)}
                        onMouseEnter={() => {
                          setHover((prev) => ({
                            ...prev,
                            [item.label]: true
                          }));
                        }}
                        onMouseLeave={() =>
                          setHover((prev) => ({
                            ...prev,
                            [item.label]: false
                          }))
                        }
                      >
                        {childComponents}
                      </MenuButton>
                    );
                  }
                })}
              </MenuSection>
            );
          })}
        </AccordionWrapper>
      </Menu.Body>
      <MenuFooter
        label="Configuración"
        startIcon={CogIcon}
        onClick={() => setShowConfigurations(true)}
      />
    </>
  );

  const menuContent = showConfigurations ? configMenuContent : mainMenuContent;

  return data.isNext ? (
    <AppMenuWithSpotlight>{menuContent}</AppMenuWithSpotlight>
  ) : (
    <Menu>{menuContent}</Menu>
  );
};

export default AppMenu;
