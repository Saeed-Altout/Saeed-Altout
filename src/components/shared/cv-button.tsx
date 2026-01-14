import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

export function CvButton() {
  //   const downloadCV = () => {
  //     const link = document.createElement("a");
  //     link.href = "/cv.pdf";
  //     link.download = "Saeed_Altout_CV.pdf";
  //     link.click();
  //   };

  return (
    <Button size="sm" variant="ghost" asChild>
      <a href="/cv.pdf" download="Saeed_Altout_Cv.pdf">
        <FileIcon />
        Download CV
      </a>
    </Button>
  );
}
