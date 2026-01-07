import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Saeed Altout. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://github.com/Saeed-Altout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <IconBrandGithub className="size-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/saeed-altout-16118b343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="size-5" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
