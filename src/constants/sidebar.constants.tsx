import {
  Clock,
  ExclamationCircle,
  FileText,
  GraphUp,
  GridFill,
  HouseDoor,
  Square,
} from "react-bootstrap-icons";

export const SidebarElement = [
  {
    name: "Overview",
    element: [
      {
        name: "360° Dashboard",
        to: "/dashboard",
        class: false,
        icon: <GridFill size={16} color="#2B8AC9" />,
        data_view: "dashboard",
        children: null,
      },
      {
        name: "Journey Feed",
        to: "/journey",
        class: true,
        icon: <Square size={16} color="#888" />,
        data_view: "journey",
        children: null,
      },
      {
        name: "Onboarding",
        to: "/onboarding",
        class: true,
        icon: <Clock size={16} color="#2B8AC9" />,
        data_view: "onboarding",
        children: null,
      },
    ],
  },
  {
    name: "Companies",
    element: [
      {
        name: "All Companies",
        to: "/dashboard",
        class: false,
        icon: <HouseDoor size={16} color="#2B8AC9" />,
        data_view: "dashboard",
        children: null,
      },

      {
        name: "At Risk",
        to: "/at-risk",
        class: false,
        icon: <ExclamationCircle size={16} color="#b45309" />,
        data_view: "atrisk",
        children: <span className="si-bdg red">2</span>,
      },
    ],
  },
  {
    name: "Reports",
    element: [
      {
        name: "Weekly Report",
        to: "/weekly-report",
        class: false,
        icon: <FileText size={16} color="#80B500" />,
        data_view: "report",
        children: null,
      },
      {
        name: "Analytics",
        to: "/analytics",
        class: false,
        icon: <GraphUp size={16} color="#15803d" />,
        data_view: "analytics",
        children: null,
      },
    ],
  },
];
