import {
  HomeIcon,
  StatsIcon,
  TagIcon,
  UserIcon,
  DiscountCircleIcon,
  AppsIcon,
  EcosystemIcon,
  MobileIcon,
  StoreIcon,
  LogOutIcon,
  AppsListIcon,
  VolumeIcon,
  MoneyIcon,
  TruckIcon,
  CreditCardIcon,
  MailIcon,
  WhatsappIcon,
  GlobeIcon,
  EditIcon,
  ShoppingCartIcon,
  BoxPackedIcon,
  TiendanubeIcon,
  PlusCircleIcon
} from "@nimbus-ds/icons";

import { ReactComponent as PinterestLogo } from "../../public/images/pinterest-logo.svg";
import { ReactComponent as B2bLogo } from "../../public/images/b2b-logo.svg";

export type Subitem = Pick<Link, "label" | "href" | "badge" | "tag">;

export type Link = {
  icon?: any;
  label: string;
  href: string;
  subitems?: Subitem[];
  badge?: string;
  tag?: string;
  link?: string;
  endIcon?: any;
};

export type Route = {
  sectionTitle?: string;
  sectionLinks: Link[];
};

export type SubRoute = {
  title: string;
  subtitle: string;
  href: string;
};

export const menuRoutes: Route[] = [
  {
    sectionLinks: [
      {
        icon: HomeIcon,
        label: "sidebar.home",
        href: "/"
      },
      {
        icon: StatsIcon,
        label: "sidebar.stats",
        href: "stats/general",
        subitems: [
          { label: "sidebar.stats-payments", href: "stats/payments" },
          { label: "sidebar.stats-shipments", href: "stats/shipments" },
          { label: "sidebar.stats-sources", href: "stats/origins" }
        ]
      }
    ]
  },
  {
    sectionTitle: "sidebar.manage-title",
    sectionLinks: [
      {
        icon: ShoppingCartIcon,
        label: "sidebar.orders",
        badge: "3",
        href: "orders/order-list",
        subitems: [
          {
            label: "sidebar.orders-manual-orders",
            href: "orders/manual-orders"
          }
        ]
      },
      {
        icon: TagIcon,
        label: "sidebar.products",
        href: "products/product-list",
        subitems: [
          { label: "sidebar.products-categories", href: "products/categories" }
        ]
      },
      {
        icon: MoneyIcon,
        label: "sidebar.pago-nube",
        href: "pago-nube/payment-list",
        subitems: [
          {
            label: "sidebar.pago-nube-link",
            href: "pago-nube/payment-link",
            tag: "common.tag-new"
          }
        ]
      },
      {
        icon: BoxPackedIcon,
        label: "sidebar.envio-nube",
        href: "envio-nube/shipping-list",
        subitems: [
          { label: "sidebar.envio-nube-tags", href: "envio-nube/tags" }
        ]
      },
      {
        icon: UserIcon,
        label: "sidebar.customers",
        href: "customers/customer-list",
        subitems: [
          { label: "sidebar.customers-messages", href: "customers/messages" }
        ]
      },
      {
        icon: DiscountCircleIcon,
        label: "sidebar.promotions",
        href: "promotions/promotion-list",
        subitems: [
          { label: "sidebar.promotions-coupons", href: "promotions/coupons" },
          {
            label: "sidebar.promotions-free-shipping",
            href: "promotions/free-shipping"
          },
          { label: "sidebar.promotions-apps", href: "promotions/apps" }
        ]
      },
      {
        icon: VolumeIcon,
        label: "sidebar.marketing",
        href: "marketing",
        tag: "common.tag-new"
      }
    ]
  },
  {
    sectionTitle: "sidebar.sales-channels-title",
    sectionLinks: [
      {
        icon: MobileIcon,
        label: "sidebar.online-store",
        link: "https://www.minianima.com.ar/?ref=admin_header",
        href: "online-store/design",
        subitems: [
          { label: "sidebar.online-store-design", href: "online-store/design" },
          { label: "sidebar.online-store-pages", href: "online-store/pages" },
          { label: "sidebar.online-store-menus", href: "online-store/menus" },
          {
            label: "sidebar.online-store-filters",
            href: "online-store/filters"
          },
          {
            label: "sidebar.online-store-preferences",
            href: "online-store/settings"
          }
        ]
      },
      {
        icon: StoreIcon,
        label: "sidebar.pos",
        link: "#",
        href: "pos",
        tag: "common.tag-new"
      },
      {
        icon: TiendanubeIcon,
        label: "sidebar.nube",
        href: "nube"
      },
      {
        icon: EcosystemIcon,
        label: "sidebar.social-media",
        href: "social/facebook",
        subitems: [
          { label: "sidebar.social-media-fb", href: "social/facebook" },
          { label: "sidebar.social-media-ig", href: "social/instagram" },
          { label: "sidebar.social-media-ml", href: "social/meli" },
          { label: "sidebar.social-media-g", href: "social/google" }
        ]
      },
      {
        icon: PlusCircleIcon,
        label: "sidebar.other-channels",
        href: "other-channels",
        subitems: [
          { label: "sidebar.other-channels-app1", href: "other-channels/app-1" }
        ]
      }
    ]
  },
  {
    sectionTitle: "sidebar.apps-title",
    sectionLinks: [
      {
        icon: AppsListIcon,
        label: "sidebar.apps-list",
        href: "apps"
      },
      {
        icon: PinterestLogo,
        label: "sidebar.pinterest",
        href: "app/pinterest/title-1",
        subitems: [
          { label: "sidebar.pinterest-page1", href: "app/pinterest/title-1" },
          { label: "sidebar.pinterest-page2", href: "app/pinterest/title-2" }
        ]
      },
      {
        icon: AppsIcon,
        label: "sidebar.noovfiscal",
        href: "app/noovfiscal"
      },
      {
        icon: B2bLogo,
        label: "sidebar.b2b",
        href: "app/recursos-b2b"
      }
    ]
  }
];

export const accRoutes: Route[] = [
  {
    sectionLinks: [
      {
        label: "account.suscriptions",
        href: "account/suscriptions"
      },
      {
        label: "account.payments",
        href: "account/payments"
      },
      {
        label: "account.invoices",
        href: "account/invoices"
      }
    ]
  },
  {
    sectionTitle: "account.security-title",
    sectionLinks: [
      {
        label: "account.2fa",
        href: "account/security",
        tag: "common.tag-new"
      },
      {
        label: "account.user-roles",
        href: "users"
      }
    ]
  },
  {
    sectionTitle: "account.profile-title",
    sectionLinks: [
      {
        label: "account.profile",
        href: "account/profile"
      }
    ]
  },
  {
    sectionTitle: "account.other-stores-title",
    sectionLinks: [
      {
        label: "account.other-stores",
        href: "account/other-stores"
      }
    ]
  },
  {
    sectionLinks: [
      {
        label: "account.logout",
        href: "account/logout",
        endIcon: LogOutIcon
      }
    ]
  }
];

export const configRoutes: Route[] = [
  {
    sectionTitle: "configuration.payment-shipping-title",
    sectionLinks: [
      {
        icon: TruckIcon,
        label: "configuration.shipping-methods",
        href: "shipping-methods"
      },
      {
        icon: StoreIcon,
        label: "configuration.distribution-centers",
        href: "distribution-centers"
      },
      {
        icon: CreditCardIcon,
        label: "configuration.payment-methods",
        href: "payment-methods"
      }
    ]
  },
  {
    sectionTitle: "configuration.communication-title",
    sectionLinks: [
      {
        icon: MailIcon,
        label: "configuration.emails",
        href: "emails"
      },
      {
        icon: WhatsappIcon,
        label: "configuration.whatsapp",
        href: "whatsapp"
      }
    ]
  },
  {
    sectionTitle: "configuration.generals-title",
    sectionLinks: [
      {
        icon: GlobeIcon,
        label: "configuration.languages",
        href: "languages"
      },
      {
        icon: EditIcon,
        label: "configuration.metafields",
        href: "metafields"
      }
    ]
  }
];

export const subRoutes: SubRoute[] = [
  {
    title: "preferences.card.domains.title",
    subtitle: "preferences.card.domains.content",
    href: "online-store/settings/domains"
  },
  {
    title: "preferences.card.under-construction.title",
    subtitle: "preferences.card.under-construction.content",
    href: "online-store/settings/under-construction"
  },
  {
    title: "preferences.card.checkout-options.title",
    subtitle: "preferences.card.checkout-options.content",
    href: "online-store/settings/checkout-options"
  },
  {
    title: "preferences.card.external-codes.title",
    subtitle: "preferences.card.external-codes.content",
    href: "online-store/settings/external-codes"
  },
  {
    title: "preferences.card.301.title",
    subtitle: "preferences.card.301.content",
    href: "online-store/settings/301"
  }
];

export const routes: Route[] = [...menuRoutes, ...accRoutes, ...configRoutes];
