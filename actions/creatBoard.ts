"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const CreateBaord = z.object({
  title: z.string(),
});
export async function create(formdata: FormData) {
  const { title } = CreateBaord.parse({
    title: formdata.get("title"),
  });

  await db.board.create({
    data: {
      title,
    },
  });
}
