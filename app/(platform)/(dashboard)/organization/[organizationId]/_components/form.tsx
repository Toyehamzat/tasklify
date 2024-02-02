"use client";

import { create } from "@/actions/create-board/create-board";
import { Button } from "@/components/ui/button";

export const Form = () => {
  return (
    <form action={create} className="flex flex-row space-x-2">
      <input
        id="title"
        name="title"
        placeholder="enter board name"
        className="border-black border p-1"
      />
      <Button variant={"default"} size={"sm"}>
        Submit
      </Button>
    </form>
  );
};
