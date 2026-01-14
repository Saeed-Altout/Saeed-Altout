import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";
import Link from "next/link";

export function CvButton() {
  //   const downloadCV = () => {
  //     const link = document.createElement("a");
  //     link.href = "/cv.pdf";
  //     link.download = "Saeed_Altout_CV.pdf";
  //     link.click();
  //   };

  return (
    <Button size="sm" variant="ghost" asChild>
      <Link href="/cv.pdf" download="Saeed_Altout_Cv.pdf">
        <FileIcon />
        Download CV
      </Link>
    </Button>
  );
}
