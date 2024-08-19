// THIRD-PARTY
import Image from "next/image";
// CUSTOM
import { IProjectProps } from "@/types";

export default function ProjectCard({
  icon,
  name,
  description,
  version,
  url,
}: IProjectProps) {
  return (
    <div className="flex gap-3 bg-primary rounded-xl p-2">
      <Image
        src={icon}
        alt={name}
        width={50}
        height={50}
        className="rounded-3xl w-20 aspect-square object-contain"
      />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-500">{description}</p>
        <a href={url} target="_blank" className="text-blue-700 hover:underline">
          {url}
        </a>
        <p>Version: {version}</p>
      </div>
    </div>
  );
}
