import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { title } from "process";
import BoardNavBar from "./_component/BoardNavBar";

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = auth();

  if (!orgId) {
    return {
      title: "boards",
    };
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "boards",
  };
}

export default async function boardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }
  return (
    <div
      className="h-full bg-cover relative bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavBar data={board} />
      <div className="absolute inset-0 bg-black/20 " />
      <main className="h-full relative pt-28">{children}</main>
    </div>
  );
}
