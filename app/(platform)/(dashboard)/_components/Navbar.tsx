import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 px-4 md:px-10 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4 ">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button className="rounded-sm hidden md:block py-1.5 px-2 h-auto text-white  bg-blue-600 hover:bg-blue-900">
          Create
        </Button>
        <Button className="rounded-sm block md:hidden py-1.5 px-2 h-auto bg-blue-600 hover:bg-blue-900">
          <Plus className="h-4 w-4 text-white" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
      </div>
      <div className="ml-3">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: "30",
                width: "30",
              },
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
