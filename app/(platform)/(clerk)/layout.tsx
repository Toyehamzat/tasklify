import type { Metadata } from "next";
import { SiteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
};

export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-center justify-center py-36">
      {children}
    </div>
  );
}
