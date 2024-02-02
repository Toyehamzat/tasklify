import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition gap-x-2 hidden md:flex md:flex-row items-center ">
        <Image src="/logo.svg" alt="Logo" height={35} width={28} />
        <p className={cn("text-lg text-neutral-700 ", headingFont.className)}>
          Tasklify
        </p>
      </div>
    </Link>
  );
};
