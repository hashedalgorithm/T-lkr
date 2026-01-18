"use client";

import { Separator } from "@/components/ui/separator";
import SubtitleControls from "@/containers/subtitle-controls";
import { ClosedCaption } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col gap-2 w-full py-8 px-4">
      <div className="flex flex-col gap-1 items-center w-full">
        <div className="flex gap-2 items-center">
          <ClosedCaption className="w-8 h-auto" />
          <h3 className="font-medium text-3xl">T&uacute;lkr</h3>
        </div>
        <p className="text-sm text-center">
          Upload .srt subtitle files to enhance your viewing experience across
          different websites.
        </p>
      </div>

      <Separator className="w-4/5" />

      <SubtitleControls />
    </main>
  );
}
