import { Editor } from "novel";
import { ChangeEvent } from "react";

export default function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-2">
      <div className="w-full  ">
        <div className="flex items-center justify-between ">
          <Editor
            disableLocalStorage={true}
            defaultValue={{
              type: "doc",
              content: [],
            }}
            onDebouncedUpdate={(editor?: any) => {
              onChange(editor?.getHTML());
            }}
          />
        </div>
      </div>
    </div>
  );
}
