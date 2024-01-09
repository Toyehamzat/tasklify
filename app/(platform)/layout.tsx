import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "platform ",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
}
