import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in ",
  description: "...",
};

export default function Page() {
  return <SignIn />;
}
