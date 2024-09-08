import {
  AnalyticsIcon,
  AuditTrailIcon,
  DatabaseIcon,
  DispatchIcon,
  AuthorIcon,
  HomeIcon,
  InvoiceIcon,
  NotificationBellIcon,
  OrderIcon,
  SettingsIcon,
  ShipmentCalculatorIcon,
  ShipmentIcon,
  SupportIcon,
  TransactionIcon,
  PostIcon,
  CategoryIcon,
  AddPostIcon,
} from "src/assets/SvgsIcons";

const sideMenu = [
  {
    title: "Home",
    iconPath: <HomeIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/dashboard",
    subMenu: [],
  },
  {
    title: "Dispatch",
    iconPath: <DispatchIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/dispatch",
    subMenu: [],
  },
  {
    title: "Orders",
    iconPath: <OrderIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/orders",
    subMenu: [],
  },
  {
    title: "Drivers",
    iconPath: <AuthorIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/drivers",
    subMenu: [],
  },
  {
    title: "Shipments",
    iconPath: <ShipmentIcon />,
    subMenuIcon: true,
    internalTool: false,
    url: "/shipments",
    subMenu: [],
  },
  {
    title: "Database",
    iconPath: <DatabaseIcon />,
    subMenuIcon: true,
    internalTool: false,
    url: "/database",
    subMenu: [],
  },
  {
    title: "Analytics",
    iconPath: <AnalyticsIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/analytics",
    subMenu: [],
  },
  {
    title: "Support Tickets",
    iconPath: <SupportIcon />,
    subMenuIcon: false,
    internalTool: true,
    url: "/support-tickets",
    subMenu: [],
  },

  {
    title: "Invoices",
    iconPath: <InvoiceIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/invoices",
    subMenu: [],
  },
  {
    title: "Transactions",
    iconPath: <TransactionIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/transactions",
    subMenu: [],
  },

  {
    title: "Notifications",
    iconPath: <NotificationBellIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/notifications",
    subMenu: [],
  },
  {
    title: "Shipping Quote",
    iconPath: <ShipmentCalculatorIcon />,
    subMenuIcon: false,
    internalTool: false,
    url: "/shipping-quote",
    subMenu: [],
  },
  {
    title: "Audit Trail",
    iconPath: <AuditTrailIcon />,
    subMenuIcon: true,
    internalTool: false,
    url: "/audit-trail",
    subMenu: [],
  },
  {
    title: "Settings",
    iconPath: <SettingsIcon />,
    subMenuIcon: true,
    internalTool: false,
    url: "/settings",
    subMenu: [],
  },
];

export default sideMenu;

export const sidedata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "/admin/dashboard",
    child: [],
  },
  {
    title: "Posts",
    icon: <PostIcon />,
    href: "/admin/posts",
    child: [
      {
        title: "Create Post",
        icon: <AddPostIcon />,
        href: "/admin/posts/create",
      },
    ],
  },
  {
    title: "Category",
    icon: <CategoryIcon />,
    href: "/admin/category",
    child: [],
  },
  {
    title: "Author",
    icon: <AuthorIcon />,
    href: "/admin/author",
    child: [],
  },

  {
    isHeader: true,
    title: "Internal tools",
  },

  {
    title: "Notifications",
    icon: <NotificationBellIcon />,
    // href: "",
    child: [],
  },

  {
    title: " Settings",
    icon: <SettingsIcon />,
    child: [
      {
        title: "admin Settings",
        icon: <SettingsIcon />,
        href: "",
      },
    ],
  },
  {
    title: "Multi Level",
    icon: <AuditTrailIcon />,
    child: [
      {
        title: "Level 1.1",
        icon: <AuditTrailIcon />,
        href: "#",
      },
      {
        title: "Level 2",
        icon: <SettingsIcon />,
        nested: [
          {
            title: "Level-2.1",
            href: "#",
          },
          {
            title: "Level 2.2",
            href: "#",
          },
          {
            title: "Level 3",
            child: [
              {
                title: "Level 3.1",
                href: "#",
              },
              {
                title: "Level 3.2",
                href: "#",
              },
            ],
          },
        ],
      },
    ],
  },
];
