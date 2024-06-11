import { Editor } from "@tiptap/react"
import { Toggle } from "./ui/toggle"
import { Bold, Heading1, Heading2, Heading3, Image, Italic, Link, Underline } from 'lucide-react';
import React, { useCallback } from 'react'
import { Button } from "./ui/button";

type Props = {
    editor : Editor
}

export function Toolbar({editor} : {editor : Editor}){

    const setLink = useCallback(() => {
        // const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL (start with http:// or https://')
    
        if (url === null) { return }
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
            return
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])    

    const addImage = useCallback(() => {
        const url = window.prompt('Image URL')
    
        if (url) {
          editor.chain().focus().setImage({ src: url }).run()
        }
      }, [editor])
    
    if (!editor) { return null }
  
    return (
        <div className="p-2 border-2 rounded-lg w-fit flex items-center gap-2">

            <Toggle 
                size={"sm"}
                pressed = {editor.isActive("heading", { level: 1 })}
                onPressedChange={() => 
                    editor.chain().focus().toggleHeading({level : 1}).run() 
                }
            >
                <Heading1 className="h-4 w-4"/>
            </Toggle>

            <Toggle 
                size={"sm"}
                pressed = {editor.isActive("heading", { level: 2 })}
                onPressedChange={() => 
                    editor.chain().focus().toggleHeading({level : 2}).run() 
                }
            >
                <Heading2 className="h-4 w-4"/>
            </Toggle>

            <Toggle 
                size={"sm"}
                pressed = {editor.isActive("heading", { level: 3 })}
                onPressedChange={() => 
                    editor.chain().focus().toggleHeading({level : 3}).run() 
                }
            >
                <Heading3 className="h-4 w-4"/>
            </Toggle>


            <Toggle 
                size={"sm"}
                pressed = {editor.isActive("bold")}
                onPressedChange={() => 
                    editor.chain().focus().toggleBold().run() 
                }
            >
                <Bold className="h-4 w-4"/>
            </Toggle>

            <Toggle 
                size={"sm"}
                pressed = {editor.isActive("italic")}
                onPressedChange={() => 
                    editor.chain().focus().toggleItalic().run() 
                }
            >
                <Italic className="h-4 w-4"/>
            </Toggle>

            <Toggle 
                size={"sm"}
                pressed = {editor.isActive("link")}
                onClick={setLink}
            >
                <Link className="h-4 w-4"/>
            </Toggle>

            <Toggle 
                size={"sm"}
                onClick={addImage}
                pressed = {false}
            >
                <Image className="h-4 w-4"/>
            </Toggle>
            
            <Button type="submit">Save</Button>
        </div>
    )
  }
  