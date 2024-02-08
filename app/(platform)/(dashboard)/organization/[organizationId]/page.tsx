import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import type { Metadata } from "next";
import Board from "./_components/Board";
import { Form } from "./_components/form";
import { useFormState } from "react-dom";

export const metadata: Metadata = {
  title: "dashboard",
  description: "...",
};

export default async function OrganizaionPage() {
  // const [] =useFormState(create)
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="flex flex-col gap-y-2">
        {boards.map((board:any) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
}
