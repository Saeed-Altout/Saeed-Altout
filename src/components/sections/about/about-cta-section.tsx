import { ArrowRightIcon, PlusIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function AboutCTASection() {
  return (
    <section id="about-cta">
      <Container className="flex items-center justify-center flex-col gap-y-6 py-20">
        <h2 className="text-5xl font-bold max-w-4xl text-center">
          Let&apos;s Build Something{" "}
          <span className="underline">Amazing Together</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed text-center">
          Whether you have a project in mind or just want to connect, I&apos; d
          love to hear from you. Let&apos;s create something extraordinary.
        </p>

        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
          <PlusIcon
            className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
            strokeWidth={1}
          />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

          <div className="space-y-1">
            <h3 className="text-center font-bold text-2xl">
              Ready to start your next project?
            </h3>
            <p className="text-center text-muted-foreground">
              Get in touch and let&apos;s discuss how I can help bring your
              vision to life.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Button variant="outline">
              <MailIcon className="size-4 mr-1" />
              View Projects
            </Button>
            <Button>
              Get In Touch <ArrowRightIcon className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
