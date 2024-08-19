// CUSTOM
import { ROOT_LINKS } from "@/constants/links";

// COMPONENTS
import RootHeader from "@/components/root/RootHeader";
import RootFooter from "@/components/root/RootFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <RootHeader links={ROOT_LINKS} />
      <main className="p-4 pt-28">{children}</main>
      <RootFooter />
    </div>
  );
}
