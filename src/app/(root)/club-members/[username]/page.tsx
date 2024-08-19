"use client";

// THIRD-PARTY
import Image from "next/image";
import { useEffect, useState } from "react";

// CUSTOM
import PROFILES from "@/data/profiles";
import { IProfileProps } from "@/types";

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
import ProjectCard from "@/components/shared/ProjectCard";

// CONSTANTS
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

export default function MemberProfile({
  params: { username },
}: {
  params: { username: string };
}) {
  const [user, setUser] = useState<IProfileProps | null>(null);

  useEffect(() => {
    if (username in PROFILES) {
      setUser(PROFILES[username as keyof typeof PROFILES]);
    }
  }, [!user]);

  if (!(username in PROFILES))
    return <div className="min-h-screen">User not found</div>;

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-3 w-[min(100%,1100px)] mx-auto min-h-screen">
      <div className="flex gap-3">
        <Image
          src={user.avatar}
          alt={user.name}
          width={200}
          height={200}
          className="rounded-3xl w-20 aspect-square"
        />
        <div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="font-medium text-gray-500">{user.role}</p>
        </div>
      </div>

      {user.socialLinks && (
        <div className="flex gap-2 bg-white border border-gray-300 mx-auto w-fit p-2 px-5 rounded-full">
          {Object.entries(user.socialLinks).map(
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

      {user.projects && (
        <div className="mt-3">
          <p className="text-gray-700 font-medium">
            Total Projects: {Object.values(user.projects).length}
          </p>
          <div className="grid grid-cols-1 gap-2 mt-2">
            {Object.values(user.projects).map((project, index) => (
              <ProjectCard {...project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
