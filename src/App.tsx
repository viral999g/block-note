import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function App() {
  // Creates a new editor instance.
  const editor = useBlockNote({
    initialContent: [
      {
        id: "0e28a7c8-73d9-419b-a7cd-c388ee4bcb06",
        type: "heading",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
          level: "1",
        },
        content: [
          {
            type: "text",
            text: "Wokelo123 ",
            styles: {
              textColor: "gray",
            },
          },
          {
            type: "text",
            text: "Test ",
            styles: {
              bold: true,
              italic: true,
              textColor: "gray",
            },
          },
        ],
        children: [],
      },
      {
        id: "85682f14-7cc9-4abd-9e2e-d0bc0e737f98",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ],
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks);
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}

export default App;
