"use client";

import { ListWithCards } from "@/types";
import { ListWrapper } from "./listWrapper";
import { ListHeader } from "./listHeader";

interface ListItemProps {
  id: string;
  index: number;
  data: ListWithCards;
}
export const ListItem = ({ id, index, data }: ListItemProps) => {
  return (
    <ListWrapper>
      <div className="w-full rounded-md shadow-md bg-[#f1f2f4] pb-1">
        <ListHeader data={data} />
      </div>
    </ListWrapper>
  );
};
