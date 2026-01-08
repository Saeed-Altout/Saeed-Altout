import { ArrowRightIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function CTASection() {
  return (
    <section id="featured-projects">
      <Container className="space-y-8">
        <Heading
          title="Let's Build Something"
          special="Amazing Together"
          description="Whether you have a project in mind or just want to connect, I' d love to hear from you. Let's create something extraordinary."
        />
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-6 border-y px-4 py-8">
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
            <h2 className="text-center font-bold text-2xl">
              Ready to start your next project?
            </h2>
            <p className="text-center text-muted-foreground">
              Get in touch and let&apos;s discuss how I can help bring your
              vision to life.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Button variant="outline">
              Get Started <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
