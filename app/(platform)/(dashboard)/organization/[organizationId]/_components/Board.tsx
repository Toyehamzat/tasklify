import { DeleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import React from "react";

type BoardProps = {
  id: string;
  title: string;
};

const Board = ({ id, title }: BoardProps) => {
  const DeleteBoardWithId = DeleteBoard.bind(null, id);
  return (
    <form
      action={DeleteBoardWithId}
      className="flex flex-row items-center gap-x-2"
    >
      <p className="flex-1">{title}</p>
      <Button variant={"destructive"} size={"sm"} type="submit">
        Delete
      </Button>
    </form>
  );
};

export default Board;
