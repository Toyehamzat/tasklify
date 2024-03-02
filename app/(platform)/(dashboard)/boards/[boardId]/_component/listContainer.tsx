import { List } from "@prisma/client";

interface ListContainerProps {
  data: List[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return <div>list container</div>;
};
