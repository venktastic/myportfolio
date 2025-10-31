import { Card } from "@/components/ui/card";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export default function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      company: "TechCorp",
      role: "Senior Product Manager",
      period: "2021 - Present",
      achievements: [
        "Led product strategy for $20M ARR analytics platform, achieving 150% YoY growth",
        "Shipped 12 major features that increased user engagement by 45%",
        "Built and mentored team of 3 associate PMs",
      ],
    },
    {
      company: "ShopFlow",
      role: "Product Manager",
      period: "2018 - 2021",
      achievements: [
        "Launched mobile commerce app that generated $15M in first year revenue",
        "Reduced checkout abandonment by 35% through conversion optimization",
        "Managed cross-functional team of 15 engineers and designers",
      ],
    },
    {
      company: "HealthTech Solutions",
      role: "Associate Product Manager",
      period: "2016 - 2018",
      achievements: [
        "Designed patient portal used by 50K+ users with 4.8 star rating",
        "Conducted 100+ user interviews to identify key pain points",
        "Improved onboarding completion rate from 45% to 78%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-experience-title">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Building innovative products across different industries
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 relative"
              data-testid={`card-experience-${index}`}
            >
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-full h-8 w-0.5 bg-border -translate-x-1/2" />
              )}
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {exp.company.substring(0, 1)}
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold" data-testid={`text-role-${index}`}>
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground" data-testid={`text-period-${index}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium" data-testid={`text-company-${index}`}>
                      {exp.company}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className="flex gap-3 text-muted-foreground"
                        data-testid={`text-achievement-${index}-${achIndex}`}
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
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
