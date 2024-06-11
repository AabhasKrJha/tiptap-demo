"use client";

import {Tiptap}  from "@/components/Tiptap"
import { Button } from "@/components/ui/button";

export default function ProfileForm() {
 
  function onSubmit(formData : FormData) {
    try{
      console.log(JSON.parse(formData.get("editor-output") as string).content)
    } catch {
      console.log("NO OUTPUT GEERATED")
    }
  }

  return (
    <div className="flex flex-col gap-20 container pt-10">
      <form action={onSubmit} className="space-y-8 rounded-lg">
        <input name="editor-output" id="editor-output" hidden/>
        <Tiptap/>
        <Button type="submit">Save</Button>
      </form>
      <div id="html-output"></div>
    </div>
  )
}
