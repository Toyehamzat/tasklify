import type { Metadata } from "next";
import { SiteConfig } from "@/config/site";
import Navbar from "../_components/Navbar";
export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
};

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20">
      <Navbar />
      {children}
    </div>
  );
}
