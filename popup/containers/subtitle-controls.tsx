import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";
import React, { useRef } from "react";

const SubtitleControls = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {};

  return (
    <div>
      <label className="block w-full">
        <input ref={inputRef} type="file" accept=".srt" className="hidden" />
        <Button
          size="lg"
          type="button"
          className="w-full justify-start px-3 gap-3 cursor-pointer"
          onClick={handleOnClick}
        >
          <CloudUpload className="w-5 h-5" />
          <span>{"Upload Subtitles"}</span>
        </Button>
      </label>
    </div>
  );
};

export default SubtitleControls;
