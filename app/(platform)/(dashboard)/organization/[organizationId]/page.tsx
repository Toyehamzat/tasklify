import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import { BoardList } from "./_components/board-list";
import { Info } from "./_components/info";

export const metadata: Metadata = {
  title: "dashboard",
  description: "...",
};

export default async function OrganizaionPage() {
  return (
    <div className="w-full mb-20">
     <Info/>
     <Separator className="my-4"/>
     <div className="px-2 md:px-4">
       <BoardList/>
     </div>
    </div>
  );
}
