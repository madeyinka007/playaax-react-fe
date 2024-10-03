/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Link } from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Code2,
  Quote,
  Maximize,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const MenuBar = ({ setHtmlContent }) => {
  const { editor } = useCurrentEditor();
  // const [htmlContent, setHtmlContent] = useState("");

  if (!editor) {
    return null;
  }

  const setLink = () => {
    const url = prompt("Enter the URL");

    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (editor) {
      setHtmlContent(editor.getHTML());
      editor.on("update", () => {
        setHtmlContent(editor.getHTML());
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  return (
    <>
      <div className="control-group">
        <div className="button-group flex items-center max-w-xl gap-2 flex-wrap mb-4">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : "editor-icons"}
          >
            <Bold className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : "editor-icons"}
          >
            <Italic className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : "editor-icons"}
          >
            <Strikethrough className="w-5 h-5" />
          </button>

          {/* <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : "editor-icons"}
          >
            <Code className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={setLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            Add Link
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            Remove Link
          </button> */}

          {/* <button
          type="button"
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            className="editor-icons"
          >
            Clear marks
          </button>
          <button
          type="button"
            onClick={() => editor.chain().focus().clearNodes().run()}
            className="editor-icons"
          >
            Clear nodes
          </button> */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={
              editor.isActive("paragraph") ? "is-active" : "editor-icons"
            }
          >
            Paragraph
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "is-active"
                : "editor-icons"
            }
          >
            H1
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "is-active"
                : "editor-icons"
            }
          >
            H2
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 })
                ? "is-active"
                : "editor-icons"
            }
          >
            H3
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 })
                ? "is-active"
                : "editor-icons"
            }
          >
            H4
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 })
                ? "is-active"
                : "editor-icons"
            }
          >
            H5
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 })
                ? "is-active"
                : "editor-icons"
            }
          >
            H6
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList") ? "is-active" : "editor-icons"
            }
          >
            <List className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive("orderedList") ? "is-active" : "editor-icons"
            }
          >
            <ListOrdered className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={
              editor.isActive("codeBlock") ? "is-active" : "editor-icons"
            }
          >
            <Code2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote") ? "is-active" : "editor-icons"
            }
          >
            <Quote className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="editor-icons"
          >
            <Maximize className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHardBreak().run()}
            className="editor-icons"
          >
            Hard break
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="editor-icons"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="editor-icons"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          {/* <button
          type="button"
            onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            className={
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : "editor-icons"
            }
          >
            <Droplet className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const TextEditor = ({ htmlContent, setHtmlContent, content }) => {
  return (
    <div className="border border-gray-200 p-5 rounded-xl">
      <EditorProvider
        slotBefore={
          <MenuBar htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
        }
        content={content}
        extensions={extensions}
      ></EditorProvider>
    </div>
  );
};

export default TextEditor;

// const content = `
// <h2>
//   Hi there,
// </h2>
// <p>
//   this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
// </p>
// <ul>
//   <li>
//     That’s a bullet list with one …
//   </li>
//   <li>
//     … or two list items.
//   </li>
// </ul>
// <p>
//   Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
// </p>
// <pre><code class="language-css">body {
//   display: none;
// }</code></pre>
// <p>
//   I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
// </p>
// <blockquote>
//   Wow, that’s amazing. Good work, boy! 👏
//   <br />
//   — Mom
// </blockquote>
// `;
