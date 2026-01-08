"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/ui/heading";

export function ContactFormSection() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });

    // Reset form
    (event.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact-form">
      <Container className="pt-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <form
            onSubmit={onSubmit}
            className="space-y-6 p-8 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                className="min-h-[150px]"
                required
                disabled={isLoading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <SendIcon className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
