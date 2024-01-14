import type { Metadata } from "next";
import { SiteConfig } from "@/config/site";
import Sidebar from "../_components/Sidebar";
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
    <div className="pt-20 md:pt-24 transition px-6 max-w-6xl mx-auto 2xl:max-w-screen-xl">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
}
