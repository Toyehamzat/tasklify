"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { InputType, ReturnType } from "./types";
import { CreateBoard } from "./schema";
// import { createAuditLog } from "@/lib/create-audit-log";
// import { ACTION, ENTITY_TYPE } from "@prisma/client";
// import { incrementAvailableCount, hasAvailableCount } from "@/lib/org-limit";
// import { checkSubscription } from "@/lib/subscription";

// const handler = async (data: InputType): Promise<ReturnType> => {
//   const { userId, orgId } = auth();

//   if (!userId || !orgId) {
//     return {
//       error: "Unauthorized",
//     };
//   }

//   const { title, image } = data;

//   const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
//     image.split("|");

//   if (
//     !imageId ||
//     !imageThumbUrl ||
//     !imageFullUrl ||
//     !imageUserName ||
//     !imageLinkHTML
//   ) {
//     return {
//       error: "Missing fields. Failed to create board.",
//     };
//   }

//   let board;

//   try {
//     board = await db.board.create({
//       data: {
//         title,
//         orgId: orgId as string, // Specify the type of orgId as string
//         imageId,
//         imageThumbUrl,
//         imageFullUrl,
//         imageUserName,
//         imageLinkHTML,
//       },
//     });

//     // if (!isPro) {
//     //   await incrementAvailableCount();
//     // }

//     // await createAuditLog({
//     //   entityTitle: board.title,
//     //   entityId: board.id,
//     //   entityType: ENTITY_TYPE.BOARD,
//     //   action: ACTION.CREATE,
//     // });
//   } catch (error) {
//     return {
//       error: "Failed to create.",
//     };
//   }

//   revalidatePath(`/board/${board.id}`);
//   return { data: board };
// };

// export const createBoard = createSafeAction(CreateBoard, handler);

// Update the BoardCreateInput type definition to include orgId
type BoardCreateInput = {
  title: string;
  orgId: string;
  imageId: string;
  imageThumbUrl: string;
  imageFullUrl: string;
  imageUserName: string;
  imageLinkHTML: string;
  // Add other properties as needed
};

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML
  ) {
    return {
      error: "Missing fields. Failed to create board.",
    };
  }

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId, // Including orgId here
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create.",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
