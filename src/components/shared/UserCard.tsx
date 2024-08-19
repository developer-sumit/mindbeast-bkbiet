// THIRD-PARTY
import { IUserCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

// ICONS
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const ICON_SIZE = 24;
const ICONS: { [key: string]: { icon: JSX.Element; color: string } } = {
  github: {
    icon: <FaGithub size={ICON_SIZE} />,
    color: "text-gray-800 hover:bg-gray-200",
  },
  instagram: {
    icon: <FaInstagramSquare size={ICON_SIZE} />,
    color: "text-pink-700 hover:bg-pink-200",
  },
  linkedin: {
    icon: <FaLinkedin size={ICON_SIZE} />,
    color: "text-blue-700 hover:bg-blue-200",
  },
  facebook: {
    icon: <FaFacebookSquare size={ICON_SIZE} />,
    color: "text-blue-700 hover:bg-blue-200",
  },
  twitter: {
    icon: <FaTwitter size={ICON_SIZE} />,
    color: "text-blue-400 hover:bg-blue-200",
  },
  youtube: {
    icon: <FaYoutube size={ICON_SIZE} />,
    color: "text-red-700 hover:bg-red-200",
  },
  discord: {
    icon: <FaDiscord size={ICON_SIZE} />,
    color: "text-indigo-700 hover:bg-indigo-200",
  },
};

export default function UserCard({
  name,
  href,
  avatar,
  role,
  socialLinks,
}: IUserCardProps) {
  return (
    <Link href={`/club-members/${name.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="flex bg-white border border-gray-400 gap-2 p-3 rounded-3xl">
        <Image
          src={avatar}
          alt={name.toLowerCase().replace(/\s/g, "-") + "-avatar"}
          width={100}
          height={100}
          className="rounded-3xl h-full aspect-square object-cover"
        />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p className="text-sm font-medium text-primary">{role}</p>
          {socialLinks && (
            <div className="flex mt-[6px]">
              {Object.entries(socialLinks || {}).map(
                ([key, value], index) =>
                  key.toLowerCase() in ICONS && (
                    <a
                      key={index}
                      target="_blank"
                      className={`text-sm ${
                        ICONS[key.toLowerCase()].color
                      } p-2 rounded-lg`}
                      href={value}
                    >
                      {ICONS[key.toLowerCase()].icon}
                    </a>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
