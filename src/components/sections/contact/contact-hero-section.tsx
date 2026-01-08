import { MailIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function ContactHeroSection() {
  return (
    <section id="contact-hero">
      <Container className="relative flex items-center justify-center flex-col gap-y-6 text-center">
        <Badge variant="outline">
          <MailIcon />
          Contact Me
        </Badge>

        <h1 className="text-6xl font-bold max-w-4xl">
          Get in Touch & <span className="underline">Let&apos;s Chat</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Have a project in mind, a question, or just want to say hi? I&apos;d
          love to hear from you. Feel free to reach out using the form below or
          through my social channels.
        </p>
      </Container>
    </section>
  );
}
