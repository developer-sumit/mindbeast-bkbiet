// ROUTES
import { CLUB_MEMBERS, EVENTS, HOME } from "./routes";

// ACTIVE ICONS
import { FaUsers } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdEmojiEvents } from "react-icons/md";

const ICON_SIZE = 24;

export const ROOT_LINKS = [
  {
    name: "Home",
    url: HOME,
    icon: <GoHomeFill size={ICON_SIZE} />,
  },
  {
    name: "Members",
    url: CLUB_MEMBERS,
    icon: <FaUsers size={ICON_SIZE} />,
  },
  {
    name: "Events",
    url: EVENTS,
    icon: <MdEmojiEvents size={ICON_SIZE} />,
  },
];
