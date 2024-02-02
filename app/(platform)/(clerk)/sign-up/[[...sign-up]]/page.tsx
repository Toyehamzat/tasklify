import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up ",
  description: "...",
};
export default function SignUpPage() {
  return <SignUp />;
}
