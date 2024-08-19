"use client";

// THIRD-PARTY
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

// CUSTOM
import { app } from "@/config";
import { useState } from "react";

export default function RootHeader({
  links,
}: {
  links: { name: string; url: string; icon: JSX.Element }[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [dialog, setDialog] = useState(false);

  const handleDialogState = () => {
    setDialog(!dialog);
  };

  const handleClick = (path: string) => {
    router.push(path);
    handleDialogState();
  };

  return (
    <>
      <div className="fixed px-10 max-md:px-3 py-3 flex w-[90%] rounded-2xl justify-between items-center left-1/2 top-4 -translate-x-1/2 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-[6px_6px_25px_rgba(255,255,255,0.2)] border border-gray-500">
        <div className="flex items-center">
          <Image
            src={app.icon}
            alt={app.name}
            width={50}
            height={50}
            className="p-1.5 w-10 aspect-square"
          />
          <span className="font-bold text-white text-sm">{app.name}</span>
        </div>

        <div className="flex ml-3 gap-1 items-center max-md:hidden">
          {links.map((link, index) => (
            <Link key={index} href={link.url}>
              <div
                className={`flex gap-1 items-center px-3 py-2 rounded-full hover:text-white ${
                  link.url === pathname
                    ? "text-white bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80"
                    : "text-gray-400 bg-transparent"
                }`}
              >
                {link.icon}
                <span className="text-sm font-semibold">{link.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="hidden max-md:flex text-white bg-primary p-3 rounded-xl"
            onClick={handleDialogState}
          >
            <RxHamburgerMenu />
          </button>
          <div className="flex items-center max-md:hidden px-3 py-2 bg-gradient-to-r from-cyan-800 to-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-[6px_6px_25px_rgba(255,255,255,0.2)] border w-max rounded-xl">
            <span className="text-white font-bold">Join Now</span>
          </div>
        </div>
      </div>

      {dialog && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full z-[9999] bg-[#00000070] bg-clip-padding backdrop-filter backdrop-blur-sm">
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={handleDialogState}
          ></div>

          <div className="absolute flex flex-col gap-3 py-5 w-[min(80%,450px)] px-8 items-center shadow-lg bg-primary rounded-3xl">
            <Image
              className="w-[200px] h-[80px] object-contain self-center"
              src={app.icon}
              alt={app.name}
              width={100}
              height={100}
            />
            {links.map((link, index) => (
              <button
                className={`flex gap-2 w-full text-lg items-center justify-center p-4 rounded-xl hover:bg-gray-600 hover:text-white ${
                  pathname === link.url || pathname === `${link.url}/`
                    ? "text-white bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80"
                    : "text-gray-400 bg-transparent"
                }`}
                key={index}
                onClick={() => handleClick(link.url)}
              >
                <div>{link.icon}</div>
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
