import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="relative flex items-center flex-col justify-center overflow-hidden">
      <div
        className={cn(
          "flex items-center justify-center flex-col relative z-10",
          headingFont.className
        )}
      >
        <div className="mb-4 flex flex-row items-center border shadow-sm p-4 rounded-full bg-amber-100 text-amber-700 uppercase font-semibold">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl  text-neutral-800 mb-6 text-center">
          Tasklify helps team move.
        </h1>
        <div className="text-2xl  text-center md:text-6xl bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-3 p-1 rounded-md pb-1 w-fit">
          Work forward.
        </div>
        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is unique -
          accomplish it all with Tasklify.
        </div>
        <Button
          className="mt-6 bg-blue-600 p-5 shadow-md hover:bg-blue-900 transition"
          size="sm"
          asChild
        >
          <Link href="/sign-up">Get Taskify for free</Link>
        </Button>
      </div>
    </main>
  );
}
