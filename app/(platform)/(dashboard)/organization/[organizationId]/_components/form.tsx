"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const {execute,fieldErrors} =useAction(createBoard,{
    onSuccess:(data) =>{
      console.log(data,"SUCCESS")
    },
    onError:(error)=>{
      console.log(error)
    }
  })

  const onSubmit =(formData:FormData)=>{
    const title = formData.get("title") as string

    execute({title})
  }
  return (
    <form action={onSubmit} className="flex flex-row space-x-2">
      <FormInput 
      id="title"
      errors={fieldErrors}
      />
      <FormSubmit>
        Submit
      </FormSubmit>
    </form>
  );
};
