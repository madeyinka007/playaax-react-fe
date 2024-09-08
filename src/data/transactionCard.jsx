import {
  ActiveTransaction,
  PublishIcon,
  WalletIcon,
} from "src/assets/SvgsIcons";

const recordCardData = [
  {
    backgroundColor: "#E8F0FB",
    icon: <ActiveTransaction />,
    title: "Categories",
    total: "12",
  },
  {
    backgroundColor: "rgba(251, 54, 64, 0.15)",
    icon: <PublishIcon />,
    title: "Active Posts",
    total: "18",
  },
  {
    backgroundColor: "rgba(243, 192, 0, 0.15)",
    icon: <WalletIcon />,
    title: "Draft",
    total: "4",
  },
];
export default recordCardData;
