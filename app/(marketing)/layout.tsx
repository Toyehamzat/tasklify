import type { Metadata } from "next";
import { Navbar } from "./_components/navbar";
import { Advert } from "./_components/advert";

export const metadata: Metadata = {
  title: "Marketing ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <Advert />
      <main className="pt-52 pb-40 bg-slate-100">{children}</main>
    </div>
  );
}
