import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { board } from "@prisma/client";
import React from "react";
import { BoardTitleForm } from "./BoardTitleForm";
import { BoardOptions } from "./BoardOtions";

interface BoardNavBarProps {
  data: board;
}
async function BoardNavBar({ data }: BoardNavBarProps) {
  return (
    <div className="w-full h-14 text-white z-[40] x-4 md:px-10 gap-x-4 flex items-center fixed bg-black/50 top-14 ">
      <BoardTitleForm data={data} />
      <div className=" ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
}

export default BoardNavBar;
