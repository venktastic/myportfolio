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
      company: "Navatech AI",
      role: "Product Lead",
      period: "Sep 2024 - Present",
      achievements: [
        "Drove end-to-end product lifecycle for AI-driven Safety Tech platform, reducing reporting time from 12 mins to under 3 mins (75% efficiency boost)",
        "Launched AI-powered workflow automations preventing 90% of potential incidents and accelerating investigations by 60%+",
        "Pioneered Agentic AI applications to automate PRDs, UI wireframes, and JIRA workflows, enhancing team velocity",
      ],
    },
    {
      company: "Connect and Heal Primary Care",
      role: "Product Manager",
      period: "Jun 2022 - Sep 2024",
      achievements: [
        "Developed Scan and Pay cashless payment feature, achieving 2% revenue growth and 3.5% reduction in cancellation rates",
        "Increased net revenue by 5% by optimizing sorting logic based on consumer behavior patterns",
        "Digitized manual order booking flows reducing request-to-order creation time from 12 mins to 4 mins",
      ],
    },
    {
      company: "Smart Cricket Global",
      role: "Assistant Manager - Hardware Products",
      period: "Jan 2021 - Jun 2022",
      achievements: [
        "Led product strategy and launch of sports tech products at domestic and international cricket matches",
        "Reduced development time by 20% through market research and rapid prototyping",
        "Saved ₹5L and fast-tracked product launch through innovative electronics procurement solutions",
      ],
    },
    {
      company: "Intellicar Telematics",
      role: "Hardware Design Engineer + PM",
      period: "Jan 2019 - Dec 2020",
      achievements: [
        "Led production team delivering Keyless entry systems, completing ₹1.5 Cr deal on time",
        "Worked extensively in Telematics (CAN, LIN protocols), reverse engineering, and edge computing",
        "Saved ₹5+ lakhs through cost-saving initiatives in Wiring Harness design",
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
