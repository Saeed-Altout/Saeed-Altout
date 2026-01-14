"use client";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

export function CvButton() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Saeed_Altout_CV.pdf";
    link.click();
  };

  return (
    <Button size="sm" variant="ghost" onClick={downloadCV}>
      <FileIcon />
      Download Cv
    </Button>
  );
}
