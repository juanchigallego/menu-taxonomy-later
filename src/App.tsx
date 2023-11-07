import React, { useState, Suspense } from "react";

import "./styles.css";
import "@nimbus-ds/styles/dist/index.css";
import "@nimbus-ds/styles/dist/themes/dark.css";

import { ThemeProvider } from "@nimbus-ds/styles";
import { AppShell, NavTabs } from "@nimbus-ds/patterns";
import {
  Box,
  Button,
  Icon,
  Popover,
  Text,
  IconButton,
  Thumbnail,
  Tag,
  Sidebar
} from "@nimbus-ds/components";
import {
  QuestionCircleIcon,
  NotificationIcon,
  UserIcon,
  HomeIcon,
  MenuIcon,
  MoneyIcon,
  TagIcon,
  ChevronLeftIcon
} from "@nimbus-ds/icons";
import {
  Outlet,
  useLocation,
  useMatch,
  useNavigate,
  NavLink
} from "react-router-dom";
import {
  AppMenu,
  Avatar,
  MenuButtonRevised,
  MenuSectionRevised,
  useDarkMode
} from "./components";

import { accRoutes } from "./lib/routes";
import { useData } from "./components/DataContext/DataContext";
import { useIsMobile } from "./hooks";
import { UniversityIcon } from "@nimbus-ds/icons";
import { useTranslation } from "react-i18next";

const EmptyPopover: React.FC = ({
  icon: IconSrc,
  title,
  text
}: {
  icon: any;
  title: string;
  text: string;
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="120px"
      width="100%"
    >
      <Icon source={<IconSrc />} />
      <Text fontSize="caption" fontWeight="medium" textAlign="center">
        {title}
      </Text>
      <Text fontSize="caption" textAlign="center">
        {text}
      </Text>
    </Box>
  );
};

function App() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { data } = useData();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();
  const { t } = useTranslation(["common", "menu"]);
  const pathLevels = location.pathname.split("/").filter(Boolean);

  const showBackButton = pathLevels.length > 2;

  const computeBackUrl = () => {
    pathLevels.pop();
    return "/" + pathLevels.join("/");
  };

  const accountPopover = (
    <Box display="flex" flexDirection="column" gap="4" width="100%">
      <Box pt="2" px="2" gap="2" display="flex" flexDirection="column">
        <Box display="flex" gap="2" alignItems="flex-start">
          <Box
            width="32px"
            height="32px"
            borderRadius="2"
            backgroundColor="neutral-surfaceHighlight"
            display="flex"
            alignItems="center"
            justifyContent="center"
            minWidth="32px"
          >
            {data.logo ? (
              <Thumbnail
                width="32px"
                alt={data.name}
                src="/images/minianima.jpg"
              />
            ) : (
              <Icon source={<UserIcon />} />
            )}
          </Box>
          <Box display="flex" flexDirection="column">
            <Text color="neutral-textHigh" fontWeight="medium" lineClamp={1}>
              {t("menu:account.title")}
            </Text>
            <Text fontSize="caption" lineClamp={1}>
              {data.email}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="2">
        {accRoutes.map((section, index) => {
          return (
            <MenuSectionRevised
              key={index}
              title={section.sectionTitle && t("menu:" + section.sectionTitle)}
            >
              {section.sectionLinks.map((item) => {
                const isActive = item.href && useMatch(item.href);
                const { endIcon: IconSrc } = item;
                return (
                  <MenuButtonRevised
                    key={item.label}
                    href={item.href}
                    label={t("menu:" + item.label)}
                    startIcon={item.icon}
                    active={isActive}
                  >
                    {item.tag && (
                      <Tag appearance="primary">{t("menu:" + item.tag)}</Tag>
                    )}
                    {item.endIcon && (
                      <Icon
                        color="primary-textHigh"
                        source={<IconSrc size={12} />}
                      />
                    )}
                  </MenuButtonRevised>
                );
              })}
            </MenuSectionRevised>
          );
        })}
      </Box>
    </Box>
  );

  const backButton = (
    <NavLink to={computeBackUrl()} className="link-reset">
      <Button appearance="transparent" data-style="button-override">
        <Icon source={<ChevronLeftIcon />} />
        Volver
      </Button>
    </NavLink>
  );

  const headerButtons = (
    <>
      <Box display="flex" gap={{ xs: "1", md: "2" }}>
        <Popover
          content={
            <EmptyPopover
              icon={UniversityIcon}
              title={t("common:popovers.enp.title")}
              text={t("common:popovers.enp.content")}
            />
          }
          arrow={false}
          padding="small"
          width="18rem"
        >
          <IconButton
            size="2.125rem"
            source={<UniversityIcon size={18} />}
            backgroundColor="transparent"
            borderColor={{
              xs: "transparent",
              hover: "neutral-interactiveHover"
            }}
            data-style="icon-button-override"
          />
        </Popover>
        <Popover
          content={
            <EmptyPopover
              icon={NotificationIcon}
              title={t("common:popovers.news.title")}
              text={t("common:popovers.news.content")}
            />
          }
          arrow={false}
          padding="small"
          width="18rem"
        >
          <IconButton
            size="2.125rem"
            source={<NotificationIcon size={18} />}
            backgroundColor="transparent"
            borderColor={{
              xs: "transparent",
              hover: "neutral-interactiveHover"
            }}
            data-style="icon-button-override"
          />
        </Popover>
        <Popover
          content={
            <EmptyPopover
              icon={QuestionCircleIcon}
              title={t("common:popovers.support.title")}
              text={t("common:popovers.support.content")}
            />
          }
          arrow={false}
          padding="small"
          width="18rem"
        >
          <IconButton
            size="2.125rem"
            source={<QuestionCircleIcon size={18} />}
            backgroundColor="transparent"
            borderColor={{
              xs: "transparent",
              hover: "neutral-interactiveHover"
            }}
            data-style="icon-button-override"
          />
        </Popover>
      </Box>
      <Popover
        content={accountPopover}
        arrow={false}
        padding="small"
        width="18rem"
        position="bottom-end"
      >
        <Button appearance="transparent" data-style="button-override">
          <Avatar name={data.name} />
          {!isMobile && (
            <Box maxWidth="270px">
              <Text fontWeight="regular" lineClamp={1}>
                {data.name}
              </Text>
            </Box>
          )}
        </Button>
      </Popover>
    </>
  );

  return (
    <>
      <AppShell menu={<AppMenu />} data-style="menu-override">
        <AppShell.Header
          leftSlot={showBackButton && backButton}
          rightSlot={headerButtons}
          px="2"
          py="2"
        />
        <Outlet />
      </AppShell>
      {isMobile && (
        <NavTabs>
          <NavTabs.Item
            active={location.pathname === "/"}
            ariaLabel="Inicio"
            icon={<HomeIcon size="medium" />}
            onClick={() => navigate("/")}
          />
          <NavTabs.Item
            active={location.pathname === "/orders/order-list"}
            badge
            ariaLabel="Ventas"
            icon={<MoneyIcon size="medium" />}
            onClick={() => navigate("orders/order-list")}
          />
          <NavTabs.Item
            active={location.pathname === "/products/product-list"}
            ariaLabel="Productos"
            icon={<TagIcon size="medium" />}
            onClick={() => navigate("products/product-list")}
          />
          <NavTabs.Item
            ariaLabel="Menu"
            icon={<MenuIcon size="medium" />}
            onClick={() => setOpenSideMenu(!openSideMenu)}
          />
        </NavTabs>
      )}
      <Sidebar
        onRemove={() => setOpenSideMenu(false)}
        open={openSideMenu}
        maxWidth="16rem"
      >
        <AppMenu />
      </Sidebar>
    </>
  );
}

export default function WrappedApp() {
  const { data } = useData();
  const { darkMode } = useDarkMode();
  const currentTheme = data.isNext
    ? darkMode
      ? "next-dark"
      : "next"
    : darkMode
    ? "dark"
    : "base";

  return (
    <ThemeProvider theme={currentTheme}>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </ThemeProvider>
  );
}
