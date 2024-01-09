import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "platform ",
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
