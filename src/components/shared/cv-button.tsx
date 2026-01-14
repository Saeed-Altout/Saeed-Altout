"use client";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

export function CvButton() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Saeed_Altout_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button size="sm" variant="ghost" onClick={downloadCV}>
      <FileIcon />
      Download Cv
    </Button>
  );
}
