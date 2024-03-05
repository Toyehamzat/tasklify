"use client";
import { ListWithCards } from "@/types";
import { ListForm } from "./ListForm";
import { useEffect, useState } from "react";
import { ListItem } from "./listItem";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedList, setOrderedList] = useState(data);

  useEffect(() => {
    setOrderedList(data);
  }, [data]);
  return (
    <ol className="flex gap-x-3 h-full">
      {orderedList.map((list, index) => {
        return (
          <li key={list.id}>
            <ListItem id={list.id} index={index} data={list} />
          </li>
        );
      })}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
