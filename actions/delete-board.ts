"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function DeleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath("organization/org_2bUWDwYwMaaS0JMEQzQe4byMo4F");
}
