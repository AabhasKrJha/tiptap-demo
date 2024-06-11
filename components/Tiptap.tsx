import {useEditor, EditorContent, Editor} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Text from '@tiptap/extension-text'
import Heading from "@tiptap/extension-heading";
import Paragraph from '@tiptap/extension-paragraph';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-Image';

import { Toolbar } from "./Toolbar";

export function Tiptap(){
    const editor = useEditor({
        extensions : [
            StarterKit.configure(),
            Document, Text, 
            Dropcursor,
            Heading.configure({
                levels: [1, 2, 3],
                HTMLAttributes : { 
                    class: "text-2xl font-bold py-4", 
                    levels : [2] 
                }
            }),
            Paragraph.configure({
                HTMLAttributes : {
                    class : "py-2",
                }
            }),
            Link.configure({
                protocols: [
                    {
                      scheme: 'https',
                      optionalSlashes: true
                    }
                ],
                openOnClick: true,
                autolink: true,
                HTMLAttributes : {
                    class : "color-blue-300 underline",
                }
            }),
            Image.configure({
                HTMLAttributes : {
                    class : "w-[50%] h-auto m-auto rounded-lg",
                }
            })
        ],
        editorProps : {
            attributes : {
                class : "border-2 p-4 rounded-lg"
            }
        }, 
        onUpdate({editor}) {
            (document.getElementById("editor-output") as HTMLInputElement).value = JSON.stringify(editor.getJSON());
            (document.getElementById("html-output") as HTMLDivElement).innerHTML = editor.getHTML();
        }
    })
    return(
        <div className="space-y-6">
            <Toolbar editor={editor as Editor}/>
            <EditorContent editor={editor}/>
        </div>
       
    )
}