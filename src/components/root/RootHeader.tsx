"use client";

// THIRD-PARTY
import Image from "next/image";
import { usePathname } from "next/navigation";

// CUSTOM
import { app } from "@/config";
import Link from "next/link";

export default function RootHeader({
  links,
}: {
  links: { name: string; url: string; icon: JSX.Element }[];
}) {
  const pathname = usePathname();

  return (
    <div className="fixed flex left-1/2 top-4 w-max -translate-x-1/2 z-50 bg-primary rounded-full py-2 px-5">
      <Image src={app.icon} alt={app.name} width={50} height={50} className="p-1.5 rounded-full bg-white" />
      <div className="flex ml-3 gap-4 items-center">
        {links.map((link, index) => (
          <Link key={index} href={link.url}>
            <div
              className={`flex gap-1 items-center px-3 py-2 rounded-2xl hover:text-primary text-lg font-bold ${
                link.url === pathname
                  ? "text-gray-700 bg-white"
                  : "text-white bg-transparent"
              }`}
            >
              {link.icon}
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
