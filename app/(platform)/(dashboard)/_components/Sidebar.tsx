"use client";

import React from "react";
import { Plus } from "lucide-react";
import uselocalStorage, { useLocalStorage } from "usehooks-ts";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

type SidebarProps = {
  storageKey?: string;
};

function Sidebar({ storageKey = "t-sidebar-state" }: SidebarProps) {
  const [expanded, SetExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isloadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isloadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const 
  return <div>Sidebar!</div>;
}

export default Sidebar;
