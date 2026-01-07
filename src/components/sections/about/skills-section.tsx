import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
      "Responsive Design",
      "CSS Modules",
      "SASS/SCSS",
    ],
  },
  {
    category: "State & Data",
    skills: [
      "React Query",
      "Zustand",
      "Redux Toolkit",
      "REST APIs",
      "GraphQL",
      "Axios",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "Git & GitHub",
      "VS Code",
      "npm/yarn",
      "Webpack",
      "Vite",
      "ESLint/Prettier",
    ],
  },
  {
    category: "Backend Basics",
    skills: [
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Authentication",
    ],
  },
  {
    category: "Best Practices",
    skills: [
      "Clean Code",
      "Component Architecture",
      "Performance Optimization",
      "Accessibility",
      "SEO",
      "Testing",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <Container className="flex items-center justify-center flex-col gap-y-12 py-20">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold max-w-3xl mx-auto">
            Technical <span className="underline">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern web applications from
            concept to deployment.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-lg border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card"
            >
              <h3 className="text-xl font-bold">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
