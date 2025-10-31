import { useLocation } from "wouter";
import ProjectCard from "./ProjectCard";
import analyticsImage from "@assets/generated_images/Analytics_dashboard_app_interface_851c3d8b.png";
import ecommerceImage from "@assets/generated_images/E-commerce_app_product_page_f36721cb.png";
import scanPayImage from "@assets/Group 48101464_1761884685041.png";

export default function ProjectsSection() {
  const [, setLocation] = useLocation();

  const projects = [
    {
      id: "scan-and-pay",
      image: scanPayImage,
      title: "Scan and Pay: Cashless Insurance",
      company: "Connect and Heal",
      description: "Solved cashless payment failure at non-network hospitals by introducing in-app Scan and Pay feature, eliminating operational risk and boosting revenue.",
      metrics: [
        { value: "100%", label: "Adoption" },
        { value: "+2%", label: "Revenue" },
        { value: "-3.5%", label: "Cancellation" },
      ],
      tags: ["HealthTech", "Payments", "B2C"],
    },
    {
      image: analyticsImage,
      title: "AI-Powered Safety Platform",
      company: "Navatech AI",
      description: "Led end-to-end product lifecycle for AI-driven Safety Tech platform in construction, delivering measurable impact across safety operations and efficiency.",
      metrics: [
        { value: "75%", label: "Efficiency" },
        { value: "-90%", label: "Incidents" },
        { value: "60%+", label: "Faster Ops" },
      ],
      tags: ["AI/ML", "B2B", "SaaS"],
    },
    {
      image: ecommerceImage,
      title: "Smart Sports Wearables",
      company: "Smart Cricket Global",
      description: "Played crucial role in product strategy and launch of sports tech products including broadcast data systems and smart wearables for multiple sports.",
      metrics: [
        { value: "20%", label: "Time Saved" },
        { value: "₹5L", label: "Cost Saved" },
        { value: "Intl", label: "Deployments" },
      ],
      tags: ["IoT", "Sports Tech", "Hardware"],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of impactful products I've built and launched
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => {
                if (project.id) {
                  console.log(`Opening case study: ${project.id}`);
                  setLocation(`/case-study/${project.id}`);
                } else {
                  console.log(`Clicked project: ${project.title}`);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
