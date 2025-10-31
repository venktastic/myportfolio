import { Card } from "@/components/ui/card";
import { 
  Target, 
  BarChart3, 
  Palette, 
  Code2, 
  Users, 
  Lightbulb 
} from "lucide-react";

interface Skill {
  icon: React.ReactNode;
  category: string;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: Skill[] = [
    {
      icon: <Target className="h-6 w-6" />,
      category: "Product Strategy",
      skills: ["Roadmapping", "OKRs & KPIs", "Market Research", "Competitive Analysis"],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      category: "Analytics & Metrics",
      skills: ["Mixpanel", "Amplitude", "Google Analytics", "SQL"],
    },
    {
      icon: <Palette className="h-6 w-6" />,
      category: "Design & UX",
      skills: ["Figma", "User Research", "A/B Testing", "Wireframing"],
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      category: "Technical Skills",
      skills: ["API Design", "Agile/Scrum", "JIRA", "Git"],
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      category: "Methodologies",
      skills: ["Design Thinking", "Lean Startup", "Jobs-to-be-Done", "Growth Hacking"],
    },
    {
      icon: <Users className="h-6 w-6" />,
      category: "Collaboration",
      skills: ["Stakeholder Mgmt", "Cross-functional", "Slack", "Notion"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for driving product excellence
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-3" data-testid={`text-skill-category-${index}`}>
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-sm text-muted-foreground"
                        data-testid={`text-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
