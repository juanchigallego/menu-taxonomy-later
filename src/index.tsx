import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Page from "./pages/Page";
import Marketing from "./pages/Marketing";
import Configurations from "./pages/Configurations";
import Home from "./pages/Home";
import Pos from "./pages/Pos";
import Billing from "./pages/Billing";
import ErrorPage from "./ErrorPage";

import {
  routes,
  Route,
  Subitem,
  Link,
  SubRoute,
  subRoutes
} from "./lib/routes";

import { DataProvider } from "./components/DataContext/DataContext";
import { DarkModeProvider } from "./components";

import "./i18n";

const generateRouterChildren = (routes: Route[]) => {
  return routes.reduce((acc: any, section: Route) => {
    const sectionRoutes = section.sectionLinks.reduce(
      (sectionAcc: any, link: Link) => {
        if (link.href) {
          sectionAcc.push({
            path: link.href,
            element: (() => {
              switch (link.label) {
                case "sidebar.marketing":
                  return <Marketing />;
                case "sidebar.pos":
                  return <Pos />;
                case "account.payments-suscriptions":
                  return <Billing />;
                default:
                  return <Page title={link.label} slug={link.href} />;
              }
            })()
          });
        }
        if (link.subitems) {
          const subRoutes = link.subitems
            .filter((subitem: Subitem) => subitem.href)
            .map((subitem: Subitem) => ({
              path: subitem.href,
              element: (() => {
                switch (subitem.label) {
                  case "sidebar.online-store-preferences":
                    return <Configurations />;
                  default:
                    return <Page title={subitem.label} slug={subitem.href} />;
                }
              })()
            }));
          sectionAcc = [...sectionAcc, ...subRoutes];
        }
        return sectionAcc;
      },
      []
    );
    return [...acc, ...sectionRoutes];
  }, []);
};

const generateSubRoutesChildren = (routes: SubRoute[]) => {
  return routes.map((route) => ({
    path: route.href,
    element: (
      <Page title={route.title} subtitle={route.subtitle} slug={route.href} />
    )
  }));
};

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      ...generateRouterChildren(routes),
      ...generateSubRoutesChildren(subRoutes)
    ]
  }
]);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
