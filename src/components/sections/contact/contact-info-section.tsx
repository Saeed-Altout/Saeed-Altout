import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "saeedaltout25@gmail.com",
    href: "mailto:saeedaltout25@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote / Worldwide",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Saeed-Altout",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saeed-altout-16118b343",
  },
  // Adding Twitter/X as a placeholder or if known, otherwise maybe just the two known ones.
  // Based on footer, only Github and LinkedIn are known. I will stick to those.
];

export function ContactInfoSection() {
  return (
    <section id="contact-info">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="grid gap-6">
              {contactDetails.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.label}</h4>
                      {item.href !== "#" ? (
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Follow Me</h3>
            <div className="grid gap-4">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="hover:border-primary transition-colors duration-300">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <span className="font-semibold">{item.label}</span>
                      </div>
                      <div className="text-primary font-medium text-sm">
                        View Profile
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
