import ProjectCard from "./ProjectCard";
import analyticsImage from "@assets/generated_images/Analytics_dashboard_app_interface_851c3d8b.png";
import ecommerceImage from "@assets/generated_images/E-commerce_app_product_page_f36721cb.png";
import healthcareImage from "@assets/generated_images/Healthcare_portal_dashboard_interface_f3535674.png";

export default function ProjectsSection() {
  const projects = [
    {
      image: analyticsImage,
      title: "Analytics Dashboard Redesign",
      company: "TechCorp",
      description: "Redesigned enterprise analytics platform to improve data accessibility and drive user engagement across 10,000+ business users.",
      metrics: [
        { value: "+45%", label: "Engagement" },
        { value: "3.2x", label: "Daily Usage" },
        { value: "92%", label: "Satisfaction" },
      ],
      tags: ["B2B", "SaaS", "Analytics"],
    },
    {
      image: ecommerceImage,
      title: "Mobile Commerce Platform",
      company: "ShopFlow",
      description: "Led end-to-end development of mobile-first shopping experience that drove significant revenue growth and conversion improvements.",
      metrics: [
        { value: "$15M", label: "First Year" },
        { value: "-35%", label: "Abandonment" },
        { value: "4.8★", label: "App Rating" },
      ],
      tags: ["B2C", "Mobile", "E-commerce"],
    },
    {
      image: healthcareImage,
      title: "Patient Portal Experience",
      company: "HealthTech Solutions",
      description: "Designed intuitive patient portal improving healthcare access and engagement for 50,000+ patients across multiple hospitals.",
      metrics: [
        { value: "50K+", label: "Active Users" },
        { value: "+33%", label: "Completion" },
        { value: "4.8★", label: "User Rating" },
      ],
      tags: ["Healthcare", "B2C", "Accessibility"],
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
              onClick={() => console.log(`Clicked project: ${project.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
