import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    type: "Remote",
    description:
      "Building custom web applications for clients worldwide, specializing in React and Next.js solutions. Delivering high-quality, scalable projects that exceed client expectations.",
    achievements: [
      "Developed 15+ production-ready web applications",
      "Maintained 98% client satisfaction rate",
      "Implemented modern UI/UX best practices",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Tech Startup",
    period: "2022 - 2023",
    type: "Full-time",
    description:
      "Contributed to building a SaaS platform from the ground up, working with both frontend and backend technologies to deliver a seamless user experience.",
    achievements: [
      "Built reusable component library used across 5+ projects",
      "Improved application performance by 40%",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    type: "Full-time",
    description:
      "Started my professional journey creating responsive websites and web applications for various clients in different industries.",
    achievements: [
      "Converted 20+ designs to pixel-perfect implementations",
      "Learned modern development workflows and tools",
      "Participated in code reviews and team meetings",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience">
      <Container className="flex items-center justify-center flex-col gap-y-12 py-20">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold max-w-3xl mx-auto">
            Professional <span className="underline">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A track record of delivering exceptional results and continuous
            growth in the web development field.
          </p>
        </div>

        <div className="w-full max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <BriefcaseIcon className="size-5" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{exp.period}</Badge>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-sm">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
