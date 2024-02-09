import type { Metadata } from "next";
import { SiteConfig } from "@/config/site";
import { Sidebar } from "../_components/Sidebar";
import { Separator } from "@/components/ui/separator";
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
    <main className="pt-20 md:pt-24 px-4  mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
}
