import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
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
      <div className="h-full">
        {children}
        <Toaster />
      </div>
    </ClerkProvider>
  );
}
