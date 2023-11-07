import React, { useState, useEffect, useRef } from "react";

import {
  Box,
  Button,
  Card,
  Toggle,
  ToggleProps,
  Select
} from "@nimbus-ds/components";
import { FormField, Page } from "@nimbus-ds/patterns";
import { useTranslation } from "react-i18next";

import { useData } from "../components/DataContext/DataContext";
import { useDarkMode } from "../components";

const ControlledToggle: React.FC<ToggleProps> = ({ ...rest }: ToggleProps) => {
  const [internalKey, setInternalKey] = useState(0);

  useEffect(() => {
    setInternalKey((prevKey) => prevKey + 1);
  }, [rest.active]);

  return <Toggle key={internalKey} {...rest} />;
};

const lngs: any = {
  es: { nativeName: "Español" },
  pt: { nativeName: "Português" }
};

export default function Home() {
  const { data, updateData, resetData } = useData();
  const { selectedFont } = data;

  useEffect(() => {
    document.documentElement.className = selectedFont;
  }, [selectedFont]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  const { darkMode, toggleDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation(["home", "menu"]);

  return (
    <Page maxWidth="800px">
      <Page.Header title={t("menu:sidebar.home")} data-style="page-override" />
      <Page.Body data-style="page-override">
        <Card>
          <Card.Header title={t("home:card-title")} />
          <Card.Body>
            <Box display="flex" flexDirection="column" gap="4">
              <FormField.Input
                name="name"
                label={t("home:store-name")}
                value={data.name}
                onChange={handleInputChange}
              />
              <FormField.Input
                name="email"
                label={t("home:store-email")}
                value={data.email}
                onChange={handleInputChange}
              />
              <FormField.Select
                id="change-language"
                name="change-language"
                label={t("home:change-language")}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  i18n.changeLanguage(e.target.value)
                }
              >
                {Object.keys(lngs).map((lng) => (
                  <Select.Option
                    key={lng}
                    selected={i18n.resolvedLanguage === lng}
                    label={lngs[lng].nativeName}
                    value={lng}
                  />
                ))}
              </FormField.Select>
              <FormField.Select
                id="change-font"
                name="change-font"
                label={t("home:change-font")}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  updateData({ selectedFont: e.target.value });
                }}
                value={selectedFont}
              >
                <Select.Option label="Centranube" value="centranube" />
                <Select.Option label="Inter" value="inter" />
                <Select.Option label="Geist Sans" value="geist" />
              </FormField.Select>
              <ControlledToggle
                name="Show store logo"
                active={data.logo}
                onChange={() => updateData({ logo: !data.logo })}
                label={t("home:show-logo")}
              />
              <ControlledToggle
                name="Store has Next plan"
                active={data.isNext}
                onChange={() => updateData({ isNext: !data.isNext })}
                label={t("home:plan-next")}
              />
              <ControlledToggle
                name="Switch color mode"
                active={darkMode}
                onChange={() => toggleDarkMode()}
                label={t("home:dark-mode")}
              />
            </Box>
          </Card.Body>
          <Card.Footer>
            <Button onClick={resetData}>{t("home:reset")}</Button>
          </Card.Footer>
        </Card>
      </Page.Body>
    </Page>
  );
}
