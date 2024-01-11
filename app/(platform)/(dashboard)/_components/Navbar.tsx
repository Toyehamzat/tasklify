import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className=" flex items-center gap-x-4 ">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button className="rounded-sm hidden md:block py-1.5 px-2 h-auto">
          Create
        </Button>
        <Button className="rounded-sm block md:hidden py-1.5 px-2 h-auto">
          <Plus />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
